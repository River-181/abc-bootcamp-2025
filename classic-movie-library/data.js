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
        title: "싸이코",
        director: "알프레드 히치콕",
        year: 1960,
        poster: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Psycho_%281960%29_theatrical_poster.jpg",
        plot: "베이츠 모텔에서 일어나는 충격적인 살인 사건을 다룬 히치콕의 스릴러 걸작. 샤워 장면은 영화사의 가장 유명한 장면 중 하나다."
    },
    {
        id: 8,
        title: "현기증",
        director: "알프레드 히치콕",
        year: 1958,
        poster: "https://upload.wikimedia.org/wikipedia/commons/0/00/Vertigo_%281958_poster%29.jpg",
        plot: "고소공포증에 시달리는 전직 형사가 미스터리한 여인을 미행하면서 벌어지는 심리 스릴러의 걸작."
    },
    {
        id: 9,
        title: "선셋 대로",
        director: "빌리 와일더",
        year: 1950,
        poster: "https://upload.wikimedia.org/wikipedia/commons/7/79/Sunset_Boulevard_%281950_poster%29.jpg",
        plot: "할리우드의 어두운 면을 그린 필름 누아르의 걸작. 몰락한 무성영화 스타 노마 데스몬드의 이야기."
    },
    {
        id: 10,
        title: "대부",
        director: "프랜시스 포드 코폴라",
        year: 1972,
        poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg",
        plot: "이탈리아계 미국인 마피아 가문 코를레오네 패밀리의 이야기를 그린 불멸의 걸작. 마론 브란도가 비토 코를레오네로 출연했다."
    },
    {
        id: 11,
        title: "대부 2",
        director: "프랜시스 포드 코폴라",
        year: 1974,
        poster: "https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg",
        plot: "비토 코를레오네의 젊은 시절과 아들 마이클의 이야기를 병행해서 그린 속편. 전편을 뛰어넘는다는 평가를 받는다."
    },
    {
        id: 12,
        title: "쇼생크 탈출",
        director: "프랭크 다라본트",
        year: 1994,
        poster: "https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        plot: "무실한 죄로 쇼생크 교도소에 갇힌 앤디 듀프레인이 희망을 잃지 않고 인생을 개척해 나가는 감동적인 이야기."
    },
    {
        id: 13,
        title: "쉰들러 리스트",
        director: "스티븐 스필버그",
        year: 1993,
        poster: "https://upload.wikimedia.org/wikipedia/en/3/38/Schindler%27s_List_movie.jpg",
        plot: "홀로코스트 중 1,100여 명의 유대인을 구한 오스카 쉰들러의 실화를 바탕으로 한 감동적인 작품."
    },
    {
        id: 14,
        title: "12명의 성난 사람들",
        director: "시드니 루멧",
        year: 1957,
        poster: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
        plot: "살인 혐의로 기소된 소년의 재판에서 배심원 12명이 벌이는 치열한 토론을 그린 법정 드라마의 걸작."
    },
    {
        id: 15,
        title: "일곱 사무라이",
        director: "구로사와 아키라",
        year: 1954,
        poster: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Seven_Samurai_poster.jpg",
        plot: "전국시대 일본을 배경으로 농민들을 보호하기 위해 나선 일곱 명의 사무라이 이야기. 구로사와 아키라의 대표작."
    },
    {
        id: 16,
        title: "8½",
        director: "페데리코 펠리니",
        year: 1963,
        poster: "https://upload.wikimedia.org/wikipedia/en/0/0c/8_half_poster.jpg",
        plot: "창작의 위기에 빠진 영화감독의 내면을 환상적으로 그린 펠리니의 자전적 작품이자 메타 영화의 걸작."
    },
    {
        id: 17,
        title: "싱' 인 더 레인",
        director: "진 켈리, 스탠리 도넌",
        year: 1952,
        poster: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Singin%27_in_the_Rain_%281952_poster%29.jpg",
        plot: "무성영화에서 유성영화로 넘어가는 시대를 배경으로 한 뮤지컬의 고전. 빗속에서 춤추는 장면이 유명하다."
    },
    {
        id: 18,
        title: "안토니오니의 밤",
        director: "미켈란젤로 안토니오니",
        year: 1961,
        poster: "https://upload.wikimedia.org/wikipedia/en/6/6c/La_notte_poster.jpg",
        plot: "부르주아 부부의 하룻밤을 통해 현대인의 소외와 무력감을 섬세하게 그린 안토니오니의 대표작."
    },
    {
        id: 19,
        title: "북북서로 진로를 돌려라",
        director: "알프레드 히치콕",
        year: 1959,
        poster: "https://upload.wikimedia.org/wikipedia/commons/f/f8/North_by_Northwest_poster.jpg",
        plot: "신분 착각으로 인해 추격전에 휘말린 남자의 스릴 넘치는 모험을 그린 히치콕의 스릴러 걸작."
    },
    {
        id: 20,
        title: "2001: 스페이스 오디세이",
        director: "스탠리 큐브릭",
        year: 1968,
        poster: "https://upload.wikimedia.org/wikipedia/en/e/ef/2001_A_Space_Odyssey_%281968%29.png",
        plot: "인류의 진화와 인공지능을 다룬 SF 영화의 걸작. 혁신적인 특수효과와 철학적 주제로 유명하다."
    },
    {
        id: 21,
        title: "택시 드라이버",
        director: "마틴 스코세이지",
        year: 1976,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/9b/Taxi_Driver_%281976_film_poster%29.jpg",
        plot: "도시의 어둠과 고독에 시달리는 택시 운전사 트래비스 비클의 이야기. 로버트 드 니로의 대표작 중 하나."
    },
    {
        id: 22,
        title: "애니 홀",
        director: "우디 앨런",
        year: 1977,
        poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Annie_Hall_PosterArt.jpg",
        plot: "신경질적인 코미디언과 자유분방한 여성의 사랑과 이별을 유머러스하게 그린 우디 앨런의 대표작."
    },
    {
        id: 23,
        title: "치나타운",
        director: "로만 폴란스키",
        year: 1974,
        poster: "https://upload.wikimedia.org/wikipedia/en/f/ff/Chinatown_%281974_film%29.png",
        plot: "1930년대 로스앤젤레스를 배경으로 한 필름 누아르. 물 권리를 둘러싼 음모와 부패를 파헤치는 탐정의 이야기."
    },
    {
        id: 24,
        title: "아메리칸 그래피티",
        director: "조지 루카스",
        year: 1973,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/9e/American_Graffiti_poster.jpg",
        plot: "1960년대 초 캘리포니아 소도시 청춘들의 하룻밤을 그린 성장영화. 조지 루카스의 초기 작품."
    },
    {
        id: 25,
        title: "미드나잇 카우보이",
        director: "존 슐레징거",
        year: 1969,
        poster: "https://upload.wikimedia.org/wikipedia/en/9/9d/Midnight_Cowboy_poster.jpg",
        plot: "텍사스에서 뉴욕으로 온 순진한 청년과 거리의 사기꾼이 맺는 우정을 그린 로드 무비."
    },
    {
        id: 26,
        title: "아포칼립스 나우",
        director: "프랜시스 포드 코폴라",
        year: 1979,
        poster: "https://upload.wikimedia.org/wikipedia/en/d/dd/Apocalypse_Now_poster.jpg",
        plot: "베트남 전쟁을 배경으로 한 전쟁 영화의 걸작. 조지프 콘래드의 '암흑의 핵심'을 각색했다."
    },
    {
        id: 27,
        title: "레이징 불",
        director: "마틴 스코세이지",
        year: 1980,
        poster: "https://upload.wikimedia.org/wikipedia/en/7/7f/Raging_Bull_poster.jpg",
        plot: "권투선수 제이크 라모타의 실화를 바탕으로 한 전기영화. 로버트 드 니로의 명연기가 돋보인다."
    },
    {
        id: 28,
        title: "올 어바웃 이브",
        director: "조지프 L. 맨키에비츠",
        year: 1950,
        poster: "https://upload.wikimedia.org/wikipedia/commons/3/35/All_About_Eve_%281950_poster%29.jpg",
        plot: "브로드웨이 무대의 배후를 그린 날카로운 드라마. 베티 데이비스의 대표작 중 하나."
    },
    {
        id: 29,
        title: "몰타의 매",
        director: "존 휴스턴",
        year: 1941,
        poster: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Maltese_Falcon_%281941_poster%29.jpg",
        plot: "샘 스페이드 탐정이 몰타의 매라는 보물을 둘러싼 음모에 휘말리는 필름 누아르의 고전."
    },
    {
        id: 30,
        title: "페르소나",
        director: "잉마르 베리만",
        year: 1966,
        poster: "https://upload.wikimedia.org/wikipedia/en/4/4b/Persona_%281966_film%29.png",
        plot: "말을 잃은 여배우와 그녀를 돌보는 간호사의 심리적 관계를 그린 베리만의 실험적 걸작."
    }
];

export default movies;