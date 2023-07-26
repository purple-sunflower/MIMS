// 노래 클릭 시, 재생 바

import React from 'react';
import "../css/playBar.css"


function PlayBar() {
  return (
    <div className='playBar-wrap'>
        <div id='playBtnArea'>
            재생 버튼 칸 입니다.   
        </div>
        <div id='songInfoArea'>
            노래 정보 입니다.
        </div>
    </div>
  );
}

export default PlayBar;