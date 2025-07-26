import json
from typing import Literal, List
from pydantic import BaseModel, Field, RootModel


# 這是一個基礎模型，定義了所有 Action 的共性
class BaseAction(BaseModel):
    """
    所有具體反應動作的基礎模型，定義了每個動作都必須包含的通用屬性。
    """

    model_config = {"arbitrary_types_allowed": True}

    # 每個 Action 都應該有一個獨一無二的 ID，方便追蹤和日誌記錄
    id: str = Field(
        ..., description="一個唯一的動作 ID，建議使用 UUID 生成，用於追蹤和調試。"
    )
    # 這個 Action 在影片的哪個時間點被觸發？這是反應的錨點。
    trigger_timestamp: float = Field(
        ...,
        description="此動作在影片中的觸發時間點 (單位: 秒)，代表 AI 在看到這一秒的內容時決定做出反應。",
    )
    # 一個給開發者看的備註，解釋為什麼 AI 會做這個反應。LLM 也會填寫它。
    comment: str = Field(
        ...,
        description="AI 做出此反應的內心想法或理由的簡要文字描述，主要用於調試或分析 AI 的決策過程。",
    )


# --- 開始定義具體的 Action 類型 ---


# 1. 說話 (Speak)
class SpeakAction(BaseAction):
    """
    讓 AI 角色說出指定的文本。這是最核心的互動方式。
    """

    action_type: Literal["SPEAK"] = "SPEAK"
    text: str | None = Field(..., description="AI 角色要說出的具體內容。")
    audio: str | None = Field(
        None,
        description="由 TTS (Text-to-Speech) 服務生成的音頻數據的標識符或路徑。此欄位由後端系統填充，LLM 無需填寫。",
    )
    #TODO emotion_expressions: Literal[]
    # 這個布林值非常關鍵，它決定了是「畫外音」還是「暫停解說」
    pause_video: bool = Field(
        default=True,
        description="決定說話時是否需要暫停影片。True 表示暫停影片進行解說。False 表示在影片繼續播放的同時發表評論（畫外音）。推荐使用 False 以保持影片流暢性，除非句子特别特别长。",
    )


# 2. 暫停 (Pause) - 用於模擬思考、驚訝等無言的反應
class PauseAction(BaseAction):
    """
    讓 AI 進行一次無言的暫停。可以用來模擬思考、驚訝，或在兩個動作之間創造節奏感，讓反應更自然。暂停会停止视频时间的变化直到 duration_seconds 结束，如果需要暂停后说话，请使用 SpeakAction (pause_video=True) 而无需使用 PauseAction。
    """

    action_type: Literal["PAUSE"] = "PAUSE"
    # 暫停多久？這給予了精確的節奏控制
    duration_seconds: float = Field(..., description="需要暫停的持續時間 (單位: 秒)。")


# 3. 影片控制 (Video Control)
class SeekAction(BaseAction):
    """
    控制影片的播放進度，讓 AI 可以跳轉到影片的某個特定時間點，通常是為了回顧或預告某個細節。SeekAction 跳转后会继承视频跳转前的播放状态 (暂停 / 播放)
    """

    action_type: Literal["SEEK"] = "SEEK"
    target_timestamp: float = Field(
        ..., description="要跳轉到的目標影片時間點 (單位: 秒)。"
    )
    # 跳轉後做什麼？這個很重要！
    # 'RESUME_PLAYBACK': 跳轉後繼續播放
    # 'STAY_PAUSED': 跳停在那個畫面，等待下一個指令
    post_seek_behavior: Literal["RESUME_PLAYBACK", "STAY_PAUSED"] = Field(
        "STAY_PAUSED",
        description="指定跳轉到目標時間點後的行為。'STAY_PAUSED' 表示停在該畫面，'RESUME_PLAYBACK' 表示立即開始播放。",
    )


# 4. 重看片段 (Replay Segment) - 這是一個複合動作，但我們將其原子化，方便 LLM 生成
class ReplaySegmentAction(BaseAction):
    """
    讓 AI 重播影片的某一個片段。常用於對精彩、有趣或關鍵的細節進行強調、分析和評論。
    """

    action_type: Literal["REPLAY_SEGMENT"] = "REPLAY_SEGMENT"
    start_timestamp: float = Field(
        ..., description="需要重播片段的開始時間點 (單位: 秒)。"
    )
    end_timestamp: float = Field(
        ..., description="需要重播片段的結束時間點 (單位: 秒)。"
    )
    # 重看完之後的行為，是回到原來的地方，還是停在片段結尾？
    # 'RESUME_FROM_ORIGINAL': 回到觸發此動作的時間點繼續播放
    # 'STAY_PAUSED_AT_END': 停在 end_timestamp 處
    post_replay_behavior: Literal["RESUME_FROM_ORIGINAL", "STAY_PAUSED_AT_END"] = Field(
        "RESUME_FROM_ORIGINAL",
        description="定義了重播結束後的行為。'RESUME_FROM_ORIGINAL' 表示播放頭將跳回到觸發此重播動作的原始時間點並繼續播放，'STAY_PAUSED_AT_END' 表示播放將停在重播片段的結尾處。",
    )


# 5. 結束反應 (End Reaction) - 用於控制反應流程
class EndReaction(BaseAction):
    """
    標記一組反應動作的結束。這是一個流程控制指令，主要有兩個用途：
    1. 當 AI 向用戶提問後 (通常是一個 SpeakAction)，應立刻跟隨一個 EndReaction。這會暫停 AI 的後續動作，將控制權交還給用戶，等待用戶的回應或下一個指令。
    2. 對於長影片，可以將一連串的反應拆分成多個由 EndReaction 分隔的區塊。這能避免一次性生成過多的 Action。如果用戶中途打断，就不會浪費已經生成但未被執行的反應，同時也讓系統能更靈活地處理用戶互動。
    """

    action_type: Literal["END_REACTION"] = "END_REACTION"


# --- 使用 Discriminated Union 組合所有 Action ---

# 這一步是 Pydantic V2 的精華所在
# 我們告訴 Pydantic，所有 Action 的聯集由 'action_type' 這個欄位來區分
# 這使得解析 JSON 數據時可以根據 'action_type' 的值自動匹配到對應的 Action 模型
Action = SpeakAction | PauseAction | SeekAction | ReplaySegmentAction | EndReaction


# 最後，我們的 Action Script 就是一個 Action 的列表
# 使用 RootModel 可以讓 Pydantic 直接驗證一個列表的根類型，確保整個腳本的結構正確
class ActionScript(RootModel[list[Action]]):
    """
    定義了 AI 反應腳本的最終結構，它是一個包含多個具體 Action 的有序列表。
    """

    pass


class UserInteractionPayload(BaseModel):
    """
    Defines the structure of the data payload for a user interaction,
    such as 'trigger-conversation'.
    """

    # A list of actions the user just performed.
    user_action_list: List[Action]

    # A list of AI actions that were pending (not yet executed) when the user interrupted.
    pending_action_list: List[Action]


if __name__ == "__main__":
    # 這段代碼會將上面定義的 Pydantic 模型轉換成 JSON Schema 文件
    # 這個 Schema 文件可以被其他應用程式或 LLM 用來理解和生成符合格式的數據
    with open("schema.json", "w", encoding="utf-8") as f:
        # 使用 model_json_schema() 方法生成 JSON Schema
        # ensure_ascii=False 確保中文字符能正確顯示
        # indent=2 讓輸出的 JSON 文件格式化，方便閱讀
        json.dump(ActionScript.model_json_schema(), f, ensure_ascii=False, indent=2)
    print("Schema saved to schema.json")
