// 영화 데이터
const movies = [
    {
        id: 1,
        title: "카사블랑카",
        director: "마이클 커티즈",
        year: 1942,
        poster: "https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg",
        plot: "제2차 세계대전 중 모로코 카사블랑카를 배경으로 한 불멸의 로맨스. 험프리 보가트와 잉그리드 버그만이 출연한 이 작품은 '여기 너를 바라보고 있다, 아이'라는 명대사로 유명하다."
    },
    {
        id: 2,
        title: "시민 케인",
        director: "오슨 웰즈",
        year: 1941,
        poster: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Citizen_Kane_poster%2C_1941_%28Style_B%2C_unrestored%29.jpg",
        plot: "신문 재벌 찰스 포스터 케인의 일생을 그린 작품으로, 영화사상 최고의 걸작으로 평가받는다. 오슨 웰즈가 감독과 주연을 동시에 맡았다."
    },
    {
        id: 3,
        title: "바람과 함께 사라지다",
        director: "빅터 플레밍",
        year: 1939,
        poster: "https://upload.wikimedia.org/wikipedia/commons/2/27/Poster_-_Gone_With_the_Wind_01.jpg",
        plot: "남북전쟁을 배경으로 한 대서사 로맨스. 스칼렛 오하라와 레트 버틀러의 사랑 이야기를 그린 불멸의 고전이다."
    },
    {
        id: 4,
        title: "로마의 휴일",
        director: "윌리엄 와일러",
        year: 1953,
        poster: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Roman_Holiday_%281953_poster%29.jpg",
        plot: "공주 신분을 잠시 벗어나 로마에서 자유를 만끽하는 앤 공주와 신문기자 조의 달콤한 로맨스를 그린 오드리 헵번의 대표작."
    },
    {
        id: 5,
        title: "사이코",
        director: "알프레드 히치콕",
        year: 1960,
        poster: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Psycho_%281960%29_theatrical_poster.jpg",
        plot: "베이츠 모텔에서 일어나는 충격적인 살인 사건을 다룬 히치콕의 스릴러 걸작. 샤워 장면은 영화사의 가장 유명한 장면 중 하나다."
    },
    {
        id: 6,
        title: "아라비아의 로렌스",
        director: "데이비드 린",
        year: 1962,
        poster: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Lawrence_of_Arabia_%281962%29_poster.jpg",
        plot: "제1차 세계대전 중 아랍 독립 운동에 참여한 영국 군인 T.E. 로렌스의 실화를 바탕으로 한 서사시적 대작."
    },
    {
        id: 7,
        title: "현기증",
        director: "알프레드 히치콕",
        year: 1958,
        poster: "https://upload.wikimedia.org/wikipedia/commons/0/00/Vertigo_%281958_poster%29.jpg",
        plot: "고소공포증에 시달리는 전직 형사가 미스터리한 여인을 미행하면서 벌어지는 심리 스릴러의 걸작."
    },
    {
        id: 8,
        title: "선셋 대로",
        director: "빌리 와일더",
        year: 1950,
        poster: "https://upload.wikimedia.org/wikipedia/commons/7/79/Sunset_Boulevard_%281950_poster%29.jpg",
        plot: "할리우드의 어두운 면을 그린 필름 누아르의 걸작. 몰락한 무성영화 스타 노마 데스몬드의 이야기."
    },
    {
        id: 9,
        title: "대부",
        director: "프랜시스 포드 코폴라",
        year: 1972,
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        plot: "이탈리아계 미국인 마피아 가문 코를레오네 패밀리의 이야기를 그린 불멸의 걸작. 마론 브란도가 비토 코를레오네로 출연했다."
    },
    {
        id: 10,
        title: "쇼생크 탈출",
        director: "프랭크 다라본트",
        year: 1994,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        plot: "무실한 죄로 쇼생크 교도소에 갇힌 앤디 듀프레인이 희망을 잃지 않고 인생을 개척해 나가는 감동적인 이야기."
    }
];

// DOM 요소들
const movieGrid = document.getElementById('movie-grid');
const modal = document.getElementById('movie-modal');
const modalPoster = document.getElementById('modal-poster');
const modalTitle = document.getElementById('modal-title');
const modalDirector = document.getElementById('modal-director');
const modalYear = document.getElementById('modal-year');
const modalPlot = document.getElementById('modal-plot');
const closeBtn = document.querySelector('.close');

// 페이지 로드 시 영화 카드들 생성
document.addEventListener('DOMContentLoaded', () => {
    createMovieCards();
    setupEventListeners();
});

// 영화 카드들을 생성하는 함수
function createMovieCards() {
    movieGrid.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieGrid.appendChild(movieCard);
    });
}

// 개별 영화 카드를 생성하는 함수
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.addEventListener('click', () => openModal(movie));
    
    card.innerHTML = `
        <img class="movie-poster" src="${movie.poster}" alt="${movie.title}" loading="lazy">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <p class="movie-director">감독: ${movie.director}</p>
                <p class="movie-year">${movie.year}</p>
            </div>
        </div>
    `;
    
    // 이미지 로드 에러 처리
    const img = card.querySelector('.movie-poster');
    img.addEventListener('error', () => {
        img.src = 'https://via.placeholder.com/300x450/333333/ffffff?text=No+Image';
    });
    
    return card;
}

// 모달을 여는 함수
function openModal(movie) {
    modalPoster.src = movie.poster;
    modalPoster.alt = movie.title;
    modalTitle.textContent = movie.title;
    modalDirector.textContent = movie.director;
    modalYear.textContent = movie.year;
    modalPlot.textContent = movie.plot;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    
    // 모달 포스터 이미지 에러 처리
    modalPoster.addEventListener('error', () => {
        modalPoster.src = 'https://via.placeholder.com/250x375/333333/ffffff?text=No+Image';
    });
}

// 모달을 닫는 함수
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // 배경 스크롤 복원
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 닫기 버튼 클릭
    closeBtn.addEventListener('click', closeModal);
    
    // 모달 배경 클릭 시 닫기
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // ESC 키로 모달 닫기
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
    
    // 윈도우 리사이즈 시 레이아웃 조정
    window.addEventListener('resize', () => {
        // 필요한 경우 레이아웃 재조정 로직 추가
    });
}

// 검색 기능 (향후 확장 가능)
function searchMovies(query) {
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(query.toLowerCase()) ||
        movie.director.toLowerCase().includes(query.toLowerCase()) ||
        movie.year.toString().includes(query)
    );
    
    movieGrid.innerHTML = '';
    filteredMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieGrid.appendChild(movieCard);
    });
}

// 년도별 정렬 기능 (향후 확장 가능)
function sortMoviesByYear(ascending = true) {
    const sortedMovies = [...movies].sort((a, b) => 
        ascending ? a.year - b.year : b.year - a.year
    );
    
    movieGrid.innerHTML = '';
    sortedMovies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        movieGrid.appendChild(movieCard);
    });
}

// 랜덤 영화 추천 기능 (향후 확장 가능)
function getRandomMovie() {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
}
