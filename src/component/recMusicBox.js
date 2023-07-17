// 추천 음악 리스트 > 컨텐츠 하나

// 230713 요소에 마우스 올렸을 때 (호버),
// 투명 검정 배경 + 중간에 흰색 재생목록 아이콘
// css로 도전했으나 js에 함수 이용하는 것이 더 적합할 듯?
// 230714 아예 배경색을 검정으로 바꿈.. (임시방편)

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