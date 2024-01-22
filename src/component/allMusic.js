// 음악 전체보기 창
// 230712 12개씩 보이고 다음 창으로 넘어가는 pagination 필요
// 231228 5개씩 보이고 random 버튼 누를 때마다 다른 노래들 나오게 기능 수정?!

//240101 
// 현 상황: random 버튼 누를 때마다, 노래가 랜덤으로 나옴 > 구현 완
// 구현해볼까?: 랜덤으로 나온 노래를 눌렀을 때, 노래가 나오면 좋겠음

import React from 'react';
import '../css/allMusic.css'
import Header from './header';

import {Container, InputGroup, FormControl, Button, Row, Card, Pagination} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import SearchPagination from './searchPagination';

function AllMusic() {

  const CLIENT_ID = "3a5c7bcf08c24a9cad7adbcbf594d6ba";
  const CLIENT_SECRET = "97d0babb1c5e47b4ab66e70fe9794765";

  const [accessToken, setAccessToken] = useState("");
  const [tracks, setTracks] = useState([]);
  //추가
  const [songName, setSongName] = useState("");
  const [songImg, setSongImg] = useState("");

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

      console.log("useEffect입니다.");
  }, [])

  // 무작위 트랙 검색어 얻기
  function getRandomSearch() {
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

  async function getTracks() {
    // Get request using search to get the Tracks ID
    var searchParameters={
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + accessToken
      }
    }
     
    //track ID 얻기 (1개는 가져오기 성공!) > 여러개를 보여주는 방법은?
    var tracksID = await fetch('https://api.spotify.com/v1/search?q=' + getRandomSearch() + '&type=track', searchParameters)
      .then(response => response.json())
      .then(data => {return data.tracks.items[0].id});

    console.log("Tracks ID is " + tracksID);

    // Get request with Artist ID grav all the albums from that artist
    var returnedTracks = await fetch('https://api.spotify.com/v1/tracks/' + tracksID , searchParameters)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setTracks(Object.entries(data.album)); // 231228 tracks은 배열. data는 객체 타입.. => 저장이 안되고 계속 빈 배열 됨..
        // 이건 임시방편 ㅠㅠ (코드 재 사용 불가!)
        setSongName(data.album.name);
        setSongImg(data.album.images[0].url);
        // tracks.push(data)
        // console.log(data.album.name) // 노래 제목
        // console.log(data.artists[0].name) // 가수 이름
        // console.log(data.album.images[0].url) // 노래 이미지
      });

      // console.log(tracks)
      // console.log(tracks[0].name) // 231228 왜.. 빈  배열일까?
      // console.log(tracks[0].images[0].url) // 노래 이미지
    // Display those albums to the user
  }

  // pagination

  const [searchPerPage, setSearchPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(1)

  const currentSearchList=(searchList)=>{
      const startIndex = (currentPage-1)*searchPerPage
      const lastIndex = startIndex+searchPerPage
      const slicedList = searchList.slice(startIndex, lastIndex)
      return slicedList
  }

  return(
    <div className="searchTracks">
      <Header/>
      {/* Check */}
      <Button onClick={getTracks}>
        {/* get Track
        CORS 오류 해결 */}
        오늘의 노래 추천 받기!
      </Button>    

      {/* Result */}
      <Container>
        <Row className='mx-1 row row-cols-5'>
          {/* {currentSearchList(tracks).map( (track) => {
            // console.log(track);
            return (
              <Card>
                <Card.Img src={track.images[0].url}/>
                <Card.Body>
                  <Card.Title>{track.name}</Card.Title>
                </Card.Body>
              </Card>
            )
          })} */}
          <Card>
                <Card.Img src={songImg}/>
                <Card.Body>
                  <Card.Title>{songName}</Card.Title>
                </Card.Body>
              </Card>
        </Row>
      </Container>
      <div>
        {/* <SearchPagination currentPage={currentPage} searchPerPage={searchPerPage} total={tracks.length} setCurrentPage={setCurrentPage}/> */}
      </div>
    </div>
  );
}

export default AllMusic;