# 김주용 포트폴리오 웹사이트

> 사람과 데이터를 연결하는 심리학도

## 🌟 특징

- **심플하고 모던한 디자인**: 기능적으로 풍부하지만 시각적으로는 깔끔한 UI
- **다크/라이트 모드**: 사용자 선호에 따른 테마 선택
- **반응형 디자인**: 모든 디바이스에서 최적화된 경험
- **부드러운 애니메이션**: 사용자 경험을 향상시키는 인터랙션
- **프로젝트 필터링**: 카테고리별 프로젝트 분류
- **이스터 에그**: 숨겨진 재미 요소

## 🚀 실행 방법

1. `about` 폴더로 이동
2. 프로필 이미지 (`176DA1EF-5459-49BB-A6D7-DF786DF622A8_1_105_c.jpeg`)가 폴더에 있는지 확인
3. `index.html` 파일을 웹 브라우저에서 열기
4. 로컬 서버 실행 (선택사항):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server 설치 필요)
   npx http-server
   ```

## 📁 파일 구조

```
about/
├── index.html                                      # 메인 HTML 파일
├── script.js                                       # JavaScript 기능
├── 176DA1EF-5459-49BB-A6D7-DF786DF622A8_1_105_c.jpeg  # 프로필 이미지
└── README.md                                       # 이 파일
```

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Framework**: Tailwind CSS
- **Icons**: Font Awesome
- **Fonts**: Noto Sans KR (Google Fonts)

## ✨ 주요 기능

### 🎨 UI/UX
- 글래스모피즘 효과
- 그라데이션 디자인
- 호버 애니메이션
- 스크롤 진행도 표시

### 🖱️ 인터랙션
- 타이핑 애니메이션
- 스무스 스크롤 네비게이션
- 원클릭 연락처 복사
- 프로필 이미지 이스터 에그

### 📱 반응형
- 모바일 최적화
- 태블릿 지원
- 데스크톱 대응

## 🎯 섹션 구성

1. **Hero**: 인상적인 첫 화면과 타이핑 애니메이션
2. **About**: 기본 정보 및 현재 상태
3. **Education**: 학력 및 경력 타임라인
4. **Skills**: 기술 스택 및 능력치 시각화
5. **Projects**: 프로젝트 및 활동 포트폴리오
6. **Contact**: 연락처 및 소셜 미디어

## 🔧 커스터마이징

### 색상 변경
`index.html`의 Tailwind 설정에서 primary 색상 수정:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: {
                    500: '#667eea', // 메인 색상
                    600: '#5a67d8',
                    700: '#4c51bf'
                }
            }
        }
    }
}
```

### 내용 수정
- `index.html`에서 텍스트 내용 변경
- `script.js`에서 타이핑 애니메이션 텍스트 수정
- 프로필 이미지 교체 (`176DA1EF-5459-49BB-A6D7-DF786DF622A8_1_105_c.jpeg`)

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 📞 연락처

- **이메일**: chany010713@gmail.com
- **GitHub**: [@River-181](https://github.com/River-181)
- **전화**: 010-7515-6776

---

*Made with ❤️ by 김주용*
