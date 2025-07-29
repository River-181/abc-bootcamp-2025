import time
import requests
import json

def melon_search(query: str) -> list:
    # search_url에서 하드코딩된 파라미터 제거 (params 딕셔너리로 관리)
    search_url = "https://www.melon.com/search/keyword/index.json"

    # 'jscallback' 파라미터를 제거하여 순수 JSON 응답을 받도록 합니다.
    # 'query' 파라미터는 함수 인자 'query'를 사용하도록 수정합니다.
    params = {
        # "jscallback": "jQuery19104406029060066261_1753756079350", # 이 줄을 제거
        "query": query, # 함수 인자로 받은 query 사용
        "_": int(time.time() * 1000) # 밀리초 단위 타임스탬프 (일반적으로 사용됨)
    }

    headers = {
        "User-Agent" : "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36"
    }

    try:
        # requests.get()에 params와 headers를 전달
        res = requests.get(search_url, params=params, headers=headers)
        res.raise_for_status() # HTTP 오류 (4xx, 5xx) 발생 시 예외 발생

        # 'jscallback'을 제거했으므로, 이제 응답은 순수 JSON일 가능성이 높습니다.
        # 따라서 res.json()을 직접 사용합니다.
        data = res.json()
        return data
    except requests.exceptions.RequestException as e:
        print(f"요청 오류 발생: {e}")
    except json.JSONDecodeError as e:
        print(f"JSON 디코딩 오류 발생: {e}")
        print(f"응답 텍스트 (일부): {res.text[:500]}...") # 디버깅을 위해 응답 텍스트 일부 출력
    return []

# 현재 소스파일이 파이썬 실행의 진입점일 때
if __name__ == "__main__":
    print("--- 'idol' 검색 결과 ---")
    print(melon_search("idol"))
    print("\n--- 'BTS' 검색 결과 ---")
    print(melon_search("BTS"))
