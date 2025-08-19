# 06-cli-chat.py

from dotenv import load_dotenv
from openai import OpenAI

load_dotenv() # .env 파일에서 환경변수 로드. 파일이 있다면 자동으로 로드됨
client = OpenAI()  # OPENAI_API_KEY 환경변수 지정이 필요

SYSTEM_PROMPT = "진상 고객 상황극을 해보자. 맥도날드에서 너는 손님, 나는 직원"

conversations = [   # 리스트로 저장
    {"role": "system", "content": SYSTEM_PROMPT},  # 시스템 메시지
    {"role": "user", "content": "손님 어떤 일로 찾으셨나요?"},  # 사용자 메시지
] 


user_content = input("[User] ").strip() # 사용자 입력
if user_content:
    conversations.append({
        "role": "user", 
        "content": user_content,
        })  # 사용자 메시지 추가

    response = client.responses.create(
        model="gpt-4o",
        input=conversations,
    )

    assistant_content: str = response.output_text
    print("[AI]", assistant_content)
    conversations.append({
        "role" : "assistant", 
        "content" : assistant_content
    })