// reacthook + function component 사용

import './App.css';
import { useEffect, useState } from 'react';
import Header from "./componenent/header.js"
import MusicList from "./componenent/musicList.js"

function App() {
  return (
    <div className="App">
      <Header/>
      <MusicList/>
    </div>
  );
}

export default App;
