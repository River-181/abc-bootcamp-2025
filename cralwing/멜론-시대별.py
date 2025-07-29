# 멜론-시대별.py
import requests

page_url = "https://www.melon.com/chart/age/list.htm"

params = {

    "idx": "1",  
    "chartType": "YE",
    "chartGenre": "KPOP",
    "chartData": "2019",
    "moved": "Y"
}

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
}

res = requests.get(page_url, params=params, headers=headers)
print(res.status_code) # 500

html: str = res.text

with open("melon_dump.html", "wt", encoding="utf-8") as f:
    f.write(html)
    print("written to", f.name)

    