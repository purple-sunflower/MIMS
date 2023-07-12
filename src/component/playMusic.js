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
import { Link } from "react-router-dom";
import PlayMusicLyric from "./playMusicLyric";
import PlayMusicPlaylist from "./playMusicPlaylist";
import PlayMusicComment from "./playMusicComment";

function PlayMusic() {

    const clickBtn = () => {
        alert("You click your button!");
    } // 버튼 작동 확인   

    const [isPlay, setPlay] = useState(true);
    const togglePlayBtn = () => {
        setPlay(!isPlay); // playBtn
    }

    // 230710 처음에 나올 때, 가사 부분에 재생목록도 같이 나옴
    // 처음에 가사부분에 "가사"만 나오게 하는 법?
    // componentDidMount???

    // 230712 해결! > getElementById의 style속성을 이용해
    // "display:none"; 직접 지정!
    // 리액트 식으로는 어떻게 해결? 

    // 230712
    // document.getElementById('playlistArea').style = "display:none";
    // 처음엔 문제 없었는데 2번째 시도 이후로 부터 안됨
    // css에 display:none;해서 해결
    // 리액트 식으로는 어떻게 해결? 
    // > 음,.. 리액트식이라는게 따로 있나?
    // 그냥 css에 넣어서 해결했으니 고민하지 않아도 될 듯?

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
                <img src={Spicy} id="img"/>
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
                        {/* 230712 재생목록 리스트 밑에 공간 조금 만들고픔. 어케함? */}
                        <PlayMusicPlaylist/>
                    </div>
                </div>    
            </div>
            <div id="commentArea"> {/* 댓글창 */}
                <PlayMusicComment/>
            </div>
        </div>
    );
}

export default PlayMusic;