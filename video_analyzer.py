import os
import json
import time
import google.generativeai as genai
from dotenv import load_dotenv

# 加载环境变量
load_dotenv()

ALLOWED_EXTENSIONS = {'mp4', 'avi', 'mov', 'wmv', 'flv', 'webm', 'mkv'}

def allowed_file(filename):
    """检查文件扩展名是否被允许"""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def validate_action_list(action_list):
    """验证动作列表的格式"""
    if not isinstance(action_list, list):
        return False, "动作列表必须是数组格式"
    
    if len(action_list) == 0:
        return False, "动作列表不能为空"
    
    # 检查最后一个动作是否为END_REACTION
    if action_list[-1].get('action_type') != 'END_REACTION':
        return False, "动作列表必须以END_REACTION结束"
    
    required_fields = ['id', 'trigger_timestamp', 'comment', 'action_type']
    
    for i, action in enumerate(action_list):
        # 检查必需字段
        for field in required_fields:
            if field not in action:
                return False, f"动作 {i+1} 缺少必需字段: {field}"
        
        action_type = action.get('action_type')
        
        # 验证动作类型特定字段
        if action_type == 'SPEAK':
            if 'text' not in action:
                return False, f"SPEAK动作 {i+1} 缺少text字段"
        elif action_type == 'PAUSE':
            if 'duration_seconds' not in action:
                return False, f"PAUSE动作 {i+1} 缺少duration_seconds字段"
        elif action_type == 'END_REACTION':
            # END_REACTION不需要额外字段
            pass
        else:
            return False, f"动作 {i+1} 包含无效的动作类型: {action_type}"
    
    return True, "验证通过"

def analyze_video(video_path, system_prompt, user_prompt, api_key=None):
    """
    分析视频并返回动作列表
    
    Args:
        video_path (str): 视频文件路径
        system_prompt (str): 系统提示词
        user_prompt (str): 用户提示词
        api_key (str, optional): Gemini API密钥，未提供则从环境变量读取
    
    Returns:
        dict: 包含success、action_list、total_actions或error信息的字典
    """
    
    # 参数验证
    if not os.path.exists(video_path):
        return {'error': '视频文件不存在'}
    
    if not allowed_file(video_path):
        return {'error': '不支持的文件格式，支持的格式: ' + ', '.join(ALLOWED_EXTENSIONS)}
    
    if not system_prompt or not user_prompt:
        return {'error': 'system_prompt和user_prompt都是必需的'}
    
    # 获取API密钥
    api_key = api_key or os.getenv('GEMINI_API_KEY')
    if not api_key:
        return {'error': '需要提供GEMINI API密钥'}
    
    try:
        # 配置Gemini
        genai.configure(api_key=api_key)
        
        # 上传视频到Gemini
        print(f"正在上传视频文件: {video_path}")
        video_file_obj = genai.upload_file(path=video_path)
        
        # 等待文件处理完成
        print("等待视频处理完成...")
        while video_file_obj.state.name == "PROCESSING":
            time.sleep(10)
            video_file_obj = genai.get_file(video_file_obj.name)
        
        if video_file_obj.state.name == "FAILED":
            return {'error': '视频文件处理失败'}
        
        print("视频处理完成，开始分析...")
        
        # 创建模型
        model = genai.GenerativeModel(
            model_name="gemini-2.5-flash",
            system_instruction=system_prompt
        )
        
        # 构建完整的用户提示词
        full_user_prompt = f"""
        {user_prompt}
        
        请分析这个视频并返回一个JSON格式的动作列表。动作列表必须符合以下要求：
        
        1. 返回格式必须是JSON数组
        2. 每个动作包含以下必需字段：
           - id: 动作的唯一标识符（数字）
           - trigger_timestamp: 触发时间戳（秒）
           - comment: 动作描述
           - action_type: 动作类型
        
        3. 支持的动作类型：
           - SPEAK: 说话动作，需要额外的text字段
           - PAUSE: 暂停动作，需要额外的duration_seconds字段
           - END_REACTION: 结束动作（必须是最后一个动作）
        
        4. 动作列表必须以END_REACTION结束
        
        请确保返回的是有效的JSON格式，不要包含任何其他文本。
        """
        
        # 生成内容
        response = model.generate_content([video_file_obj, full_user_prompt])
        
        # 解析响应
        response_text = response.text.strip()
        
        # 尝试提取JSON（如果响应包含其他文本）
        if response_text.startswith('```json'):
            response_text = response_text[7:]
        if response_text.endswith('```'):
            response_text = response_text[:-3]
        
        response_text = response_text.strip()
        
        try:
            action_list = json.loads(response_text)
        except json.JSONDecodeError as e:
            return {
                'error': f'GEMINI返回的不是有效的JSON格式: {str(e)}',
                'raw_response': response_text
            }
        
        # 验证动作列表格式
        is_valid, validation_message = validate_action_list(action_list)
        if not is_valid:
            return {
                'error': f'动作列表格式不正确: {validation_message}',
                'action_list': action_list
            }
        
        print("视频分析完成！")
        
        # 返回结果
        return {
            'success': True,
            'action_list': action_list,
            'total_actions': len(action_list)
        }
        
    except Exception as e:
        return {'error': f'处理请求时发生错误: {str(e)}'}

# 示例用法
if __name__ == '__main__':
    # 示例调用
    result = analyze_video(
        video_path="path/to/your/video.mp4",
        system_prompt="请分析视频内容",
        user_prompt="请识别视频中的主要动作"
    )
    
    if result.get('success'):
        print(f"分析成功！共生成 {result['total_actions']} 个动作")
        print("动作列表:")
        for action in result['action_list']:
            print(f"  {action}")
    else:
        print(f"分析失败: {result['error']}")
