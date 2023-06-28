// 전체화면

import "../css/home.css"
import Header from "./header"
import MusicList from "./musicList"

function Home() {
  return (
    <div className="home">
      <Header/>
      <MusicList/>
      <MusicList/>
    </div>
  );
}

export default Home;