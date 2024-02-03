// 전체화면 (기본 홈 화면)
// 각 장르에 맞는 곡 list 나오도록 하기
// 1st: k-pop, 2nd: new jack swing, 3rd: pop

import "../css/home.css"
import Header from "./header"
import PlayBar from "./playBar";
import RecMusicList from "./recMusicList";
import SearchSample from "./searchSample";
import SpotifyGetPlaylist from "./spotifyGetPlaylist";

import { useState, useEffect } from 'react';

const CLIENT_ID = "3a5c7bcf08c24a9cad7adbcbf594d6ba";
const CLIENT_SECRET = "97d0babb1c5e47b4ab66e70fe9794765";

function Home() {

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
  }, [])
 
  // https://api.spotify.com/v1/search?q=genre%3Avaporwave&type=track
  // https://api.spotify.com/v1/recommendations?seed_genres=pop%2C+k-pop%2C+r%26b
  // async function getRecTrack() {
  //   let recTrackData = await fetch('https://api.spotify.com/v1/recommendations?seed_genres=pop%2C')
  //     .then(response => response.json())
  //     .then(data => {return data.tracks.name});
  //     console.log("실행완료");
  // }

  

  return (
    <div className="home">
      <Header/>
      <RecMusicList/>
      <RecMusicList/>
      <RecMusicList/>
      <PlayBar/>
      {/* <SpotifyGetPlaylist/> */}
      {/* {getRecTrack} */}
    </div>
  );
}

export default Home;