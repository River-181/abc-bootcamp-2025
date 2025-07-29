// 전역 변수
let currentTheme = localStorage.getItem('theme') || 'light';
let currentSection = 'home';

// DOM 로드 완료 후 실행
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeNavigation();
    initializeTypingAnimation();
    initializeScrollProgress();
    initializeSkillBars();
    initializeProfileImage();
    initializeProjectFilter();
    
    // 디버깅을 위한 테스트 함수 추가
    window.testSkillBars = function() {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach((bar, index) => {
            const percent = bar.getAttribute('data-percent');
            console.log(`Bar ${index}: ${percent}%`);
            setTimeout(() => {
                bar.style.width = percent + '%';
            }, index * 200);
        });
    };
    
    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', handleScroll);
    
    // 리사이즈 이벤트 리스너
    window.addEventListener('resize', debounce(handleResize, 100));
});

// 테마 초기화
function initializeTheme() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    // 저장된 테마 적용
    if (currentTheme === 'dark') {
        document.documentElement.classList.add('dark');
    }
    
    // 다크모드 토글 이벤트
    darkModeToggle.addEventListener('click', toggleDarkMode);
}

// 다크모드 토글
function toggleDarkMode() {
    const html = document.documentElement;
    const isDark = html.classList.contains('dark');
    
    if (isDark) {
        html.classList.remove('dark');
        currentTheme = 'light';
    } else {
        html.classList.add('dark');
        currentTheme = 'dark';
    }
    
    localStorage.setItem('theme', currentTheme);
    
    // 토글 애니메이션
    const toggle = document.getElementById('darkModeToggle');
    toggle.style.transform = 'scale(0.8)';
    setTimeout(() => {
        toggle.style.transform = 'scale(1)';
    }, 150);
}

// 네비게이션 초기화
function initializeNavigation() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const navLinks = document.querySelectorAll('.nav-link, #mobileMenu a');
    
    // 모바일 메뉴 토글
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    // 네비게이션 링크 클릭 이벤트
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            const element = document.querySelector(target);
            
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // 모바일 메뉴 닫기
                mobileMenu.classList.add('hidden');
            }
        });
    });
}

// 타이핑 애니메이션
function initializeTypingAnimation() {
    const texts = [
        "사람과 데이터를 연결하는 심리학도",
        "따뜻한 소통을 중요하게 여기는 사람",
        "경험을 통해 성장하는 개발자",
        "ABC 부트캠프 데이터 탐험가"
    ];
    
    const typingElement = document.getElementById('typingText');
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeText() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && charIndex === currentText.length) {
            typeSpeed = 2000; // 완성 후 대기
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            typeSpeed = 500;
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    // 애니메이션 시작
    setTimeout(typeText, 1000);
}

// 스크롤 진행도 바
function initializeScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress');
    
    function updateProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        progressBar.style.width = scrollPercent + '%';
    }
    
    window.addEventListener('scroll', updateProgress);
}

// 스킬 바 애니메이션
function initializeSkillBars() {
    // 초기 스킬 바 설정
    const allProgressBars = document.querySelectorAll('.progress-bar');
    allProgressBars.forEach(bar => {
        bar.style.width = '0%';
        bar.style.transition = 'width 1.5s ease-out';
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBars = entry.target.querySelectorAll('.progress-bar');
                
                progressBars.forEach((bar, index) => {
                    const percent = bar.getAttribute('data-percent');
                    
                    // 각 바에 순차적으로 애니메이션 적용
                    setTimeout(() => {
                        bar.style.width = percent + '%';
                        
                        // 추가 시각적 효과
                        bar.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                    }, index * 150 + 300);
                });
                
                // 한 번 실행되면 observer 해제
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    });
    
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        observer.observe(skillsSection);
        
        // 폴백: 페이지 로드 후 3초 뒤에 강제 실행
        setTimeout(() => {
            const isInViewport = skillsSection.getBoundingClientRect().top < window.innerHeight;
            if (isInViewport) {
                const progressBars = skillsSection.querySelectorAll('.progress-bar');
                progressBars.forEach((bar, index) => {
                    const percent = bar.getAttribute('data-percent');
                    if (bar.style.width === '0%' || bar.style.width === '') {
                        setTimeout(() => {
                            bar.style.width = percent + '%';
                        }, index * 150);
                    }
                });
            }
        }, 3000);
    }
}

// 프로필 이미지 이스터 에그
function initializeProfileImage() {
    const profileImage = document.getElementById('profileImage');
    let clickCount = 0;
    
    profileImage.addEventListener('click', () => {
        clickCount++;
        
        // 클릭 효과
        profileImage.style.transform = 'scale(0.95)';
        setTimeout(() => {
            profileImage.style.transform = 'scale(1.05)';
            setTimeout(() => {
                profileImage.style.transform = 'scale(1)';
            }, 200);
        }, 100);
        
        // 5번 클릭시 이스터 에그
        if (clickCount === 5) {
            showEasterEgg();
            clickCount = 0;
        }
    });
}

// 이스터 에그 표시
function showEasterEgg() {
    const messages = [
        "🎉 숨겨진 메시지를 발견했네요!",
        "🌟 저는 사실 피자를 정말 좋아합니다!",
        "🎵 음악 들으며 코딩하는 것이 최고예요!",
        "☕ 커피 없이는 하루도 살 수 없어요!",
        "🎮 가끔 게임도 즐겨합니다!"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    // 임시 메시지 표시
    const messageEl = document.createElement('div');
    messageEl.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 px-6 py-4 rounded-lg shadow-2xl z-50 animate-pulse';
    messageEl.innerHTML = `
        <div class="text-center">
            <p class="text-lg font-medium">${randomMessage}</p>
            <button onclick="this.parentElement.parentElement.remove()" class="mt-2 px-4 py-2 bg-primary-500 text-white rounded-full text-sm hover:bg-primary-600">
                닫기
            </button>
        </div>
    `;
    
    document.body.appendChild(messageEl);
    
    // 3초 후 자동 제거
    setTimeout(() => {
        if (messageEl.parentElement) {
            messageEl.remove();
        }
    }, 3000);
}

// 스크롤 이벤트 핸들러
function handleScroll() {
    updateActiveNavigation();
    handleScrollAnimations();
}

// 활성 네비게이션 업데이트
function updateActiveNavigation() {
    const sections = ['home', 'about', 'education', 'skills', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                current = sectionId;
            }
        }
    });
    
    if (current !== currentSection) {
        navLinks.forEach(link => {
            link.classList.remove('nav-active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('nav-active');
            }
        });
        currentSection = current;
    }
}

// 스크롤 애니메이션
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
            element.classList.add('animate-in');
        }
    });
}

// 연락처 복사 기능
function copyToClipboard(text, type) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification(`${type}이(가) 복사되었습니다! 📋`);
    }).catch(() => {
        // 폴백: 텍스트 선택
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification(`${type}이(가) 복사되었습니다! 📋`);
    });
}

// 알림 표시
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // 애니메이션
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // 3초 후 제거
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 리사이즈 핸들러
function handleResize() {
    // 모바일 메뉴 숨기기
    if (window.innerWidth >= 768) {
        document.getElementById('mobileMenu').classList.add('hidden');
    }
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

// 스무스 스크롤 폴리필 (구형 브라우저 지원)
if (!('scrollBehavior' in document.documentElement.style)) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@1.4.10/src/smoothscroll.js';
    document.head.appendChild(script);
}

// 성능 최적화: Intersection Observer로 애니메이션 관리
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// 페이지 로드 완료 후 관찰 시작
window.addEventListener('load', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => animationObserver.observe(el));
    
    // 페이지 로드 후 스킬 바 강제 초기화
    setTimeout(() => {
        const progressBars = document.querySelectorAll('.progress-bar');
        console.log('Found progress bars:', progressBars.length);
        
        progressBars.forEach((bar, index) => {
            console.log(`Setting up bar ${index}`);
            bar.style.width = '0%';
            bar.style.transition = 'width 1.5s ease-out';
            bar.style.display = 'block';
        });
        
        // 스킬 섹션이 보이는지 확인하고 애니메이션 실행
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            const rect = skillsSection.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // 스킬 섹션이 보이면 즉시 애니메이션 실행
                setTimeout(() => {
                    window.testSkillBars();
                }, 500);
            }
        }
    }, 1000);
});

// 프로젝트 필터링 초기화
function initializeProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // 버튼 활성화 상태 변경
            filterButtons.forEach(btn => {
                btn.classList.remove('active', 'bg-primary-500', 'text-white');
                btn.classList.add('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            });
            
            button.classList.add('active', 'bg-primary-500', 'text-white');
            button.classList.remove('bg-gray-200', 'dark:bg-gray-700', 'text-gray-700', 'dark:text-gray-300');
            
            // 프로젝트 카드 필터링
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(-20px)';
                    
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// 추가 유틸리티 함수들
function openProject(url) {
    if (url) {
        window.open(url, '_blank');
    }
}

// 스킬 카드 호버 효과
function initializeSkillHoverEffects() {
    const skillCards = document.querySelectorAll('#skills .bg-white');
    
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-8px) scale(1.05)';
            card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '';
        });
    });
}

// 추가 애니메이션 클래스
document.addEventListener('DOMContentLoaded', function() {
    // CSS 클래스 추가
    const style = document.createElement('style');
    style.textContent = `
        .animate-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease-out;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .project-card {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }
        
        .animate-float {
            animation: float 6s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
    
    // 스킬 호버 효과 초기화
    initializeSkillHoverEffects();
});
