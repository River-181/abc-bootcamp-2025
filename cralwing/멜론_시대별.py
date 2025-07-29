#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import json
import re
from bs4 import BeautifulSoup
from datetime import datetime

def extract_melon_chart_data(html_file_path):
    """
    멜론 차트 HTML 파일에서 곡 정보를 추출하여 JSON으로 변환
    
    Args:
        html_file_path (str): HTML 파일 경로
        
    Returns:
        list: 곡 정보가 담긴 리스트
    """
    
    # HTML 파일 읽기
    with open(html_file_path, 'r', encoding='utf-8') as file:
        html_content = file.read()
    
    # BeautifulSoup으로 파싱
    soup = BeautifulSoup(html_content, 'html.parser')
    
    # 곡 리스트 초기화
    songs_data = []
    
    # 테이블에서 곡 정보 추출
    song_rows = soup.find_all('tr', class_='lst50')
    
    for row in song_rows:
        try:
            song_info = {}
            
            # 순위 추출
            rank_span = row.find('span', class_='rank')
            if rank_span:
                rank_text = rank_span.get_text(strip=True)
                song_info['rank'] = int(rank_text) if rank_text.isdigit() else rank_text
            
            # 곡명과 곡 ID 추출
            song_link = row.find('a', href=re.compile(r"melon\.play\.playSong"))
            if song_link:
                song_info['song_name'] = song_link.get('title', '').strip()
                
                # onclick에서 곡 ID 추출
                onclick_attr = song_link.get('onclick', '')
                song_id_match = re.search(r"playSong\('[\d]+','(\d+)'\)", onclick_attr)
                if song_id_match:
                    song_info['song_id'] = song_id_match.group(1)
            
            # 아티스트명과 아티스트 ID 추출
            artist_links = row.find_all('a', href=re.compile(r"melon\.link\.goArtistDetail"))
            if artist_links:
                artist_names = []
                artist_ids = []
                
                for artist_link in artist_links:
                    artist_name = artist_link.get_text(strip=True)
                    if artist_name and artist_name not in artist_names:  # 중복 제거
                        artist_names.append(artist_name)
                    
                    # href에서 아티스트 ID 추출
                    href_attr = artist_link.get('href', '')
                    artist_id_match = re.search(r"goArtistDetail\('(\d+)'\)", href_attr)
                    if artist_id_match and artist_id_match.group(1) not in artist_ids:  # 중복 제거
                        artist_ids.append(artist_id_match.group(1))
                
                song_info['artist_name'] = ', '.join(artist_names) if artist_names else ''
                song_info['artist_id'] = ','.join(artist_ids) if artist_ids else ''
            
            # 앨범명과 앨범 ID 추출
            album_link = row.find('a', href=re.compile(r"melon\.link\.goAlbumDetail"))
            if album_link:
                song_info['album_name'] = album_link.get_text(strip=True)
                
                # href에서 앨범 ID 추출
                href_attr = album_link.get('href', '')
                album_id_match = re.search(r"goAlbumDetail\('(\d+)'\)", href_attr)
                if album_id_match:
                    song_info['album_id'] = album_id_match.group(1)
            
            # 앨범 이미지 URL 추출
            album_img = row.find('img')
            if album_img:
                img_src = album_img.get('src', '')
                if img_src:
                    song_info['album_image'] = img_src
            
            # 데이터가 유효한 경우에만 추가
            if song_info.get('song_name') and song_info.get('artist_name'):
                songs_data.append(song_info)
                
        except Exception as e:
            print(f"행 파싱 중 오류 발생: {e}")
            continue
    
    return songs_data

def save_to_json(data, output_file_path):
    """
    데이터를 JSON 파일로 저장
    
    Args:
        data (list): 저장할 데이터
        output_file_path (str): 출력 파일 경로
    """
    try:
        with open(output_file_path, 'w', encoding='utf-8') as file:
            json.dump(data, file, ensure_ascii=False, indent=4)
        print(f"✅ 데이터가 성공적으로 저장되었습니다: {output_file_path}")
        print(f"📊 총 {len(data)}곡의 정보가 저장되었습니다.")
    except Exception as e:
        print(f"❌ JSON 파일 저장 중 오류 발생: {e}")

def main():
    """
    메인 실행 함수
    """
    print("🎵 멜론 차트 데이터 추출 시작...")
    
    # 파일 경로 설정
    html_file_path = '../melon_dump.html'  # crawling 폴더 기준 상위 폴더의 melon_dump.html
    output_file_path = 'melon_kpop_2019.json'
    
    try:
        # 데이터 추출
        print("📄 HTML 파일 파싱 중...")
        songs_data = extract_melon_chart_data(html_file_path)
        
        if not songs_data:
            print("⚠️ 추출된 데이터가 없습니다. HTML 파일을 확인해주세요.")
            return
        
        # JSON 파일로 저장
        print("💾 JSON 파일로 저장 중...")
        save_to_json(songs_data, output_file_path)
        
        # 결과 미리보기
        print("\n📋 추출된 데이터 미리보기:")
        for i, song in enumerate(songs_data[:3]):  # 상위 3곡만 출력
            print(f"{i+1}. {song.get('rank', 'N/A')}위 - {song.get('song_name', 'N/A')} by {song.get('artist_name', 'N/A')}")
        
        if len(songs_data) > 3:
            print(f"... 외 {len(songs_data) - 3}곡")
            
    except FileNotFoundError:
        print(f"❌ HTML 파일을 찾을 수 없습니다: {html_file_path}")
        print("파일 경로를 확인해주세요.")
    except Exception as e:
        print(f"❌ 프로그램 실행 중 오류 발생: {e}")

if __name__ == "__main__":
    main()
