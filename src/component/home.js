// 전체화면 (기본 홈 화면)

import "../css/home.css"
import Header from "./header"
import PlayBar from "./playBar";
import RecMusicList from "./recMusicList";
import SearchSample from "./searchSample";
import SpotifyGetPlaylist from "./spotifyGetPlaylist";

function Home() {
  return (
    <div className="home">
      <Header/>
      <RecMusicList/>
      <RecMusicList/>
      <RecMusicList/>
      <PlayBar/>
      <SpotifyGetPlaylist/>
    </div>
  );
}

export default Home;