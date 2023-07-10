// 추천 음악 리스트 > 컨텐츠 하나

import React from 'react';
import '../css/recMusicBox.css'

function RecMusicBox(props){
    return(
        <div id='recMusicBox-wrap'>
         <div id='top'>
            {props.imgSrc} 
         </div>
         <div id='bottom'>
            <span>{props.title}{/* 제목 */}</span>
            <span>{props.name}{/* 가수 */}</span>
         </div>
         {/* 장르: {props.genre} <br/> */}
        </div>
    );
}

export default RecMusicBox;