import json
import asyncio
from collections.abc import AsyncGenerator
from json_repair import repair_json
from pydantic import ValidationError, TypeAdapter
from .ai_actions import Action, ActionScript

# ==============================
sample_json = """
    [
  {
    "action_type": "PAUSE",
    "id": "e0b02f90-8452-442c-a28a-77c8e8749c95-1",
    "trigger_time": 0.5,
    "comment": "开幕雷击，先表达一下震惊，顺便吐槽一下这个离谱的标题。 (Pausing to comment)"
  },
  {
    "action_type": "SPEAK",
    "id": "e0b02f90-8452-442c-a28a-77c8e8749c95-2",
    "trigger_time": 0.5,
    "comment": "开幕雷击，先表达一下震惊，顺便吐槽一下这个离谱的标题。",
    "text": "啊？等一下，UCLA计算机硕士...在孟加拉上学？这是什么地狱开局啊喂！"
  },
  {
    "action_type": "RESUME",
    "id": "e0b02f90-8452-442c-a28a-77c8e8749c95-3",
    "trigger_time": 0.5,
    "comment": "Resuming playback after initial comment."
  },
  {
    "action_type": "PAUSE",
    "id": "18f75c2e-4b48-4389-9e8c-529a9e3a62d0-1",
    "trigger_time": 7,
    "comment": "经典恒河水，必须得吐槽一下，突出一个腹黑。 (Pausing to comment)"
  },
  {
    "action_type": "SPEAK",
    "id": "18f75c2e-4b48-4389-9e8c-529a9e3a62d0-2",
    "trigger_time": 7,
    "comment": "经典恒河水，必须得吐槽一下，突出一个腹黑。",
    "text": "起床第一件事，先来一杯纯天然的恒河茶，这才是真正的大学牲啊！你看他喝完，眼神都清澈了许多呢（大概）。"
  },
  {
    "action_type": "RESUME",
    "id": "18f75c2e-4b48-4389-9e8c-529a9e3a62d0-3",
    "trigger_time": 7,
    "comment": "Resuming playback after comment."
  },
  {
    "action_type": "SPEAK",
    "id": "c138fd94-912f-4c12-9c3f-c80f082e6d6c",
    "trigger_time": 14,
    "comment": "对冷水浇头和身材进行评论，带一点花痴的感觉，但还是以搞笑为主。 (This was a non-pausing comment, so it's a single action)",
    "text": "哇哦，冷水喷醒身体...顺便秀一下腹肌是吧？懂了，这是高材生的独特叫醒服务。"
  },
  {
    "action_type": "PAUSE",
    "id": "a92e10c7-e547-4f81-80a9-197147b30c33-1",
    "trigger_time": 21,
    "comment": "看到他吃东西的痛苦面具和被大姐强制喂食，忍不住笑出来，并进行腹黑吐槽。 (Start of a timed pause)."
  },
  {
    "action_type": "SPEAK",
    "id": "d4c9d5d8-0f66-4e4f-b1e7-91f94d93026f",
    "trigger_time": 22,
    "comment": "看到他吃东西的痛苦面具和被大姐强制喂食，忍不住笑出来，并进行腹黑吐槽。",
    "text": "哈哈哈哈，你看他那个表情，好像在说“这玩意儿吃了真的不会喷射吗？” 结果大姐直接上手了，挑食可不是好孩子哦~"
  },
  {
    "action_type": "RESUME",
    "id": "a92e10c7-e547-4f81-80a9-197147b30c33-2",
    "trigger_time": 27,
    "comment": "Resuming after the 6-second pause (21s + 6s)."
  },
  {
    "action_type": "PAUSE",
    "id": "f5f5c3b9-a4e1-45d2-ac53-06639c05e197-1",
    "trigger_time": 36,
    "comment": "对“地铁冲浪”这个离谱的导航结果进行吐槽，引出游戏梗。 (Pausing to comment)"
  },
  {
    "action_type": "SPEAK",
    "id": "f5f5c3b9-a4e1-45d2-ac53-06639c05e197-2",
    "trigger_time": 36,
    "comment": "对“地铁冲浪”这个离谱的导航结果进行吐槽，引出游戏梗。",
    "text": "等会儿？地铁冲浪？这AI是懂上学的，直接带你玩真人版Subway Surfers是吧！"
  },
  {
    "action_type": "RESUME",
    "id": "f5f5c3b9-a4e1-45d2-ac53-06639c05e197-3",
    "trigger_time": 36,
    "comment": "Resuming playback after comment."
  },
  {
    "action_type": "PAUSE",
    "id": "1e7e4f32-7c64-469b-9877-3e839e92b3a9-1",
    "trigger_time": 43,
    "comment": "他滑倒的瞬间太搞笑了，必须得吐槽一下AI的马后炮行为。(Step 1: Pause video to start replay sequence)"
  },
  {
    "action_type": "SEEK",
    "id": "1e7e4f32-7c64-469b-9877-3e839e92b3a9-2",
    "trigger_time": 43,
    "comment": "他滑倒的瞬间太搞笑了，必须得吐槽一下AI的马后炮行为。(Step 2: Seek back to the start of the replay clip)",
    "target_time": 41
  },
  {
    "action_type": "RESUME",
    "id": "1e7e4f32-7c64-469b-9877-3e839e92b3a9-3",
    "trigger_time": 43,
    "comment": "他滑倒的瞬间太搞笑了，必须得吐槽一下AI的马后炮行为。(Step 3: Play the clip)"
  },
  {
    "action_type": "PAUSE",
    "id": "1e7e4f32-7c64-469b-9877-3e839e92b3a9-4",
    "trigger_time": 44,
    "comment": "他滑倒的瞬间太搞笑了，必须得吐槽一下AI的马后炮行为。(Step 4: Pause at the end of the clip to comment)"
  },
  {
    "action_type": "SPEAK",
    "id": "b3b19b22-8d77-4c07-955a-c635df08272f-1",
    "trigger_time": 44,
    "comment": "他滑倒的瞬间太搞笑了，必须得吐槽一下AI的马后炮行为。",
    "text": "“小心滑倒”...噗！你咋不早说啊！这AI的延迟比我还高！"
  },
  {
    "action_type": "RESUME",
    "id": "b3b19b22-8d77-4c07-955a-c635df08272f-2",
    "trigger_time": 44,
    "comment": "Resuming playback after the replay and comment."
  },
  {
    "action_type": "SPEAK",
    "id": "8a7c2b0d-2e6f-4228-9711-20a23d9a334f",
    "trigger_time": 58,
    "comment": "看到两车交汇的惊险场面，发出夸张的惊呼。 (Non-pausing comment)",
    "text": "卧槽！卧槽！对面来车了！极限运动啊这是！太刺激了！"
  },
  {
    "action_type": "PAUSE",
    "id": "4d3f56d0-61d0-4d57-b4d4-5309d9492169-1",
    "trigger_time": 76,
    "comment": "看到他在车顶躺着写作业，吐槽这种学霸行为。(Pausing to comment)"
  },
  {
    "action_type": "SPEAK",
    "id": "4d3f56d0-61d0-4d57-b4d4-5309d9492169-2",
    "trigger_time": 76,
    "comment": "看到他在车顶躺着写作业，吐槽这种学霸行为。",
    "text": "不是，哥们，你在火车顶上玩丛林飞跃，顺便写作业？这就是卷王的日常吗？"
  },
  {
    "action_type": "RESUME",
    "id": "4d3f56d0-61d0-4d57-b4d4-5309d9492169-3",
    "trigger_time": 76,
    "comment": "Resuming playback after comment."
  },
  {
    "action_type": "PAUSE",
    "id": "2c2e0b1d-8452-4414-9989-d4c398328c11-1",
    "trigger_time": 85,
    "comment": "看到路人吐槽“神庙逃亡”，觉得这个梗太妙了，必须暂停分享一下。(Pausing to comment)"
  },
  {
    "action_type": "SPEAK",
    "id": "2c2e0b1d-8452-4414-9989-d4c398328c11-2",
    "trigger_time": 85,
    "comment": "看到路人吐槽“神庙逃亡”，觉得这个梗太妙了，必须暂停分享一下。",
    "text": "“你搁这玩神庙逃亡呢？” 哈哈哈哈，官方吐槽最为致命！太对了哥，就是这个味儿！"
  },
  {
    "action_type": "RESUME",
    "id": "2c2e0b1d-8452-4414-9989-d4c398328c11-3",
    "trigger_time": 85,
    "comment": "Resuming playback after comment."
  },
  {
    "action_type": "PAUSE",
    "id": "a5d89e5a-7e3f-4e0e-af10-2f3b7d14e0f5-1",
    "trigger_time": 94,
    "comment": "对车顶卖东西以及送包子的行为表示惊叹和搞笑评论。(Pausing to comment)"
  },
  {
    "action_type": "SPEAK",
    "id": "a5d89e5a-7e3f-4e0e-af10-2f3b7d14e0f5-2",
    "trigger_time": 94,
    "comment": "对车顶卖东西以及送包子的行为表示惊叹和搞笑评论。",
    "text": "火车顶上还有移动小卖部？服务也太周到了吧！大哥还直接送他了，孟加拉真是太有...人情味了！"
  },
  {
    "action_type": "RESUME",
    "id": "a5d89e5a-7e3f-4e0e-af10-2f3b7d14e0f5-3",
    "trigger_time": 94,
    "comment": "Resuming playback after comment."
  },
  {
    "action_type": "PAUSE",
    "id": "e6f47b22-1d59-4d57-8d0f-4e12c1d3c001-1",
    "trigger_time": 122,
    "comment": "看到他用手机远程控制电脑交作业，以一种夸张的、仿佛看广告的语气来吐槽这个硬核操作。(Step 1: Pause for replay)"
  },
  {
    "action_type": "SEEK",
    "id": "e6f47b22-1d59-4d57-8d0f-4e12c1d3c001-2",
    "trigger_time": 122,
    "comment": "看到他用手机远程控制电脑交作业，以一种夸张的、仿佛看广告的语气来吐槽这个硬核操作。(Step 2: Seek back)",
    "target_time": 118
  },
  {
    "action_type": "RESUME",
    "id": "e6f47b22-1d59-4d57-8d0f-4e12c1d3c001-3",
    "trigger_time": 122,
    "comment": "看到他用手机远程控制电脑交作业，以一种夸张的、仿佛看广告的语气来吐槽这个硬核操作。(Step 3: Play clip)"
  },
  {
    "action_type": "PAUSE",
    "id": "e6f47b22-1d59-4d57-8d0f-4e12c1d3c001-4",
    "trigger_time": 122,
    "comment": "看到他用手机远程控制电脑交作业，以一种夸张的、仿佛看广告的语气来吐槽这个硬核操作。(Step 4: Pause at end of clip)"
  },
  {
    "action_type": "SPEAK",
    "id": "9b1e5a8f-2f88-4f1e-9a99-f2e7c3b2d18d-1",
    "trigger_time": 122.5,
    "comment": "看到他用手机远程控制电脑交作业，以一种夸张的、仿佛看广告的语气来吐槽这个硬核操作。",
    "text": "我懂了！原来是广告！在命悬一线的时候，用手机远程交作业，这功能也太硬核了吧！只要思想不滑坡，办法总比困难多！"
  },
  {
    "action_type": "RESUME",
    "id": "9b1e5a8f-2f88-4f1e-9a99-f2e7c3b2d18d-2",
    "trigger_time": 122.5,
    "comment": "Resuming after replay and comment."
  },
  {
    "action_type": "PAUSE",
    "id": "f8a09b3c-6e7d-411a-8b1e-9a7c8d9e2b1f-1",
    "trigger_time": 150,
    "comment": "看到他成功交完作业，发表最后的感慨，并与观众互动。(Pausing for final comment)"
  },
  {
    "action_type": "SPEAK",
    "id": "f8a09b3c-6e7d-411a-8b1e-9a7c8d9e2b1f-2",
    "trigger_time": 150,
    "comment": "看到他成功交完作业，发表最后的感慨，并与观众互动。",
    "text": "Mission Accomplished！任务完成！真是惊心动魄的上学路啊。呐，观众姥爷们，你们上学的时候有这么刺激吗？"
  },
  {
    "action_type": "RESUME",
    "id": "f8a09b3c-6e7d-411a-8b1e-9a7c8d9e2b1f-3",
    "trigger_time": 150,
    "comment": "Resuming after final comment."
  },
  {
    "action_type": "END",
    "id": "3a09e1d8-4f3b-4c2d-9e1a-8f7b6c5d4e3f",
    "trigger_time": 158,
    "comment": "视频结束，发出最后的结束语。"
  }
]"""
# ==============================


# 这是一个模拟 LLM 响应的函数，它会流式地返回我们那个 JSON 数组。
# 在真实场景中，你会用 httpx 去请求真实的 LLM API。
async def fake_llm_stream_response() -> AsyncGenerator[str, None]:
    """
    模拟 LLM API 的流式响应。
    为了方便测试，我们将完整的 JSON 分块返回。
    """

    # 模拟网络延迟和分块传输
    chunk_size = 50
    for i in range(0, len(sample_json), chunk_size):
        yield sample_json[i : i + chunk_size]
        await asyncio.sleep(0.02)


async def generate_actions(
    video_path: str, start_time: float, character_prompt: str
) -> AsyncGenerator[Action, None]:
    """
    调用 LLM 生成动作并以流式方式返回。

    这个异步生成器是核心处理管道：
    1.  从 LLM API (模拟的) 获取流式响应。
    2.  将所有文本块组装成一个完整的 JSON 数组字符串。
    3.  对 JSON 字符串进行修复（如果需要）和验证。
    4.  遍历数组，将验证通过的 Action 对象逐个 yield 出来。

    :param video_path: 视频文件路径 (当前未使用，但为未来保留)
    :param start_time: 视频开始时间 (当前未使用，但为未来保留)
    :param character_prompt: 角色提示 (当前未使用，但为未来保留)
    :return: 一个异步生成器，用于产出 Action 对象。
    """
    # 在真实应用中，你会用 video_path, start_time, character_prompt
    # 来构建请求并调用真实的 LLM API。
    llm_stream = fake_llm_stream_response()

    # 1. 收集所有数据块
    full_response = "".join([chunk async for chunk in llm_stream])

    # 2. 尝试解析整个 JSON 数组
    try:
        # 首先尝试直接解析
        actions_data = json.loads(full_response)
    except json.JSONDecodeError:
        print("⚠️警告: JSON 解析失败，尝试修复...")
        try:
            # 如果失败，使用 json_repair
            repaired_json_str = repair_json(full_response)
            actions_data = json.loads(repaired_json_str)
            print("✅ JSON 成功修复！")
        except Exception as e:
            print(f"❌ 错误: 修复后依然无法解析 JSON: {e}")
            return  # 无法继续，直接返回

    if not isinstance(actions_data, list):
        print(f"❌ 错误: 预期顶层结构是 JSON 数组，但得到的是 {type(actions_data)}")
        return

    # 3. 遍历数组，验证并 yield 每个 action
    for i, action_dict in enumerate(actions_data):
        try:
            # 对于 Union 类型，我们使用 TypeAdapter 来验证
            validated_action = TypeAdapter(Action).validate_python(action_dict)
            yield validated_action
        except ValidationError as e:
            print(
                f"❌ 错误: 第 {i+1} 个 Action 验证失败，已跳过。数据: {action_dict}, 错误: {e}"
            )


if __name__ == "__main__":

    async def main():
        # Example usage
        video_path = "example_video.mp4"
        start_time = 0.0
        character_prompt = "A humorous AI character reacting to a video."

        print("--- Streaming Actions ---")
        action_count = 0
        async for action in generate_actions(video_path, start_time, character_prompt):
            action_count += 1
            print(
                f"Action {action_count}: {action.model_dump_json(indent=2)}", flush=True
            )
            await asyncio.sleep(1)
        print(f"\n--- End of Stream ---")
        print(f"Total actions received: {action_count}")

    asyncio.run(main())
