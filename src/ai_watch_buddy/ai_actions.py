import json
from typing import Literal
import numpy as np
from pydantic import BaseModel, Field, RootModel


# 這是一個基礎模型，定義了所有 Action 的共性
class BaseAction(BaseModel):
    model_config = {"arbitrary_types_allowed": True}
    
    # 每個 Action 都應該有一個獨一無二的 ID，方便追蹤和日誌記錄
    id: str = Field(..., description="一個唯一的動作 ID，可以用 UUID 生成")
    # 這個 Action 在影片的哪個時間點被觸發？這是反應的錨點。
    trigger_timestamp: float = Field(..., description="此動作在影片中的觸發時間點 (秒)")
    # 一個給開發者看的備註，解釋為什麼 AI 會做這個反應。LLM 也會填寫它。
    comment: str = Field(..., description="AI 做出此反應的簡要理由")


# --- 開始定義具體的 Action 類型 ---


# 1. 說話 (Speak)
class SpeakAction(BaseAction):
    action_type: Literal["SPEAK"] = "SPEAK"
    text: str = Field(..., description="AI 要說的內容")
    audio: np.ndarray | None = Field(
        None,
        description="AI 說話的音頻數據，由tts 生成，不要填写。",
    )
    # 這個布林值非常關鍵，它決定了是「畫外音」還是「暫停解說」
    pause_video: bool = Field(
        default=True,
        description="說話時是否需要先暫停影片。如果為 true，則在說話期間影片會暫停，否則，視頻不會暫停，一边说话，视频会一边播放。如果句子较短，且下一句话离的较远，建议设置为 false，这样可以让视频更连贯。",
    )
    


# 2. 暫停 (Pause) - 用於模擬思考、驚訝等無言的反應
class PauseAction(BaseAction):
    action_type: Literal["PAUSE"] = "PAUSE"
    # 暫停多久？這給予了精確的節奏控制
    duration_seconds: float = Field(..., description="暫停的持續時間 (秒)")


# 3. 影片控制 (Video Control)
class SeekAction(BaseAction):
    action_type: Literal["SEEK"] = "SEEK"
    target_timestamp: float = Field(..., description="要跳轉到的影片時間點 (秒)")
    # 跳轉後做什麼？這個很重要！
    # 'RESUME_PLAYBACK': 跳轉後繼續播放
    # 'STAY_PAUSED': 跳停在那個畫面，等待下一個指令
    post_seek_behavior: Literal["RESUME_PLAYBACK", "STAY_PAUSED"] = "STAY_PAUSED"


# 4. 重看片段 (Replay Segment) - 這是一個複合動作，但我們將其原子化，方便 LLM 生成
class ReplaySegmentAction(BaseAction):
    action_type: Literal["REPLAY_SEGMENT"] = "REPLAY_SEGMENT"
    start_timestamp: float = Field(..., description="重看片段的開始時間(秒)")
    end_timestamp: float = Field(..., description="重看片段的結束時間(秒)")
    # 重看完之後的行為，是回到原來的地方，還是停在片段結尾？
    # 'RESUME_FROM_ORIGINAL': 回到觸發此動作的時間點繼續播放
    # 'STAY_PAUSED_AT_END': 停在 end_timestamp 處
    post_replay_behavior: Literal["RESUME_FROM_ORIGINAL", "STAY_PAUSED_AT_END"] = (
        "RESUME_FROM_ORIGINAL"
    )


# # 5. 改變表情/動作 (Emote) - 這是 Live2D 項目的靈魂！
# class EmoteAction(BaseAction):
#     action_type: Literal["EMOTE"] = "EMOTE"
#     # 表情名稱需要與你的 Live2D 模型資源對應
#     expression: str = Field(
#         ...,
#         description="要切換的 Live2D 表情或動作，例如 'Surprised', 'Thinking', 'Laughing'",
#     )
#     # 表情持續多久？0 表示永久，直到下一個 EmoteAction
#     duration_seconds: float = Field(
#         default=0, description="表情/動作的持續時間 (秒)，0 表示直到下一個表情變化"
#     )


# 6. 向用户提问 (Ask User) - 實現交互的核心。当被调用，控制权交还给用户yun x
class AskUser(BaseAction):
    action_type: Literal["ASK_USER"]


class EndReaction(BaseAction):
    action_type: Literal["END_REACTION"] = "END_REACTION"
    # 這個 Action 用於結束當前的反應，讓 AI 知道何時結束
    # 這對於長時間的影片反應特別有用


# --- 使用 Discriminated Union 組合所有 Action ---

# 這一步是 Pydantic V2 的精華所在
# 我們告訴 Pydantic，所有 Action 的聯集由 'action_type' 這個欄位來區分
Action = (
    SpeakAction | PauseAction | SeekAction | ReplaySegmentAction | AskUser | EndReaction
)  # | EmoteAction


# 最後，我們的 Action Script 就是一個 Action 的列表
# 使用 RootModel 可以讓 Pydantic 直接驗證一個列表的根類型
class ActionScript(RootModel[list[Action]]):
    pass


if __name__ == "__main__":
    with open("schema.json", "w", encoding="utf-8") as f:
        json.dump(ActionScript.model_json_schema(), f, ensure_ascii=False, indent=2)
    print("Schema saved to schema.json")
