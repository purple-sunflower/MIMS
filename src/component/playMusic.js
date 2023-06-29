import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";

import '../css/playMusic.css'
import Header from './header';
import Spicy from '../images/albumCover/spicy.jpg'
import { useState } from "react";

function PlayMusic() {

    const clickBtn = () => {
        alert("You click your button!");
    } // 버튼 작동 확인   

    const [isPlay, setPlay] = useState(true);
    const toggleBtn = () => {
        setPlay(!isPlay); // playBtn
    }

    return(
        <div id='playMusic-wrap'>
            <Header/>
            <div id='playContents'>
                <img src={Spicy}/>
                <span className="content" id ='title'>제목: Spicy </span>
                <span className="content" id ='name'>가수: aespa</span> 
                <span className="content" id='btnCollection'>
                    <FontAwesomeIcon icon ={faBackward} onClick={clickBtn}/>
                    <div onClick={toggleBtn}>
                        {isPlay ? <FontAwesomeIcon icon ={faPlay}/> : <FontAwesomeIcon icon ={faPause}/>}
                    </div>
                    <FontAwesomeIcon icon ={faForward} onClick={clickBtn}/>
                </span>
            </div>
        </div>
    );
}

export default PlayMusic;