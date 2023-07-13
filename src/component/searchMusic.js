// 검색화면 (검색 버튼 클릭 시, 결과 창)

import "../css/searchMusic.css"
import Header from "./header";
import SearchMusicBox from "./searchMusicBox";

function SearchMusic() {
  return (
    <div className="searchMusic">
      <Header/>
      <div id="search-contents">
      <SearchMusicBox title="Kistch" singer="IVE" album="I've IVE" time="3:50"/>
      <SearchMusicBox title="Queencard" singer="G-IDLE" album="I feel" time="2:50"/>
      <SearchMusicBox title="Hello Future" singer="NCT DREAM" album="Hello Future" time="3:17"/>
      <SearchMusicBox title="Smiley" singer="Yena" album="ˣ‿ˣ (SMiLEY)" time="3:24"/>
      <SearchMusicBox title="Red Flavor" singer="Red Velvet" album="The Red Summer" time="3:12"/>
      <SearchMusicBox title="Kistch" singer="IVE" album="I've IVE" time="3:50"/>
      <SearchMusicBox title="Queencard" singer="G-IDLE" album="I feel" time="2:50"/>
      <SearchMusicBox title="Hello Future" singer="NCT DREAM" album="Hello Future" time="3:17"/>
      <SearchMusicBox title="Smiley" singer="Yena" album="ˣ‿ˣ (SMiLEY)" time="3:24"/>
      <SearchMusicBox title="Red Flavor" singer="Red Velvet" album="The Red Summer" time="3:12"/>
      </div>
    </div>
  );
}

export default SearchMusic;