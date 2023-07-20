// 추천 음악 리스트 > 컨텐츠 하나

// 230713 요소에 마우스 올렸을 때 (호버),
// 투명 검정 배경 + 중간에 흰색 재생목록 아이콘
// css로 도전했으나 js에 함수 이용하는 것이 더 적합할 듯?
// 230714 아예 배경색을 검정으로 바꿈.. (임시방편)

import React from 'react';
import '../css/recMusicBox.css'

function RecMusicBox(props){
    
    const mouseOnPlayBtn = () => {
        document.getElementById("play").style= "display:block;";
    } 

    const mouseOutPlayBtn = () => {
        document.getElementById("play").style= "display:none;";
    } 

    // 230720 호버 시, 플레이 버튼 나오게
    // 두가지 문제
    // 1. 왜 다른 요소에 호버해도, 첫번째 요소에만 재생 버튼이 나오는가?
    // position의 absolute를 사용해서?
    // 2. 재생 버튼과 배경이 함께 투명해지는가? (배경만 투명하게 하고픔)
    
    // 1번 해결:
    // 2번 해결(230720) > play 요소를 탑과 같은 레벨에. 
    // 추가적 문제 ~ #recMusicBox-wrap:hover로 하면 동일 문제 발생
    // 즉, 전체 요소의 배경만 투명해지게 하진 못함.. (난 이걸 원하는디..)



    return(
        <div id='recMusicBox-wrap'onMouseOver={mouseOnPlayBtn} onMouseOut={mouseOutPlayBtn}>
         <div id='top'>
            {props.imgSrc} 
         </div>
         <div id='play'>
                ▶
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