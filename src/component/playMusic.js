import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";

import '../css/playMusic.css'
import { useState } from "react";
import Header from './header';
import Spicy from '../images/albumCover/spicy.jpg'

function playMusic() {

    return(
        <div id='playMusic-wrap'>
            <Header/>
            <div id='playContents'>
                <img src={Spicy}/>
                <span className="content" id ='title'>제목: Spicy </span>
                <span className="content" id ='name'>가수: aespa</span> 
                <span className="content" id='btnCollection'>
                    <FontAwesomeIcon icon ={faBackward}/>
                    <FontAwesomeIcon icon ={faPlay}/>
                    <FontAwesomeIcon icon ={faForward}/>
                </span>
            </div>
        </div>
    );
}

export default playMusic;