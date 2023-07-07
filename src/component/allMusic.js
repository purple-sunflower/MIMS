import React from 'react';
import '../css/allMusic.css'
import Header from './header';
import RecMusicList from './recMusicList';

function AllMusic(){
    return(
        <div id='allMusic-wrap'>
         <Header/>
         음악 전체보기 창
         <RecMusicList/>
        </div>
    );
}

export default AllMusic;