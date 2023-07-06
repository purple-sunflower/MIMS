// 재생목록 컨텐츠 하나 (내 보관함에서 )

import "../css/myMusicListContent.css"
import Kistch from '../images/albumCover/kitsch.jpg' // 임시사진

// 노래 제목, 가수, 노래 시간
function MyMusicListContent(props) {
  return (
    <div className="playlist-wrap">
      <div id="img-area">
        <img src={Kistch}/>
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

export default MyMusicListContent;