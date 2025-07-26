import os
from openai import OpenAI
from ..config import config

oai_client = OpenAI(
    api_key=config.openai_api_key, 
    base_url=config.get_base_url_for_service("openai")
)
