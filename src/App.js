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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
