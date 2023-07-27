// 노래 클릭 시, 재생 바

import React from 'react';
import "../css/playBar.css"
import Image from '../images/blackImg.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

function PlayBar() {
  return (
    <div className='playBar-wrap'>
      <div id='songInfoArea'>
            {/* 노래 정보 입니다. */}
            {/* 앨범 커버, 노래 제목, 가수 정보 */}
            <div id='albumArea'>
              <img src={Image} id="albumImg"/>
            </div>
            <div id='titleArea' className='area'>
              여름이 들려
            </div>
            <div id='nameArea' className='area'>
              OH MY GIRL
            </div>
        </div>
        <div id='playBtnArea'>
          {/* 재생 버튼 칸 입니다.   */}
          {/* 재생 버튼, 시간 표시 필요 */}
          <FontAwesomeIcon icon ={faBackward} id='faBackward' className='icon'/>
          <FontAwesomeIcon icon ={faPlay} id='faPlay' className='icon'/>
          <FontAwesomeIcon icon ={faForward} id='faForward' className='icon'/>
        </div>
        <div id='timeArea'>
          1:03 / 3:06
        </div>
        <div id='detailBtnArea'>
          <input type='range' min={0} max={100}/>
          {/* step: 간격, value: 초기 값 */}
          <FontAwesomeIcon icon={faVolumeHigh} className='fa'/>
          <FontAwesomeIcon icon={faShuffle} className='fa'/>
          <FontAwesomeIcon icon={faRepeat} className='fa'/>
          <FontAwesomeIcon icon={faCaretUp} className='fa'/>
            {/* 음량 조절 버튼, 셔플 버튼, 반복 버튼, 펼치기 버튼 */}
        </div>
    </div>
  );
}

export default PlayBar;