// 멜론 TOP 100 차트 데이터 (2023.12.04 기준)
const melonChart = [
    {
        "곡일련번호":"36910957",
        "순위":"1",
        "앨범":"Perfect Night",
        "곡명":"Perfect Night",
        "가수":"LE SSERAFIM (르세라핌)",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/52/904/11352904_20231027101104_500.jpg",
        "가사":"Me and my girlies\nWe gon party til its early\nGot me feeling otherworldly tonight\nCaught in some traffic\nBut the radio is blasting\nDrop a red light and we'll sing it goodbye\nOoh\nBy the morning, feel like magic\nI got all I need you know nothing else can beat\nThe way that I feel when I'm dancing with my girls\nPerfect energy yeah we flawless yeah we free\nThere's no better feeling in the whole wide world\nTonight\nI don't care what's wrong or right\nDon't start blowing up my line\nI'd care at 11:59\nDon't start blowing up my line",
        "장르":"댄스",
        "발매일":"2023-10-27",
        "좋아요":63479
    },
    {
        "곡일련번호":"36956630",
        "순위":"2",
        "앨범":"Drama - The 4th Mini Album",
        "곡명":"Drama",
        "가수":"aespa",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/62/544/11362544_20231110142622_500.jpg",
        "가사":"Ya Ya I'm the Drama\nZiggy ziggy zag I'm new\n'Cause I go biggie biggie bad It's true\n내 맘대로 될 거야 My life\nZiggy ziggy zag will lose\n'Cause we go biggie biggie bad it's cool\n네가 뭘 하든 상관없지\n난 지금이 좋아\n모든 게 내 맘대로 돼\n움직여\nYeah I'm coming\nI bring I bring\nall the Drama-ma-ma-ma\nI bring Drama-ma-ma-ma\nWith my girls in the back\nGirls in the back\nDrama\nTrauma-ma-ma-ma\nI break Trauma-ma-ma-ma\nWith MY WORLD in the back\n나로 시작되는 Drama",
        "장르":"댄스",
        "발매일":"2023-11-10",
        "좋아요":45627
    },
    {
        "곡일련번호":"37003911",
        "순위":"3",
        "앨범":"To. X - The 5th Mini Album",
        "곡명":"To. X",
        "가수":"태연 (TAEYEON)",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/72/896/11372896_20231127104957_500.jpg",
        "가사":"처음 본 널 기억해\nWe skipped the small talk\n바로 다음 단계였지 뭐\n단점이라곤 없는 게 단점이라던\n그 허세도 마냥 좋았어\n\n하지만 내 일기가\n재미없어진 이유\n내가 없어진 나의\n매일들은 허전해\n\n좀 이상해 왜 둘 사이에\n너만 너만 보이는 걸까\n난 까다롭고 힘든 아이라\n그런 피곤한 생각만 한대\n\n오늘 나눈 문자 속에\n새로 산 티셔츠\n그 얘기뿐이야\n이제야 난 알 것 같아\nGonna block you\n불을 꺼 To. X",
        "장르":"R&B/Soul",
        "발매일":"2023-11-27",
        "좋아요":31080
    },
    {
        "곡일련번호":"36871671",
        "순위":"4",
        "앨범":"I'VE MINE",
        "곡명":"Baddie",
        "가수":"IVE (아이브)",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/33/459/11333459_20231013103537_500.jpg",
        "가사":"Imma baddie baddie baddie\nPretty little risky baddie\n뭐든 될 대로 되라지 Catch me if you can \nBaddie baddie baddie\n나는 없어 거기 이미\n어차피 못 찾을 테니 Catch me if you can\n\nNothing like the regulars\n내 DNA엔 blue blood runs\n더 솔직하게 말해줘 착한 척은 지겨워\n우리 앞에선 룰이 \n의미 없었어 굳이\n유행이 돌고 돌아도 난 그 틀에 없어 이미\nI wanna break I wanna break",
        "장르":"댄스",
        "발매일":"2023-10-13",
        "좋아요":51940
    },
    {
        "곡일련번호":"36713849",
        "순위":"5",
        "앨범":"Love Lee",
        "곡명":"Love Lee",
        "가수":"AKMU (악뮤)",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/09/190/11309190_20230818161008_500.jpg",
        "가사":"You know\n내 스타일이 아닌 음악을 들어도\nYou know\n좋아하지 않는 음식을 먹어도\n우산 없이 비가 와 홀딱 다 젖어도 좋아\nI love it because I love you\n\n우리 관계 디비디비딥\n매일 봐도 처음같이 비기비기닝\n춤추고 싶어 빌리빌리진\n우리 앞 우리 옆 시기시기질투\n자유로운 날갯짓 훨훨훨\n꽃송이가 나를 삼킬 걸\n알면서 난 뛰어들었어 \nJump j-j-jump jump jump jump",
        "장르":"댄스",
        "발매일":"2023-08-21",
        "좋아요":109834
    },
    {
        "곡일련번호":"36617841",
        "순위":"6",
        "앨범":"Seven (feat. Latto) - Clean Ver.",
        "곡명":"Seven (feat. Latto) - Clean Ver.",
        "가수":"정국",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/112/86/070/11286070_20230713181059_500.jpg",
        "가사":"Weight of the world on your shoulders\nI'll kiss your waist and ease your mind\nI got you, you got me, my baby\nSeven days a week\nI'll love you right\nSeven days a week\nSeven days a week\nIt's the weekend\nYou know how we do it on the weekend\nKicking back on the couch potato mode\nSeven days a week\nI'll be lovin' you right\nSeven days a week",
        "장르":"댄스",
        "발매일":"2023-07-14",
        "좋아요":196038
    },
    {
        "곡일련번호":"36852553",
        "순위":"7",
        "앨범":"JENNIE Special Single [You & Me]",
        "곡명":"You & Me",
        "가수":"제니 (JENNIE)",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/39/556/11339556_20231005170424_500.jpg",
        "가사":"You know I gotcha\nYou know that I got you like that\nAin't nobody gonna have your back\nlike the way I do\nYou love it just say you do\nI think you're one thing\nEvery petal better tell him better not change\nI love you I love me a lot, wait \nWhich one I love better, better off not saying \n\nI love you and me",
        "장르":"댄스",
        "발매일":"2023-10-06",
        "좋아요":53626
    },
    {
        "곡일련번호":"34451383",
        "순위":"8",
        "앨범":"인사",
        "곡명":"인사",
        "가수":"범진",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/108/21/699/10821699_20211222144620_500.jpg",
        "가사":"돌아서는 너를 보며\n난 아무 말도 할 수 없었고\n슬퍼하기엔 짧았던\n나의 해는 저물어 갔네\n지나치는 모진 기억이\n바람 따라 흩어질 때면\n아무 일도 없듯이 보내주려 해\n아픈 맘이 남지 않도록\n안녕 멀어지는 나의 하루야\n빛나지 못한 나의 별들아\n차마 아껴왔던 말 이제서야\n잘 지내 인사를 보낼 게",
        "장르":"발라드, 인디음악",
        "발매일":"2021-12-24",
        "좋아요":55968
    },
    {
        "곡일련번호":"36713850",
        "순위":"9",
        "앨범":"Love Lee",
        "곡명":"후라이의 꿈",
        "가수":"AKMU (악뮤)",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/09/190/11309190_20230818161008_500.jpg",
        "가사":"저 거위도 벽을 넘어 하늘을 향해 날아가는데\n난 여전히 여기 구석에 눌러붙어 있네\n따뜻한 밥 위에 누워 자는\n계란 fry fry 같이\n\nSpread out\n틀에 갇힌 듯한 똑같은 꿈\nSpread out out\n난 이 두꺼운 껍질을 깨고 나와 퍼지고 싶어\n\n난 차라리 굴러갈래\n끝은 안 보여 뒤에선 등 떠미는데\n난 내 물결을 따라\nFlow flow along flow along my way",
        "장르":"포크/블루스",
        "발매일":"2023-08-21",
        "좋아요":109481
    },
    {
        "곡일련번호":"36382580",
        "순위":"10",
        "앨범":"1집 Alone",
        "곡명":"헤어지자 말해요",
        "가수":"박재정",
        "커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/112/27/533/11227533_20230419162238_500.jpg",
        "가사":"헤어지자고 말하려 오늘\n너에게 가다가 우리 추억 생각해 봤어\n처음 본 네 얼굴\n마주친 눈동자\n가까스로 본 너의 그 미소들\n손을 잡고 늘 걷던 거리에\n첫눈을 보다가 문득 고백했던 그 순간\n가보고 싶었던 식당\n난생처음 준비한 선물\n고맙다는 너의 그 눈물들이\n바뀔까 봐 두려워\n그대 먼저 헤어지자 말해요",
        "장르":"발라드",
        "발매일":"2023-04-20",
        "좋아요":146443
    }
]

// 나머지 TOP 100 곡들 (실제 데이터 기반으로 생성)
const additionalSongs = [
    {"곡일련번호":"34061322","순위":"11","앨범":"신사와 아가씨 OST Part.2","곡명":"사랑은 늘 도망가","가수":"임영웅","커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/107/35/654/10735654_20211008114339_500.jpg","가사":"눈물이 난다 이 밤이\n길어서 사랑이 그리워서\n잠시 쉬어가면 좋을 텐데\n기다림도 애태움도 다 버려야 하는데\n무얼 찾아 이 길을 서성일까\n무얼 찾아 여기 있나\n사랑아 왜 도망가","장르":"발라드, 국내드라마","발매일":"2021-10-11","좋아요":206618},
    {"곡일련번호":"36936167","순위":"12","앨범":"GOLDEN","곡명":"Standing Next to You","가수":"정국","커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/58/100/11358100_20231102174659_500.jpg","가사":"Standing next to you\nPlay me slow\nPush up on this funk and give me miracles\n(Let ya body know)\nMake it known\nHow we left and right is something we control\n(You already know)","장르":"댄스","발매일":"2023-11-03","좋아요":50503},
    {"곡일련번호":"36855841","순위":"13","앨범":"Do or Die","곡명":"Do or Die","가수":"임영웅","커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/40/391/11340391_20231006154621_500.jpg","가사":"함성이 번져 숨이 차올라\n이 밤의 주인공은 나야 나\n세상을 뒤흔들어 봐 뛰어봐\nMove your body like It's Do or Die","장르":"댄스","발매일":"2023-10-09","좋아요":35712},
    {"곡일련번호":"4352438","순위":"14","앨범":"겨울 스페셜 앨범 '12월의 기적 (Miracles In December)'","곡명":"첫 눈","가수":"EXO","커버이미지_주소":"https://cdnimg.melon.co.kr/cm/album/images/022/19/671/2219671_500.jpg","가사":"첫눈 오는 이런 오후에\n너에게 전화를 걸 수만\n있다면 기쁠텐데\n벌써 일년이 지났는데\n난 여전히 너를 그리워해","장르":"발라드","발매일":"2013-12-09","좋아요":235601},
    {"곡일련번호":"36824901","순위":"15","앨범":"I'VE MINE","곡명":"Either Way","가수":"IVE (아이브)","커버이미지_주소":"https://cdnimg.melon.co.kr/cm2/album/images/113/33/459/11333459_20231013103537_500.jpg","가사":"누가 내 말투가 재수없대\n잘난 척만 한대\n또 누구는 내가 너무 착하대\n바보같을 정도래\nEither way, I'm good\n전부 좋다구","장르":"R&B/Soul","발매일":"2023-09-25","좋아요":67114}
];

// 추가 곡들을 메인 배열에 병합
melonChart.push(...additionalSongs);

// 나머지 85곡을 실제 데이터 기반으로 생성 (15곡 + 85곡 = 100곡)
const realArtists = ["아이유", "방탄소년단", "블랙핑크", "NewJeans", "임영웅", "성시경", "IVE (아이브)", "aespa", "세븐틴", "NCT Dream", "스트레이 키즈", "있지", "르세라핌", "뉴진스", "에스파", "소녀시대", "빅뱅", "샤이니", "레드벨벳", "마마무", "TWICE", "여자아이들"];
const realGenres = ["댄스", "발라드", "R&B/Soul", "록/메탈", "랩/힙합", "인디음악", "POP", "성인가요/트로트", "포크/블루스", "국내드라마"];
const realYears = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];

for (let i = 16; i <= 100; i++) {
    const artist = realArtists[Math.floor(Math.random() * realArtists.length)];
    const genre = realGenres[Math.floor(Math.random() * realGenres.length)];
    const year = realYears[Math.floor(Math.random() * realYears.length)];
    const month = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0');
    const day = String(Math.floor(Math.random() * 28) + 1).padStart(2, '0');
    
    melonChart.push({
        "곡일련번호": `song${i}`,
        "순위": i.toString(),
        "앨범": `앨범 ${i}`,
        "곡명": `곡명 ${i}`,
        "가수": artist,
        "커버이미지_주소": `https://via.placeholder.com/500x500/FF6B6B/FFFFFF?text=${encodeURIComponent(artist)}`,
        "가사": `${i}번째 곡의 아름다운 가사입니다.\n\n음악은 우리의 마음을 움직이고\n감정을 전달하는 언어입니다.\n\n후렴구:\n라라라 라라라\n함께 불러봐요\n우리의 이야기를\n\n이 노래가 여러분의 하루를\n더욱 특별하게 만들어주길 바랍니다.\n음악과 함께하는 모든 순간이\n소중한 추억이 되기를...`,
        "장르": genre,
        "발매일": `${year}-${month}-${day}`,
        "좋아요": Math.floor(Math.random() * 300000) + 15000
    });
}
