// 검색 결과 요소 하나
// 왼: 앨범 사진
// 오 ~ 위: 노래 제목, 아래: 가수 이름, 앨범, 시간

import "../css/searchMusicBox.css"
import Kistch from "../images/albumCover/kitsch.jpg"

function SearchMusicBox(props) {
  return (
    <div className="searchMusicBox">
      <div className="search-left" id="img-area"> 
        <img src={Kistch}/>
      </div>
      <div className="search-right">
        <div id="title-area">
            {props.title}
        </div>
        <div id="detail-area">
            {props.singer}  |  {props.album}  |  {props.time}
        </div>
      </div>
    </div>
  );
}

export default SearchMusicBox;