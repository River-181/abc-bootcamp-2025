// 전역 변수
let currentData = [];
let filteredData = [];
let favorites = JSON.parse(localStorage.getItem('melonFavorites')) || [];
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// DOM 요소들
const elements = {
    chartGrid: document.getElementById('chartGrid'),
    searchInput: document.getElementById('searchInput'),
    filterPanel: document.getElementById('filterPanel'),
    genreFilter: document.getElementById('genreFilter'),
    yearFilter: document.getElementById('yearFilter'),
    sortFilter: document.getElementById('sortFilter'),
    loadingSpinner: document.getElementById('loadingSpinner'),
    detailModal: document.getElementById('detailModal'),
    statsModal: document.getElementById('statsModal'),
    shareModal: document.getElementById('shareModal'),
    favoritesCount: document.getElementById('favoritesCount')
};

// 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadChartData();
});

// 앱 초기화
function initializeApp() {
    // 다크모드 설정
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    }
    
    // 즐겨찾기 카운트 업데이트
    updateFavoritesCount();
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 검색
    elements.searchInput.addEventListener('input', debounce(handleSearch, 300));
    
    // 필터
    document.getElementById('filterBtn').addEventListener('click', toggleFilterPanel);
    elements.genreFilter.addEventListener('change', applyFilters);
    elements.yearFilter.addEventListener('change', applyFilters);
    elements.sortFilter.addEventListener('change', applyFilters);
    
    // 모달
    document.getElementById('closeModal').addEventListener('click', closeDetailModal);
    document.getElementById('closeStatsModal').addEventListener('click', closeStatsModal);
    document.getElementById('closeShareModal').addEventListener('click', closeShareModal);
    
    // 통계 버튼
    document.getElementById('statsBtn').addEventListener('click', showStatsModal);
    
    // 다크모드 토글
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);
    
    // 즐겨찾기 버튼
    document.getElementById('favoritesBtn').addEventListener('click', showFavorites);
    
    // 모달 배경 클릭시 닫기
    elements.detailModal.addEventListener('click', (e) => {
        if (e.target === elements.detailModal) closeDetailModal();
    });
    elements.statsModal.addEventListener('click', (e) => {
        if (e.target === elements.statsModal) closeStatsModal();
    });
    elements.shareModal.addEventListener('click', (e) => {
        if (e.target === elements.shareModal) closeShareModal();
    });
}

// 차트 데이터 로드
function loadChartData() {
    currentData = [...melonChart];
    filteredData = [...currentData];
    
    // 필터 옵션 생성
    populateFilters();
    
    // 차트 렌더링
    renderChart();
    
    // 로딩 스피너 숨기기
    elements.loadingSpinner.classList.add('hidden');
}

// 필터 옵션 채우기
function populateFilters() {
    // 장르 옵션
    const genres = [...new Set(currentData.map(song => song.장르))].sort();
    genres.forEach(genre => {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        elements.genreFilter.appendChild(option);
    });
    
    // 년도 옵션
    const years = [...new Set(currentData.map(song => song.발매일.split('-')[0]))].sort().reverse();
    years.forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = `${year}년`;
        elements.yearFilter.appendChild(option);
    });
}

// 차트 렌더링
function renderChart() {
    elements.chartGrid.innerHTML = '';
    
    filteredData.forEach(song => {
        const card = createSongCard(song);
        elements.chartGrid.appendChild(card);
    });
    
    // 애니메이션 효과
    gsap.fromTo(elements.chartGrid.children, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
}

// 음악 카드 생성
function createSongCard(song) {
    const isFavorite = favorites.includes(song.곡일련번호);
    
    const card = document.createElement('div');
    card.className = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg card-hover overflow-hidden';
    
    card.innerHTML = `
        <div class="relative">
            <img src="${song.커버이미지_주소}" alt="${song.곡명}" class="w-full h-48 object-cover" loading="lazy"
                 onerror="this.src='https://via.placeholder.com/500x500.jpg?text=No+Image'">
            <div class="absolute top-2 left-2 bg-melon-green text-white text-xs px-2 py-1 rounded-full font-bold">
                #${song.순위}
            </div>
            <button class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all
                         ${isFavorite ? 'bg-red-500 text-white' : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'}"
                    onclick="toggleFavorite('${song.곡일련번호}')">
                <i class="fas fa-heart text-sm"></i>
            </button>
        </div>
        
        <div class="p-4">
            <h3 class="font-bold text-lg text-gray-800 dark:text-white mb-1 truncate">${song.곡명}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-2 truncate">${song.가수}</p>
            <p class="text-sm text-gray-500 dark:text-gray-500 mb-3">${song.앨범}</p>
            
            <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">${song.장르}</span>
                <span>${song.발매일}</span>
            </div>
            
            <div class="flex items-center justify-between">
                <div class="flex items-center text-red-500">
                    <i class="fas fa-heart mr-1"></i>
                    <span class="text-sm font-medium">${formatNumber(song.좋아요)}</span>
                </div>
                
                <div class="flex space-x-2">
                    <button onclick="showSongDetail('${song.곡일련번호}')" 
                            class="px-3 py-1 bg-blue-500 text-white text-xs rounded-full hover:bg-blue-600 transition-colors">
                        상세보기
                    </button>
                    <button onclick="shareSong('${song.곡일련번호}')" 
                            class="px-3 py-1 bg-green-500 text-white text-xs rounded-full hover:bg-green-600 transition-colors">
                        공유
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// 숫자 포맷팅
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// 검색 처리
function handleSearch() {
    const query = elements.searchInput.value.toLowerCase().trim();
    
    if (query === '') {
        filteredData = [...currentData];
    } else {
        filteredData = currentData.filter(song => 
            song.곡명.toLowerCase().includes(query) ||
            song.가수.toLowerCase().includes(query) ||
            song.앨범.toLowerCase().includes(query)
        );
    }
    
    applyFilters();
}

// 필터 적용
function applyFilters() {
    let filtered = [...filteredData];
    
    // 장르 필터
    const selectedGenre = elements.genreFilter.value;
    if (selectedGenre) {
        filtered = filtered.filter(song => song.장르 === selectedGenre);
    }
    
    // 년도 필터
    const selectedYear = elements.yearFilter.value;
    if (selectedYear) {
        filtered = filtered.filter(song => song.발매일.startsWith(selectedYear));
    }
    
    // 정렬
    const sortBy = elements.sortFilter.value;
    switch (sortBy) {
        case 'rank':
            filtered.sort((a, b) => parseInt(a.순위) - parseInt(b.순위));
            break;
        case 'likes':
            filtered.sort((a, b) => parseInt(b.좋아요) - parseInt(a.좋아요));
            break;
        case 'title':
            filtered.sort((a, b) => a.곡명.localeCompare(b.곡명));
            break;
        case 'artist':
            filtered.sort((a, b) => a.가수.localeCompare(b.가수));
            break;
    }
    
    filteredData = filtered;
    renderChart();
}

// 필터 패널 토글
function toggleFilterPanel() {
    elements.filterPanel.classList.toggle('hidden');
}

// 즐겨찾기 토글
function toggleFavorite(songId) {
    const index = favorites.indexOf(songId);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(songId);
    }
    
    localStorage.setItem('melonFavorites', JSON.stringify(favorites));
    updateFavoritesCount();
    renderChart(); // 카드 업데이트
}

// 즐겨찾기 카운트 업데이트
function updateFavoritesCount() {
    elements.favoritesCount.textContent = favorites.length;
}

// 즐겨찾기 보기
function showFavorites() {
    filteredData = currentData.filter(song => favorites.includes(song.곡일련번호));
    renderChart();
    
    // 검색창 클리어
    elements.searchInput.value = '';
    
    // 알림
    showNotification('즐겨찾기 곡들을 표시했습니다!', 'success');
}

// 곡 상세 정보 보기
function showSongDetail(songId) {
    const song = currentData.find(s => s.곡일련번호 === songId);
    if (!song) return;
    
    const modalContent = document.getElementById('modalContent');
    modalContent.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/3">
                <img src="${song.커버이미지_주소}" alt="${song.곡명}" class="w-full rounded-lg shadow-lg"
                     onerror="this.src='https://via.placeholder.com/500x500.jpg?text=No+Image'">
                <div class="mt-4 text-center">
                    <div class="text-2xl font-bold text-gray-800 dark:text-white">#${song.순위}</div>
                    <div class="text-sm text-gray-500">차트 순위</div>
                </div>
            </div>
            
            <div class="md:w-2/3">
                <h3 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">${song.곡명}</h3>
                <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">${song.가수}</p>
                
                <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div class="text-sm text-gray-500 dark:text-gray-400">앨범</div>
                        <div class="font-medium text-gray-800 dark:text-white">${song.앨범}</div>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div class="text-sm text-gray-500 dark:text-gray-400">장르</div>
                        <div class="font-medium text-gray-800 dark:text-white">${song.장르}</div>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div class="text-sm text-gray-500 dark:text-gray-400">발매일</div>
                        <div class="font-medium text-gray-800 dark:text-white">${song.발매일}</div>
                    </div>
                    <div class="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                        <div class="text-sm text-gray-500 dark:text-gray-400">좋아요</div>
                        <div class="font-medium text-red-500">${formatNumber(song.좋아요)}</div>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h4 class="text-lg font-semibold text-gray-800 dark:text-white mb-3">🎵 가사</h4>
                    <div class="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg max-h-60 overflow-y-auto">
                        <pre class="whitespace-pre-wrap text-sm text-gray-700 dark:text-gray-300">${song.가사}</pre>
                    </div>
                </div>
                
                <div class="flex space-x-3">
                    <button onclick="toggleFavorite('${song.곡일련번호}')" 
                            class="flex-1 py-2 px-4 rounded-lg font-medium transition-colors
                                   ${favorites.includes(song.곡일련번호) 
                                     ? 'bg-red-500 text-white hover:bg-red-600' 
                                     : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-white hover:bg-red-500 hover:text-white'}">
                        <i class="fas fa-heart mr-2"></i>
                        ${favorites.includes(song.곡일련번호) ? '즐겨찾기 해제' : '즐겨찾기 추가'}
                    </button>
                    <button onclick="shareSong('${song.곡일련번호}')" 
                            class="flex-1 py-2 px-4 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors">
                        <i class="fas fa-share mr-2"></i>공유하기
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modalTitle').textContent = song.곡명;
    elements.detailModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

// 상세 모달 닫기
function closeDetailModal() {
    elements.detailModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// 공유 기능
function shareSong(songId) {
    const song = currentData.find(s => s.곡일련번호 === songId);
    if (!song) return;
    
    const shareContent = document.getElementById('shareContent');
    const shareText = `🎵 ${song.곡명} - ${song.가수}\n멜론 차트 #${song.순위}위 곡을 들어보세요!`;
    const shareUrl = encodeURIComponent(window.location.href);
    const shareTitle = encodeURIComponent(shareText);
    
    shareContent.innerHTML = `
        <button onclick="copyToClipboard('${shareText.replace(/'/g, "\\'")}', '링크가 복사되었습니다!')" 
                class="w-full p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-left">
            <i class="fas fa-copy mr-3 text-blue-500"></i>
            <span class="text-gray-800 dark:text-white">링크 복사</span>
        </button>
        
        <a href="https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}" 
           target="_blank" 
           class="block w-full p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
            <i class="fab fa-twitter mr-3"></i>트위터에 공유
        </a>
        
        <a href="https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareTitle}" 
           target="_blank" 
           class="block w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <i class="fab fa-facebook mr-3"></i>페이스북에 공유
        </a>
        
        <button onclick="shareKakao('${song.곡명}', '${song.가수}', '${song.순위}')" 
                class="w-full p-3 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors text-left">
            <i class="fas fa-comment mr-3"></i>카카오톡 공유
        </button>
    `;
    
    elements.shareModal.classList.remove('hidden');
}

// 공유 모달 닫기
function closeShareModal() {
    elements.shareModal.classList.add('hidden');
}

// 클립보드 복사
function copyToClipboard(text, message) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(message, 'success');
        closeShareModal();
    }).catch(() => {
        showNotification('복사에 실패했습니다.', 'error');
    });
}

// 카카오톡 공유
function shareKakao(title, artist, rank) {
    const text = `🎵 ${title} - ${artist}\n멜론 차트 #${rank}위 곡을 들어보세요!`;
    showNotification('카카오톡 앱에서 공유해주세요!', 'info');
    copyToClipboard(text, '메시지가 복사되었습니다!');
}

// 통계 모달 보기
function showStatsModal() {
    elements.statsModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // 차트 그리기
    setTimeout(() => {
        drawGenreChart();
        drawArtistChart();
    }, 100);
}

// 통계 모달 닫기
function closeStatsModal() {
    elements.statsModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// 장르별 분포 차트
function drawGenreChart() {
    const ctx = document.getElementById('genreChart').getContext('2d');
    
    // 장르별 곡 수 계산
    const genreCount = {};
    currentData.forEach(song => {
        const genre = song.장르;
        genreCount[genre] = (genreCount[genre] || 0) + 1;
    });
    
    const sortedGenres = Object.entries(genreCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 8); // 상위 8개 장르만
    
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: sortedGenres.map(([genre]) => genre),
            datasets: [{
                data: sortedGenres.map(([, count]) => count),
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
                    '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'
                ],
                borderWidth: 2,
                borderColor: isDarkMode ? '#374151' : '#ffffff'
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: isDarkMode ? '#ffffff' : '#374151',
                        padding: 15
                    }
                }
            }
        }
    });
}

// 아티스트별 곡 수 차트
function drawArtistChart() {
    const ctx = document.getElementById('artistChart').getContext('2d');
    
    // 아티스트별 곡 수 계산
    const artistCount = {};
    currentData.forEach(song => {
        const artist = song.가수;
        artistCount[artist] = (artistCount[artist] || 0) + 1;
    });
    
    const sortedArtists = Object.entries(artistCount)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10); // 상위 10명 아티스트만
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedArtists.map(([artist]) => artist),
            datasets: [{
                label: '곡 수',
                data: sortedArtists.map(([, count]) => count),
                backgroundColor: 'rgba(54, 162, 235, 0.8)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: isDarkMode ? '#ffffff' : '#374151'
                    },
                    grid: {
                        color: isDarkMode ? '#4B5563' : '#E5E7EB'
                    }
                },
                x: {
                    ticks: {
                        color: isDarkMode ? '#ffffff' : '#374151',
                        maxRotation: 45
                    },
                    grid: {
                        color: isDarkMode ? '#4B5563' : '#E5E7EB'
                    }
                }
            }
        }
    });
}

// 다크모드 토글
function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', isDarkMode);
}

// 알림 표시
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg text-white transform transition-all duration-300 translate-x-full`;
    
    switch (type) {
        case 'success':
            notification.className += ' bg-green-500';
            break;
        case 'error':
            notification.className += ' bg-red-500';
            break;
        case 'info':
        default:
            notification.className += ' bg-blue-500';
            break;
    }
    
    notification.innerHTML = `
        <div class="flex items-center">
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'exclamation' : 'info'}-circle mr-3"></i>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // 애니메이션
    setTimeout(() => {
        notification.classList.remove('translate-x-full');
    }, 100);
    
    // 자동 제거
    setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// 디바운스 함수
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// GSAP 애니메이션 (CDN 없이 간단한 구현)
const gsap = {
    fromTo: (elements, from, to) => {
        Array.from(elements).forEach((el, index) => {
            Object.assign(el.style, from);
            setTimeout(() => {
                el.style.transition = `all ${to.duration}s ease`;
                Object.assign(el.style, to);
            }, (to.stagger || 0) * index * 1000);
        });
    }
};
