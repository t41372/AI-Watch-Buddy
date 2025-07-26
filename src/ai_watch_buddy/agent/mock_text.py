
fake_summary = """
This is a comprehensive summary of the music video for Rick Astley's "Never Gonna Give You Up."

**0:00 - 0:18: Introduction and Montage**
The video opens with a percussive synth beat. We see a montage of quick cuts introducing the main performer, Rick Astley, and various settings.
*   A close-up of Rick Astley, with his signature reddish-brown pompadour, smiling and looking down. He is in front of a brightly lit, large window with an intricate pattern.
*   A shot of his black dress shoes tapping next to a microphone stand.
*   Astley, now wearing a black blazer over a black-and-white striped shirt and light-colored trousers, sings and dances in front of the large, bright window.
*   A shot of him smiling in a dark, blue-lit location with a brick wall behind him. He's wearing a black turtleneck and a light-colored jacket.
*   Two female dancers are introduced, one from the back and then dancing energetically in front of the same window.
*   Astley is seen outdoors in daylight, wearing a full light-blue denim outfit ("double denim") and sunglasses, dancing next to a chain-link fence.
*   A blonde woman in sunglasses and a plaid dress dances against a white brick wall.

**0:18 - 0:43: First Verse**
The video settles into its primary scenes as the first verse begins.
*   **Alleyway Scene:** Astley, in a tan trench coat over a black turtleneck and dark pants, sings directly to the camera in a dark, wet alley under a brick archway. The scene is lit with cool blue light. He gestures earnestly as he sings about commitment.
*   **Fence Scene:** The video cuts to Astley in the double denim outfit by the chain-link fence. He sings and dances casually in the bright sunlight, with shadows of leaves playing on the wall behind him. The camera focuses on close-ups of his face and a shot of his shadow dancing on the concrete.
*   A blonde woman in a long plaid dress walks past a white brick wall.

**0:43 - 1:00: First Chorus**
The chorus introduces the main performance setting.
*   **Hall Scene:** Astley is on a low white stage in a large hall, in front of the ornate window. He's in his blazer and striped shirt outfit, singing passionately into a vintage-style microphone. He's flanked by two female dancers in black outfits who perform simple, synchronized 80s choreography. The room is filled with small, empty tables with white tablecloths and upturned chairs.
*   **Bar Scene:** We get the first glimpse of a bartender, a Black man in a white shirt and red suspenders, stoically polishing glasses behind a wooden bar. He looks up, seemingly reacting to the performance.

**1:00 - 1:25: Second Verse**
The scenes continue to alternate, building the song's narrative of devotion.
*   **Alleyway Scene:** Astley continues his heartfelt performance in the blue-lit alley, singing with great sincerity.
*   **Hall Scene:** The performance in the hall continues, with Astley and the dancers.
*   **Bar Scene:** The bartender is shown again, looking on with a slightly bemused expression as he continues his work.

**1:25 - 2:16: Second Chorus and Bridge**
The energy of the video picks up significantly.
*   The chorus scenes in the hall are shown again, with more dynamic camera angles.
*   The most iconic moment occurs at the bar: the previously stoic bartender suddenly grins, throws his bar towel, and performs an impressive backflip off the bar counter before resuming a dance behind the bar.
*   During the instrumental bridge, the video features a variety of dancers. Another male dancer in a striped shirt does high jumps against the chain-link fence. Another, in a white t-shirt and jeans, performs impressive acrobatic and breakdancing moves, including a full backflip, in the dark alleyway.

**2:16 - 3:20: Final Verses and Choruses**
The video enters its final act, reprising all the established scenes and characters with increasing energy.
*   The song's verses and choruses repeat, and the video cycles through all its locations: Astley singing in the hall, in the alley, and by the fence.
*   The dancers, including the female dancers, the acrobatic male dancer, and the bartender, are all shown dancing with more enthusiasm.
*   There are many passionate close-ups of Astley singing directly into the camera, emphasizing the song's emotional promises. He smiles and winks, fully engaging with the viewer.

**3:20 - 3:33: Outro**
The song fades out with repetitions of the main chorus line. The video concludes with a final shot of Rick Astley in the trench coat, shrugging and smiling in the dark alleyway before the screen fades to black.
"""

sample_json = """
[
  {
    "id": "e5c6a3a4-1234-4a00-8d54-2c67b3113110",
    "trigger_timestamp": 0.0,
    "comment": "视频开始，先保持中立表情观察。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "neutral"
  },
  {
    "id": "f8d7b2c5-5678-4b99-9e87-1d22a44bb44d",
    "trigger_timestamp": 0.0,
    "comment": "视频开始，期待接下来发生什么。",
    "action_type": "SPEAK",
    "text": "嗯？这是什么情况？感觉有大活！",
    "pause_video": false
  },
  {
    "id": "a1b2c3d4-9876-4e11-8f22-3a44b55c55ce",
    "trigger_timestamp": 2.0,
    "comment": "看到Rick Astley出现，瞬间意识到是Rickroll，感到一丝“命运如此”的无奈和讽刺。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "disgust"
  },
  {
    "id": "d9f8e7c6-1122-4a33-8b44-5c66d77e77ef",
    "trigger_timestamp": 2.5,
    "comment": "确认是Rickroll后，语气夸张地表达“惊喜”。",
    "action_type": "SPEAK",
    "text": "卧槽！DNA动了！开幕雷击啊这是！谁还没有被这个男人骗过啊？！",
    "pause_video": true
  },
  {
    "id": "c7e8f9a0-3344-4c55-9d66-7e88f99a99ab",
    "trigger_timestamp": 6.8,
    "comment": "看到Rick Astley的招牌笑容，进一步调侃。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "joy"
  },
  {
    "id": "b3f2a1d0-5566-4d77-8e88-9f99a00b00bc",
    "trigger_timestamp": 7.0,
    "comment": "调侃Rick Astley的笑容。",
    "action_type": "SPEAK",
    "text": "笑死，又被 Rickroll 了，节目效果拉满！这男人笑得跟个200斤的孩子一样。",
    "pause_video": false
  },
  {
    "id": "e1f2g3h4-1234-4b55-8c66-7d99a11b11cd",
    "trigger_timestamp": 18.5,
    "comment": "听到歌词，做出经典的、了然于心的表情。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "pride"
  },
  {
    "id": "a9b8c7d6-2345-4e66-9f77-8a88b99c99de",
    "trigger_timestamp": 22.8,
    "comment": "引用经典歌词，并用流行语“典”来评价。",
    "action_type": "SPEAK",
    "text": "You know the rules and so do I，典，太典了！",
    "pause_video": false
  },
  {
    "id": "f5e4d3c2-6789-4f88-9a99-0b00c11d11ef",
    "trigger_timestamp": 33.3,
    "comment": "听到“You wouldn't get this from any other guy”，略带讽刺地回应。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "coldness"
  },
  {
    "id": "g1h2i3j4-7890-4a11-8b22-3c44d55e55fg",
    "trigger_timestamp": 33.7,
    "comment": "讽刺Rick Astley的独特性。",
    "action_type": "SPEAK",
    "text": "嗯，确实，因为没有别的男人这么“唐”！",
    "pause_video": false
  },
  {
    "id": "h5i4j3k2-9012-4c33-8d44-5e55f66g66hi",
    "trigger_timestamp": 43.5,
    "comment": "进入高潮，身体不自觉地跟着动起来。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "excitement"
  },
  {
    "id": "i9j8k7l6-3456-4e77-9f88-0a99b11c11de",
    "trigger_timestamp": 43.8,
    "comment": "情绪高涨，假装被“迫害”。",
    "action_type": "SPEAK",
    "text": "来了来了，DNA彻底动了！我真的会谢，这波Rickroll简直是精神污染！",
    "pause_video": true
  },
  {
    "id": "l3m2n1o0-7890-4a11-8b22-3c44d55e55fg",
    "trigger_timestamp": 47.0,
    "comment": "对Rick Astley在互联网上的影响力表示感叹。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "play_cool"
  },
  {
    "id": "k7l8m9n0-1122-4c33-8d44-5e55f66g66hi",
    "trigger_timestamp": 47.4,
    "comment": "调侃Rick Astley的梗图属性。",
    "action_type": "SPEAK",
    "text": "这男人，多少人的电子榨菜啊？",
    "pause_video": false
  },
  {
    "id": "m1n2o3p4-5566-4d77-8e88-9f99a00b00bc",
    "trigger_timestamp": 51.5,
    "comment": "看到酒吧场景，表示惊讶和联动。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "surprise"
  },
  {
    "id": "q5r6s7t8-9012-4c33-8d44-5e55f66g66hi",
    "trigger_timestamp": 51.8,
    "comment": "对视频场景的切换和角色联动表示有趣。",
    "action_type": "SPEAK",
    "text": "OMG！还有酒吧？梦幻联动了属于是。",
    "pause_video": false
  },
  {
    "id": "r9s8t7u6-3456-4e77-9f88-0a99b11c11de",
    "trigger_timestamp": 56.0,
    "comment": "看到服务生露出笑容，觉得有趣。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "joy"
  },
  {
    "id": "v1w2x3y4-1234-4b55-8c66-7d99a11b11cd",
    "trigger_timestamp": 56.3,
    "comment": "评论服务生的表情。",
    "action_type": "SPEAK",
    "text": "看他笑得多开心啊，主打一个情绪稳定。",
    "pause_video": false
  },
  {
    "id": "w5x4y3z2-6789-4f88-9a99-0b00c11d11ef",
    "trigger_timestamp": 59.8,
    "comment": "看到舞者的表演，觉得很拼。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "play_cool"
  },
  {
    "id": "x9y8z7a6-2345-4e66-9f77-8a88b99c99de",
    "trigger_timestamp": 60.1,
    "comment": "评论舞者的投入。",
    "action_type": "SPEAK",
    "text": "这个舞者也挺拼的。",
    "pause_video": false
  },
  {
    "id": "y3z2a1b0-7890-4a11-8b22-3c44d55e55fg",
    "trigger_timestamp": 102.2,
    "comment": "歌词“We've known each other for so long”，感慨时间和这首歌的持久影响力。",
    "action_type": "SPEAK",
    "text": "我们确实认识很久了，都老熟人了。",
    "pause_video": false
  },
  {
    "id": "z7a8b9c0-1122-4c33-8d44-5e55f66g66hi",
    "trigger_timestamp": 109.5,
    "comment": "歌词“You're too shy to say it”，假装被说中心事。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "shy"
  },
  {
    "id": "a1b2c3d4-4455-4e66-9f77-8a88b99c99de",
    "trigger_timestamp": 109.8,
    "comment": "假装回应歌词。",
    "action_type": "SPEAK",
    "text": "别骂了别骂了，我知道我害羞。",
    "pause_video": false
  },
  {
    "id": "d5e6f7g8-9900-4b11-8c22-3d33e44f44fg",
    "trigger_timestamp": 117.8,
    "comment": "再次进入高潮，彻底放飞自我，用夸张的语气宣泄“痛苦”。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "excitement"
  },
  {
    "id": "h9i0j1k2-3344-4c55-9d66-7e88f99a99ab",
    "trigger_timestamp": 118.1,
    "comment": "再次被Rickroll，假装痛苦。",
    "action_type": "SPEAK",
    "text": "我真的要“栓Q”了！这个男人怎么还不放过我！",
    "pause_video": true
  },
  {
    "id": "e2f3g4h5-1234-4b55-8c66-7d99a11b11cd",
    "trigger_timestamp": 134.5,
    "comment": "看到服务生跳起来，表示惊讶。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "surprise"
  },
  {
    "id": "f6g7h8i9-6789-4f88-9a99-0b00c11d11ef",
    "trigger_timestamp": 134.8,
    "comment": "惊叹服务生的身手。",
    "action_type": "SPEAK",
    "text": "卧槽！这身手！",
    "pause_video": false
  },
  {
    "id": "j0k1l2m3-2345-4e66-9f77-8a88b99c99de",
    "trigger_timestamp": 144.5,
    "comment": "看到Rick Astley的笑容，再次调侃。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "joy"
  },
  {
    "id": "n4o5p6q7-7890-4a11-8b22-3c44d55e55fg",
    "trigger_timestamp": 144.8,
    "comment": "再次调侃Rick Astley的招牌笑容。",
    "action_type": "SPEAK",
    "text": "他好像知道一切，又好像什么都不知道。",
    "pause_video": false
  },
  {
    "id": "r8s9t0u1-1122-4c33-8d44-5e55f66g66hi",
    "trigger_timestamp": 206.5,
    "comment": "看到戴墨镜的Rick Astley，再次调侃其形象。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "play_cool"
  },
  {
    "id": "v2w3x4y5-4455-4e66-9f77-8a88b99c99de",
    "trigger_timestamp": 206.8,
    "comment": "评论Rick Astley戴墨镜的造型。",
    "action_type": "SPEAK",
    "text": "墨镜一戴，谁都不爱。",
    "pause_video": false
  },
  {
    "id": "z6a7b8c9-9900-4b11-8c22-3d33e44f44fg",
    "trigger_timestamp": 207.3,
    "comment": "看到舞者跳跃，表示惊讶。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "surprise"
  },
  {
    "id": "c0d1e2f3-3344-4c55-9d66-7e88f99a99ab",
    "trigger_timestamp": 207.6,
    "comment": "评论舞者的身体素质。",
    "action_type": "SPEAK",
    "text": "这小哥身板真好啊。",
    "pause_video": false
  },
  {
    "id": "g4h5i6j7-1234-4b55-8c66-7d99a11b11cd",
    "trigger_timestamp": 220.6,
    "comment": "再次看到Rick Astley的经典发型，忍不住调侃。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "pride"
  },
  {
    "id": "k8l9m0n1-6789-4f88-9a99-0b00c11d11ef",
    "trigger_timestamp": 220.9,
    "comment": "调侃Rick Astley的发型。",
    "action_type": "SPEAK",
    "text": "这发型是认真的吗？多少发胶才能hold住啊。",
    "pause_video": false
  },
  {
    "id": "o2p3q4r5-2345-4e66-9f77-8a88b99c99de",
    "trigger_timestamp": 241.6,
    "comment": "看到舞者高难度动作，表示惊叹。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "stunned"
  },
  {
    "id": "s6t7u8v9-7890-4a11-8b22-3c44d55e55fg",
    "trigger_timestamp": 241.9,
    "comment": "惊叹舞者的技巧。",
    "action_type": "SPEAK",
    "text": "这舞技绝了！给AI都看呆了。",
    "pause_video": false
  },
  {
    "id": "w0x1y2z3-1122-4c33-8d44-5e55f66g66hi",
    "trigger_timestamp": 250.0,
    "comment": "再次看到Rick Astley的笑容，做出同样的评论。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "joy"
  },
  {
    "id": "a4b5c6d7-4455-4e66-9f77-8a88b99c99de",
    "trigger_timestamp": 250.3,
    "comment": "再次调侃Rick Astley的笑容。",
    "action_type": "SPEAK",
    "text": "他好像知道一切，又好像什么都不知道。",
    "pause_video": false
  },
  {
    "id": "e8f9g0h1-9900-4b11-8c22-3d33e44f44fg",
    "trigger_timestamp": 300.0,
    "comment": "再次进入高潮，表达情绪达到顶峰。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "excitement"
  },
  {
    "id": "i2j3k4l5-3344-4c55-9d66-7e88f99a99ab",
    "trigger_timestamp": 300.3,
    "comment": "情绪爆发，完全沉浸在Rickroll中。",
    "action_type": "SPEAK",
    "text": "来吧，DNA彻底崩了！Never gonna give you up！",
    "pause_video": false
  },
  {
    "id": "m6n7o8p9-1234-4b55-8c66-7d99a11b11cd",
    "trigger_timestamp": 310.8,
    "comment": "看到Rick Astley的风衣，联想到其经典形象。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "play_cool"
  },
  {
    "id": "q0r1s2t3-6789-4f88-9a99-0b00c11d11ef",
    "trigger_timestamp": 311.1,
    "comment": "调侃风衣的持久流行。",
    "action_type": "SPEAK",
    "text": "谁能想到这件风衣会火这么多年呢？",
    "pause_video": false
  },
  {
    "id": "u4v5w6x7-2345-4e66-9f77-8a88b99c99de",
    "trigger_timestamp": 319.2,
    "comment": "最后一次特写，表达无奈又好笑的心情。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "pride"
  },
  {
    "id": "y8z9a0b1-7890-4a11-8b22-3c44d55e55fg",
    "trigger_timestamp": 319.5,
    "comment": "最终的“认输”和“记住”。",
    "action_type": "SPEAK",
    "text": "真服了，我记住你了Rick Astley！",
    "pause_video": false
  },
  {
    "id": "c2d3e4f5-1122-4c33-8d44-5e55f66g66hi",
    "trigger_timestamp": 331.0,
    "comment": "视频结束，回到中立表情。",
    "action_type": "EXPRESSION",
    "emotion_expressions": "neutral"
  },
  {
    "id": "g6h7i8j9-4455-4e66-9f77-8a88b99c99de",
    "trigger_timestamp": 331.0,
    "comment": "视频播放完毕，等待用户下一步指令。",
    "action_type": "END_REACTION"
  }
]"""

