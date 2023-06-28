// reacthook + function component 사용

import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./component/home";
import AllMusic from "./component/allMusic";
import MyMusic from "./component/myMusic";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allMusic" element={<AllMusic/>}/>
        <Route path="/myMusic" element={<MyMusic/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
