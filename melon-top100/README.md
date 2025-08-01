# 🎵 멜론 TOP 100 차트 웹페이지

## 📖 프로젝트 소개

2023년 12월 4일 기준 멜론 TOP 100 차트 데이터를 활용한 인터랙티브 웹페이지입니다.
풍부한 그래픽과 다양한 기능을 제공하여 음악 차트를 직관적이고 재미있게 탐색할 수 있습니다.

## ✨ 주요 기능

### 🎯 기본 기능
- **TOP 100 차트 표시**: 순위별 음악 리스트를 카드 형태로 표시
- **상세 정보 모달**: 곡 정보, 가사, 앨범 커버 등 상세 정보 제공
- **검색 기능**: 곡명, 아티스트명으로 실시간 검색
- **필터링**: 장르별, 발매년도별 필터링 및 다양한 정렬 옵션

### 🎨 고급 기능
- **다크모드 지원**: 라이트/다크 테마 토글
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 완벽 대응
- **즐겨찾기**: 로컬 스토리지를 활용한 즐겨찾기 기능
- **공유 기능**: SNS 공유 및 링크 복사
- **통계 차트**: 장르별 분포, 아티스트별 곡 수 통계

### 🎪 UX/UI 특징
- **글래스모피즘**: 현대적인 반투명 유리 효과
- **카드 호버 애니메이션**: 부드러운 3D 호버 효과
- **그라디언트 배경**: 멜론 브랜드 컬러 활용
- **스무스 스크롤**: 부드러운 스크롤 애니메이션
- **알림 시스템**: 사용자 피드백을 위한 토스트 알림

## 🛠 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: Flexbox, Grid, 애니메이션
- **JavaScript (ES6+)**: 모던 자바스크립트 문법
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크
- **Chart.js**: 통계 차트 라이브러리
- **Font Awesome**: 아이콘 라이브러리
- **Noto Sans KR**: 한글 웹폰트

## 📁 파일 구조

```
melon-top100/
├── index.html          # 메인 HTML 파일
├── app.js             # 주요 JavaScript 로직
├── data.js            # 멜론 차트 데이터
└── README.md          # 프로젝트 문서
```

## 🚀 실행 방법

1. **파일 다운로드**
   ```bash
   git clone [repository-url]
   cd melon-top100
   ```

2. **브라우저에서 실행**
   - `index.html` 파일을 더블클릭하여 브라우저에서 열기
   - 또는 Live Server 확장프로그램 사용 (권장)

3. **로컬 서버 실행** (선택사항)
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   
   # Node.js
   npx serve .
   ```

## 🎮 사용법

### 기본 탐색
- **카드 클릭**: 곡 상세 정보 모달 열기
- **하트 버튼**: 즐겨찾기 추가/해제
- **공유 버튼**: 곡 공유 모달 열기

### 검색 및 필터
- **검색창**: 곡명, 아티스트명으로 실시간 검색
- **필터 버튼**: 장르, 발매년도별 필터링
- **정렬**: 순위순, 좋아요순, 제목순, 아티스트순

### 기타 기능
- **다크모드**: 우측 상단 달/해 아이콘 클릭
- **통계**: 우측 상단 통계 버튼으로 차트 분석
- **즐겨찾기**: 우측 하단 하트 버튼으로 즐겨찾기 곡들 보기

## 🎨 디자인 특징

### 색상 팔레트
- **주요 색상**: 멜론 그린 (#00C851), 멜론 오렌지 (#FFA000)
- **다크모드**: 회색 톤 계열
- **액센트**: 빨강(좋아요), 파랑(정보), 초록(공유)

### 애니메이션
- **카드 호버**: Y축 이동 + 그림자 효과
- **페이드인**: 콘텐츠 로딩시 부드러운 등장
- **토스트 알림**: 슬라이드 인/아웃 효과

## 📱 반응형 디자인

- **모바일**: 1열 그리드, 햄버거 메뉴
- **태블릿**: 2열 그리드, 사이드바
- **데스크톱**: 4열 그리드, 풀 네비게이션

## 💾 데이터 저장

- **즐겨찾기**: `localStorage`에 저장
- **다크모드 설정**: `localStorage`에 저장
- **차트 데이터**: `data.js` 파일에 정적 저장

## 🔧 커스터마이징

### 색상 변경
`index.html`의 Tailwind 설정에서 색상 팔레트 수정:
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'melon': {
                    'green': '#00C851',  // 원하는 색상으로 변경
                    'orange': '#FFA000'  // 원하는 색상으로 변경
                }
            }
        }
    }
}
```

### 데이터 업데이트
`data.js` 파일의 `melonChart` 배열 수정

## 🌟 향후 개선사항

- [ ] 음원 스트리밍 서비스 연동
- [ ] 실시간 차트 업데이트 API 연동
- [ ] 사용자 플레이리스트 생성
- [ ] 곡 미리듣기 기능
- [ ] 소셜 로그인 연동

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 👨‍💻 개발자

- **개발**: AI Assistant
- **데이터**: 멜론 차트 (2023.12.04 기준)
- **디자인**: 멜론 브랜드 가이드라인 참고

---

🎵 **음악과 함께하는 즐거운 시간 되세요!** 🎵
