from .ai_actions import ActionScript


async def _invoke_llm_mock(
    video_path: str, start_time: float, character_prompt: str
) -> str:
    """
    调用 LLM 生成动作脚本。
    :param video_path: 视频文件路径
    :param start_time: 视频开始时间（秒）
    :param character_prompt: 角色提示信息
    :return: ActionScript 对象，包含生成的动作列表
    """
    sample_json = """
    [
  {
    "id": "e0b02f90-8452-442c-a28a-77c8e8749c95",
    "trigger_timestamp": 0.5,
    "comment": "开幕雷击，先表达一下震惊，顺便吐槽一下这个离谱的标题。",
    "action_type": "SPEAK",
    "text": "啊？等一下，UCLA计算机硕士...在孟加拉上学？这是什么地狱开局啊喂！",
    "pause_video": true
  },
  {
    "id": "18f75c2e-4b48-4389-9e8c-529a9e3a62d0",
    "trigger_timestamp": 7,
    "comment": "经典恒河水，必须得吐槽一下，突出一个腹黑。",
    "action_type": "SPEAK",
    "text": "起床第一件事，先来一杯纯天然的恒河茶，这才是真正的大学牲啊！你看他喝完，眼神都清澈了许多呢（大概）。",
    "pause_video": true
  },
  {
    "id": "c138fd94-912f-4c12-9c3f-c80f082e6d6c",
    "trigger_timestamp": 14,
    "comment": "对冷水浇头和身材进行评论，带一点花痴的感觉，但还是以搞笑为主。",
    "action_type": "SPEAK",
    "text": "哇哦，冷水喷醒身体...顺便秀一下腹肌是吧？懂了，这是高材生的独特叫醒服务。",
    "pause_video": false
  },
  {
    "id": "a92e10c7-e547-4f81-80a9-197147b30c33",
    "trigger_timestamp": 21,
    "comment": "看到他吃东西的痛苦面具和被大姐强制喂食，忍不住笑出来，并进行腹黑吐槽。",
    "action_type": "PAUSE",
    "duration_seconds": 6
  },
  {
    "id": "d4c9d5d8-0f66-4e4f-b1e7-91f94d93026f",
    "trigger_timestamp": 22,
    "comment": "看到他吃东西的痛苦面具和被大姐强制喂食，忍不住笑出来，并进行腹黑吐槽。",
    "action_type": "SPEAK",
    "text": "哈哈哈哈，你看他那个表情，好像在说“这玩意儿吃了真的不会喷射吗？” 结果大姐直接上手了，挑食可不是好孩子哦~",
    "pause_video": true
  },
  {
    "id": "f5f5c3b9-a4e1-45d2-ac53-06639c05e197",
    "trigger_timestamp": 36,
    "comment": "对“地铁冲浪”这个离谱的导航结果进行吐槽，引出游戏梗。",
    "action_type": "SPEAK",
    "text": "等会儿？地铁冲浪？这AI是懂上学的，直接带你玩真人版Subway Surfers是吧！",
    "pause_video": true
  },
  {
    "id": "1e7e4f32-7c64-469b-9877-3e839e92b3a9",
    "trigger_timestamp": 43,
    "comment": "他滑倒的瞬间太搞笑了，必须得吐槽一下AI的马后炮行为。",
    "action_type": "REPLAY_SEGMENT",
    "start_timestamp": 41,
    "end_timestamp": 44,
    "post_replay_behavior": "STAY_PAUSED_AT_END"
  },
  {
    "id": "b3b19b22-8d77-4c07-955a-c635df08272f",
    "trigger_timestamp": 44,
    "comment": "他滑倒的瞬间太搞笑了，必须得吐槽一下AI的马后炮行为。",
    "action_type": "SPEAK",
    "text": "“小心滑倒”...噗！你咋不早说啊！这AI的延迟比我还高！",
    "pause_video": true
  },
  {
    "id": "8a7c2b0d-2e6f-4228-9711-20a23d9a334f",
    "trigger_timestamp": 58,
    "comment": "看到两车交汇的惊险场面，发出夸张的惊呼。",
    "action_type": "SPEAK",
    "text": "卧槽！卧槽！对面来车了！极限运动啊这是！太刺激了！",
    "pause_video": false
  },
  {
    "id": "4d3f56d0-61d0-4d57-b4d4-5309d9492169",
    "trigger_timestamp": 76,
    "comment": "看到他在车顶躺着写作业，吐槽这种学霸行为。",
    "action_type": "SPEAK",
    "text": "不是，哥们，你在火车顶上玩丛林飞跃，顺便写作业？这就是卷王的日常吗？",
    "pause_video": true
  },
  {
    "id": "2c2e0b1d-8452-4414-9989-d4c398328c11",
    "trigger_timestamp": 85,
    "comment": "看到路人吐槽“神庙逃亡”，觉得这个梗太妙了，必须暂停分享一下。",
    "action_type": "SPEAK",
    "text": "“你搁这玩神庙逃亡呢？” 哈哈哈哈，官方吐槽最为致命！太对了哥，就是这个味儿！",
    "pause_video": true
  },
  {
    "id": "a5d89e5a-7e3f-4e0e-af10-2f3b7d14e0f5",
    "trigger_timestamp": 94,
    "comment": "对车顶卖东西以及送包子的行为表示惊叹和搞笑评论。",
    "action_type": "SPEAK",
    "text": "火车顶上还有移动小卖部？服务也太周到了吧！大哥还直接送他了，孟加拉真是太有...人情味了！",
    "pause_video": true
  },
  {
    "id": "e6f47b22-1d59-4d57-8d0f-4e12c1d3c001",
    "trigger_timestamp": 122,
    "comment": "看到他用手机远程控制电脑交作业，以一种夸张的、仿佛看广告的语气来吐槽这个硬核操作。",
    "action_type": "REPLAY_SEGMENT",
    "start_timestamp": 118,
    "end_timestamp": 122,
    "post_replay_behavior": "STAY_PAUSED_AT_END"
  },
  {
    "id": "9b1e5a8f-2f88-4f1e-9a99-f2e7c3b2d18d",
    "trigger_timestamp": 122.5,
    "comment": "看到他用手机远程控制电脑交作业，以一种夸张的、仿佛看广告的语气来吐槽这个硬核操作。",
    "action_type": "SPEAK",
    "text": "我懂了！原来是广告！在命悬一线的时候，用手机远程交作业，这功能也太硬核了吧！只要思想不滑坡，办法总比困难多！",
    "pause_video": true
  },
  {
    "id": "f8a09b3c-6e7d-411a-8b1e-9a7c8d9e2b1f",
    "trigger_timestamp": 150,
    "comment": "看到他成功交完作业，发表最后的感慨，并与观众互动。",
    "action_type": "SPEAK",
    "text": "Mission Accomplished！任务完成！真是惊心动魄的上学路啊。呐，观众姥爷们，你们上学的时候有这么刺激吗？",
    "pause_video": true
  },
  {
    "id": "3a09e1d8-4f3b-4c2d-9e1a-8f7b6c5d4e3f",
    "trigger_timestamp": 158,
    "comment": "视频结束，发出最后的结束语。",
    "action_type": "END_REACTION"
  }
]"""
    return sample_json


async def generate_actions(
    video_path: str, start_time: float, character_prompt: str
) -> ActionScript:
    # 1. 调用 LLM 获取 JSON 字符串
    actions_json_str = await _invoke_llm_mock(video_path, start_time, character_prompt)

    # 2. 将 JSON 字符串解析为 ActionScript 对象
    action_script = ActionScript.model_validate_json(actions_json_str)

    return action_script


if __name__ == "__main__":
    import asyncio

    # Example usage
    video_path = "example_video.mp4"
    start_time = 0.0
    character_prompt = "A humorous AI character reacting to a video."

    actions = asyncio.run(generate_actions(video_path, start_time, character_prompt))
    print(actions)
