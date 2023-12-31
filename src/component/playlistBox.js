// 재생목록 컨텐츠 하나

import "../css/playlistBox.css"
import Kistch from '../images/albumCover/kitsch.jpg' // 임시사진

// 노래 제목, 가수, 노래 시간
function PlaylistBox(props) {
  return (
    <div className="playlistBox-wrap">
      <div id="img-area">
        <img src={Kistch}/>
      </div>
      <div id="left-area">
        <span>{props.title}</span>
        <span>{props.name}</span>
      </div>
      <div id="right-area">
        <span>{props.time}</span>
      </div>
    </div>
  );
}

export default PlaylistBox;