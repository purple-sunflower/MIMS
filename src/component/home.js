// 전체화면 (기본 홈 화면)

import "../css/home.css"
import Header from "./header"
import RecMusicList from "./recMusicList";

function Home() {
  return (
    <div className="home">
      <Header/>
      <RecMusicList/>
      <RecMusicList/>
      <RecMusicList/>
    </div>
  );
}

export default Home;