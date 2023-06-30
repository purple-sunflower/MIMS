import React from 'react';
import '../css/allMusic.css'
import Header from './header';
import MusicList from './musicList';

function AllMusic(){
    return(
        <div id='allMusic-wrap'>
         <Header/>
         음악 전체보기 창
         <MusicList/>
        </div>
    );
}

export default AllMusic;