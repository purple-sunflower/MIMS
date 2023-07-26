// 재생목록 컨텐츠 하나 (내 보관함에서)
// 기존 playlistBox에서 "앨범" 항목 추가

import "../css/playlistMusicBox.css"
import Kistch from '../images/albumCover/kitsch.jpg' // 임시사진

// 노래 제목, 가수, 앨범, 노래 시간
function PlaylistMusicBox(props) {
  return (
    <div className="playlistMusicBox-wrap">
      <div id="img-area">
        {props.img}
      </div>
      <div id="left-area">
        <span>{props.title}</span>
        <span>{props.name}</span>
        <span>{props.album}</span>
      </div>
      <div id="right-area">
        <span>{props.time}</span>
      </div>
    </div>
  );
}

export default PlaylistMusicBox;