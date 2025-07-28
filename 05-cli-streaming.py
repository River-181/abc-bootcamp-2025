# 05-cli-streaming.py

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv() # .env 파일에서 환경변수 로드. 파일이 있다면 자동으로 로드됨

client = OpenAI()  # OPENAI_API_KEY 환경변수 지정이 필요

stream = client.responses.create(
    model="gpt-4o",
    input="make python code for factorial.",
    stream=True # 스트리밍 모드 활성화
)

for event in stream:
    if hasattr(event, "delta"):
        print(event.delta, end="", flush=True)
