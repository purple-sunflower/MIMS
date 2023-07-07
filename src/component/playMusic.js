//  음악 클릭 시, 나오는 재생 화면

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";

import '../css/playMusic.css'
import Header from './header';
import Spicy from '../images/albumCover/spicy.jpg'
import { useState } from "react";
import PlaylistContent from "./playlistBox";
import { Link } from "react-router-dom";
import PlayMusicLyric from "./playMusicLyric";
import PlayMusicPlaylist from "./playMusicPlaylist";

function PlayMusic() {

    const clickBtn = () => {
        alert("You click your button!");
    } // 버튼 작동 확인   

    const [isPlay, setPlay] = useState(true);
    const togglePlayBtn = () => {
        setPlay(!isPlay); // playBtn
    }

    const clickLyricBtn = () => { // "가사" 버튼 클릭 시 > 재생목록 항목 안보이게
        document.getElementById('playlistArea').style = "display:none";
        document.getElementById('lyricArea').style = "display:block";
        document.getElementById('lyricBtn').style = "border-bottom: 1px solid black";
        document.getElementById('playlistBtn').style = "border-bottom: none";
    }

    const clickPlaylistBtn = () => { // "재생목록" 버튼 클릭 시 > 가사 항목 안보이게
        document.getElementById('lyricArea').style = "display:none";
        document.getElementById('playlistArea').style = "display:block";
        document.getElementById('playlistBtn').style = "border-bottom: 1px solid black";
        document.getElementById('lyricBtn').style = "border-bottom: none";
    }

    // 230701 토글 방식으로 가능하지 않을까..? 좀 더 나은 메서드 생각해봐!
    // hasclass인가 있는데... 

    return(
        <div id='playMusic-wrap'>
            <Header/>
            <div id='playContents'>
                <img src={Spicy}/>
                <span className="content" id ='title'>제목: Spicy </span>
                <span className="content" id ='name'>가수: aespa</span> 
                <span className="content" id="playBar">0:58 ───♡───────── 3:47</span>
                <span className="content" id='btnCollection'>
                    <FontAwesomeIcon icon ={faBackward} onClick={clickBtn}/>
                    <div onClick={togglePlayBtn}>
                        {isPlay ? <FontAwesomeIcon icon ={faPlay}/> : <FontAwesomeIcon icon ={faPause}/>}
                    </div>
                    <FontAwesomeIcon icon ={faForward} onClick={clickBtn}/>
                </span>
            </div>
            <div id="lyricAndPlaylistArea">
                <div id="lyricPlaylistBtn"> 
                {/* 버튼들 fix ~ 반응형으로*/}
                    <ul>
                        <li id="lyricBtn" onClick={clickLyricBtn}>가사</li>
                        <li id="playlistBtn" onClick={clickPlaylistBtn} >재생목록</li>
                    </ul>
                </div>
                <div id="contents-area">
                    <div id="lyricArea">
                        <PlayMusicLyric/>
                    </div>
                    <div id="playlistArea">
                        <PlayMusicPlaylist/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayMusic;