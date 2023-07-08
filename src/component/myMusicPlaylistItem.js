// 한 재생목록 모음

import "../css/myMusicPlaylistItem.css"
import Kistch from '../images/albumCover/kitsch.jpg' // 임시 1
import HypeBoy from '../images/albumCover/hype_boy.jpg' // 임시 2
import Spicy from '../images/albumCover/spicy.jpg' // 임시 3
import HelloFuture from '../images/albumCover/hello_future.jpg' // 임시 4

// 노래 제목, 가수, 노래 시간
function MyMusicPlaylistItem(props) {
  return (
    <div className="myMusicPlaylistItem-wrap">
      <div id="img-area">
        <img src={Kistch}/>
        <img src={HypeBoy}/>
        <img src={Spicy}/>
        <img src={HelloFuture}/>
      </div>
    <div id="playlist-title">
        <h2>{props.playlistTitle}</h2>
    </div>
    </div>
  );
}

export default  MyMusicPlaylistItem;