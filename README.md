# ABC Bootcamp 2025 - AI 애플리케이션 실습 프로젝트

Python과 OpenAI API를 활용한 다양한 AI 애플리케이션 개발 실습 프로젝트입니다.

## 📋 프로젝트 개요

이 프로젝트는 OpenAI GPT-4 API를 활용하여 CLI 도구와 웹 애플리케이션을 개발하는 방법을 학습하는 부트캠프 실습 과제입니다. Python 기초부터 API 활용, 스트리밍, 웹 애플리케이션 개발까지 단계별로 구성되어 있습니다.

## 🛠 기술 스택

- **언어**: Python 3.x
- **주요 라이브러리**: 
  - OpenAI API
  - Streamlit (웹 앱)
  - Requests (HTTP 통신)
  - python-dotenv (환경변수 관리)
  - gTTS (음성 합성)
  - pygame (오디오 재생)

## 📦 설치 및 환경 설정

### 1. 의존성 설치
```bash
pip install -r requirements.txt
pip install gtts pygame  # 음성 관련 추가 패키지
```

### 2. 환경변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 OpenAI API 키를 설정하세요:
```
OPENAI_API_KEY=your_openai_api_key_here
```

## 📁 프로젝트 구조

### CLI 애플리케이션
- **`01-cli.py`** - Python 기초: "Hello, Python!" 출력
- **`02-cli.py`** - OpenAI API 기본 사용법: 한국어 동화 생성
- **`03-cli.py`** - AI 관상가 CLI: 얼굴 특징 입력받아 성격 분석
- **`05-cli-streaming.py`** - 스트리밍 모드: 실시간으로 응답 출력
- **`06-cli-chat.py`** - 대화형 챗봇: 진상 고객 상황극 시뮬레이션
- **`07-json.py`** - JSON 데이터 처리: 멜론 차트 데이터 파싱

### 웹 애플리케이션 (Streamlit)
- **`04-webapp.py`** - AI 관상가 웹앱: 얼굴 특징으로 성격 분석
- **`08-webapp-melon-top-100.py`** - 멜론 2023-12-04 차트 조회 웹앱

### 유틸리티 모듈
- **`ai.py`** - OpenAI API 래퍼: 관상 분석 함수 제공
- **`audio.py`** - 음성 합성 및 재생: gTTS와 pygame 활용
- **`09-melon-search.py`** - 멜론 검색 API: 곡 검색 기능
- **`generator_01.py`** - Python 제너레이터 학습: 메모리 효율적 데이터 생성

## 🚀 실행 방법

### CLI 애플리케이션 실행
```bash
# 기본 예제
python 01-cli.py

# OpenAI API 기본 사용
python 02-cli.py

# AI 관상가 CLI
python 03-cli.py

# 스트리밍 모드 테스트
python 05-cli-streaming.py

# 대화형 챗봇
python 06-cli-chat.py

# JSON 데이터 처리
python 07-json.py

# 멜론 검색 테스트
python 09-melon-search.py

# 제너레이터 학습
python generator_01.py
```

### 웹 애플리케이션 실행
```bash
# AI 관상가 웹앱
streamlit run 04-webapp.py

# 멜론 차트 웹앱
streamlit run 08-webapp-melon-top-100.py
```

## 📋 주요 기능

### 1. AI 관상가 서비스
- **CLI 버전** (`03-cli.py`): 터미널에서 얼굴 특징 입력
- **웹 버전** (`04-webapp.py`): Streamlit 기반 사용자 친화적 인터페이스
- OpenAI GPT-4를 활용한 성격 및 미래 분석

### 2. 멜론 차트 서비스
- **데이터 조회** (`07-json.py`): 2023-12-04 멜론 차트 TOP 100 데이터 파싱
- **웹 인터페이스** (`08-webapp-melon-top-100.py`): 차트 시각화 및 곡 상세 페이지 연결
- **검색 기능** (`09-melon-search.py`): 멜론 API를 통한 곡 검색

### 3. 대화형 AI
- **기본 대화** (`02-cli.py`): 단일 요청-응답
- **스트리밍** (`05-cli-streaming.py`): 실시간 응답 출력
- **연속 대화** (`06-cli-chat.py`): 컨텍스트 유지 대화

### 4. 음성 처리
- **TTS 기능** (`audio.py`): Google Text-to-Speech로 음성 합성
- **음성 재생** (`audio.py`): pygame을 활용한 크로스 플랫폼 재생

## 🔧 개발 도구 및 라이브러리

| 파일 | 주요 라이브러리 | 용도 |
|------|----------------|------|
| `02-cli.py`, `03-cli.py`, `05-cli.py`, `06-cli.py` | openai, python-dotenv | OpenAI API 활용 |
| `04-webapp.py`, `08-webapp-melon-top-100.py` | streamlit | 웹 애플리케이션 개발 |
| `07-json.py`, `09-melon-search.py` | requests | HTTP API 통신 |
| `audio.py` | gtts, pygame | 음성 합성 및 재생 |

## 📝 학습 포인트

1. **OpenAI API 활용**: 다양한 모드(일반, 스트리밍, 대화)로 GPT-4 사용
2. **웹 애플리케이션 개발**: Streamlit으로 빠른 프로토타이핑
3. **API 통신**: Requests를 활용한 외부 API 연동
4. **데이터 처리**: JSON 파싱 및 웹 스크래핑
5. **멀티미디어 처리**: 음성 합성 및 재생
6. **Python 고급 기능**: 제너레이터, 환경변수 관리

## ⚠️ 주의사항

- OpenAI API 키가 필요합니다 (유료 서비스)
- 멜론 API는 웹 스크래핑 방식으로 구현되어 있어 서비스 정책 변경 시 동작하지 않을 수 있습니다
- 음성 재생 기능은 시스템에 오디오 드라이버가 설치되어 있어야 합니다

## 📞 문의

프로젝트 관련 문의사항이 있으시면 이슈를 등록해주세요.

---
**ABC Bootcamp 2025** - AI 애플리케이션 개발 실습