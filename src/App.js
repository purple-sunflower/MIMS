// reacthook + function component 사용

import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./component/home";
import AllMusic from "./component/allMusic";
import MyMusic from "./component/myMusic";
import PlayMusic from "./component/playMusic";
import StoredPlaylist from "./component/storedPlaylist";
import ScrollToTop from "./component/scrollToTop";
import SearchMusic from './component/searchMusic';
import SearchSample from "./component/searchSample";
import Result from "./component/result"
import SearchAlbum from "./component/searchAlbum"
import PlayTrackTest from './component/playTrackTest';


function App() {
  return (
    <BrowserRouter>
    {/* 스크롤 맨 위로 올리기 위한 컴포넌트 */}
    <ScrollToTop/> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MIMS" element={<Home />} />
        <Route path="/allMusic" element={<AllMusic/>}/>
        <Route path="/myMusic" element={<MyMusic/>}/>
        <Route path='/playMusic' element={<PlayMusic/>}/>
        <Route path='/storedPlaylist' element={<StoredPlaylist/>}/>
        <Route path='/searchMusic' element={<SearchMusic/>}/>
        <Route path='/searchSample' element={<SearchSample/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/searchAlbum' element={<SearchAlbum/>}/>
        <Route path='/playTrackTest' element={<PlayTrackTest/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import "./api/lastfm_api";
// import "./api/lastfm_api_cache";
// import "./api/lastfm_api_md5";

// /* Create a cache object */
// var cache = new LastFMCache();

// /* Create a LastFM object */
// var lastfm = new LastFM({
//   apiKey    : 'b79403edb1c5830470fd6b7d00a2f950',
//   apiSecret : 'd2894303d08206f43647c642d5267f93',
//   cache     : cache
// });

// /* Load some artist info. */
// lastfm.artist.getInfo({artist: 'The xx'}, {success: function(data){
//   /* Use data. */
// }, error: function(code, message){
//   /* Show error message. */
// }});