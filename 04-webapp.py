import streamlit as st
from ai import get_personality_analysis
from dotenv import load_dotenv

load_dotenv()  # .env 파일에서 환경변수 로드. 파일이 있다면 자동으로 로드됨

st.title("AI 관성 보기 프로그램")
st.write("------")

st.write("안녕하세요! AI 관상가입니다.")

st.write("얼굴 특징을 입력해주시면 성격과 미래를 전망해드릴게요.")

face_desc = st.text_input("얼굴 특징을 입력해주세요.")
face_desc = face_desc.strip()

if st.button("관상 보기", type="primary", on_click=lambda: st.write("분석 중...")):
    if face_desc:
        with st.spinner("관상을 분석 중입니다..."):
            result = get_personality_analysis(face_desc)
            st.write("clicked " + face_desc)
            st.write("----")
            st.info(result)
    else:
        st.error("얼굴 특징을 입력하고, 관상 보기 버튼을 눌러주세요.")



