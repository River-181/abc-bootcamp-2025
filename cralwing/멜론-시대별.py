import requests
from bs4 import BeautifulSoup

page_url = "https://www.melon.com/chart/age/list.htm"

params = {
    "idx": "1",
    "chartType": "YE",
    "chartGenre": "KPOP",
    "chartDate": "2019",
    "moved": "Y",
}

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
}

res = requests.get(page_url, params=params, headers=headers)
print(res)  # 상태코드 출력

html: str = res.text
# with open("melon_dump.html", "wt", encoding="utf8") as f:
#     f.write(html)
#     print("written to", f.name)

soup = BeautifulSoup(html, "html.parser")

el_list = soup.select(".lst50")

for el in el_list:
    song_el = el.select_one("[href*=playSong]") # 태그 명은 상관 없이 playSong이 포함된 href 속성을 가진 요소를 선택
    song_title = song_el.text.strip()  # 곡명 추출
    # print(song_el) # 곡명과 곡 ID가 포함된 요소
    print(song_title) # 곡명 출력