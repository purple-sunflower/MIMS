// 추천 음악 리스트 > 컨텐츠 하나

import React from 'react';
import '../css/recMusicBox.css'

function RecMusicBox(props){
    return(
        <div id='musicBox-wrap'>
         {props.imgSrc} <br/>
         제목: {props.title} <br/>
         가수: {props.name} <br/>
         장르: {props.genre} <br/>
        </div>
    );
}

export default RecMusicBox;