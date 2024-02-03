// 추천 음악 리스트 (4개가 한 묶음)

import React from 'react';
import {Link} from 'react-router-dom';
import "../css/recMusicList.css"
import RecMusicBox from './recMusicBox.js'
import Kistch from '../images/albumCover/kitsch.jpg'
import Spicy from '../images/albumCover/spicy.jpg'
import HelloFuture from '../images/albumCover/hello_future.jpg'
import HypeBoy from '../images/albumCover/hype_boy.jpg'

import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

// 230627
// import해서 이미지 넣는거 너무 많음! 
// mySQL로 저장하고 끌어오는 것이 필요함을 또 느낌!

const CLIENT_ID = "3a5c7bcf08c24a9cad7adbcbf594d6ba";
const CLIENT_SECRET = "97d0babb1c5e47b4ab66e70fe9794765";

function RecMusicList(){
    // 240203 장르별 가져오기는 '아티스트'만 가능 > 아티스트 장르 가져와서, 아티스트 트랙 가져오기?
    // 1. 각 리스트마다 장르 임의 선정
    // 2. 특정 장르에 해당하는 artist 추출 (상위 5개)
    // 3. artist 별 앨범 선정 (idx = 0, 1, 2 중 랜덤)
    // 4. 앨범 별 트랙 선정 (idx=2 트랙) 

    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
    // API Access Token
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(result => result.json())
      .then(data => setAccessToken(data.access_token))

      getGenreList();
  }, [])    

  // getRandomArtist
  function getRandomID() {
        // A list of all characters that can be chosen.
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        
        // Gets a random character from the characters string.
        const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
        let randomSearch = '';
      
        // Places the wildcard character at the beginning, or both beginning and end, randomly.
        switch (Math.round(Math.random())) {
          case 0:
            randomSearch = randomCharacter + '%25';
            break;
          case 1:
            randomSearch = '%25' + randomCharacter + '%25';
            break;
        }
      
        return randomSearch;
      }

   // get genre from artist
   async function getGenreList() {
        var searchParameters={
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization' : 'Bearer ' + accessToken
                }
              }
        
        // random으로 artistID 추출
        var getArtistID = await fetch('https://api.spotify.com/v1/search?q=' + getRandomID() + '&type=artist', searchParameters)
        .then(response => response.json())
        .then(data => {return data.artists.items[0]});

        // artist 정보에서 얻는 genre
        var getGenre = getArtistID.genres[0];
       
        // pop, rock, jazz
        if(getGenre != undefined) {
                if(getGenre.includes("pop")) {
                        console.log(getGenre + " is a pop");
                } else if(getGenre.includes("rock")) {
                        console.log(getGenre + " is a rock");
                } else if(getGenre.includes("jazz")) {
                        console.log(getGenre + " is a jazz");
                } else{
                        console.log(getGenre);
                }
        }

        // 조건문으로 다 하기엔 벅참... 장르만 모여있는 거 없나... /
        

   }

    return(
        <div id='recMusicList-wrap'>
        <Button onClick={getGenreList}>테스트</Button>
            <h1>상큼한 K-POP, 들어 볼래?</h1>
            <RecMusicBox imgSrc = {<img className='img' src={Kistch}/>} // 되긴 하지만... 더 좋은 방법은?
                    title="Kitsch" 
                    name="IVE" 
                    genre="K-POP"/>
            <Link to="/playMusic">
                <RecMusicBox imgSrc = {<img className='img' src={Spicy}/>} 
                        title="Spicy" 
                        name="AESPA" 
                        genre="K-POP"/>
            </Link> 
            {/* 230629 링크 연결 방법이 이것 뿐...? 데이터에 맞게 재생 화면을 구현해야함! */}
            <RecMusicBox imgSrc = {<img className='img' src={HelloFuture}/>} 
                    title="Hello Future" 
                    name="NCT DREAM" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={HypeBoy}/>} 
                    title="Hype boy" 
                    name="New Jeans" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={Kistch}/>} // 되긴 하지만... 더 좋은 방법은?
                    title="Kitsch" 
                    name="IVE" 
                    genre="K-POP"/>
            <Link to="/playMusic">
                <RecMusicBox imgSrc = {<img className='img' src={Spicy}/>} 
                        title="Spicy" 
                        name="AESPA" 
                        genre="K-POP"/>
            </Link> 
        </div>
    );
}

export default RecMusicList;