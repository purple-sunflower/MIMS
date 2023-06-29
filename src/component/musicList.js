import React from 'react';
import {Link} from 'react-router-dom';
import '../css/musicList.css'
import MusicBox from './musicBox.js'
import Kistch from '../images/albumCover/kitsch.jpg'
import Spicy from '../images/albumCover/spicy.jpg'
import HelloFuture from '../images/albumCover/hello_future.jpg'
import HypeBoy from '../images/albumCover/hype_boy.jpg'

// 230627
// import해서 이미지 넣는거 너무 많음! 
// mySQL로 저장하고 끌어오는 것이 필요함을 또 느낌!


function musicList(){
    return(
        <div id='musicList-wrap'>
            <h1>상큼한 K-POP, 들어 볼래?</h1>
            <MusicBox imgSrc = {<img src={Kistch}/>} // 되긴 하지만... 더 좋은 방법은?
                    title="Kitsch" 
                    name="IVE" 
                    genre="K-POP"/>
            <Link to="/playMusic">
                <MusicBox imgSrc = {<img src={Spicy}/>} 
                        title="Spicy" 
                        name="AESPA" 
                        genre="K-POP"/>
            </Link> 
            {/* 230629 링크 연결 방법이 이것 뿐...? 데이터에 맞게 재생 화면을 구현해야함! */}
            <MusicBox imgSrc = {<img src={HelloFuture}/>} 
                    title="Hello Future" 
                    name="NCT DREAM" 
                    genre="K-POP"/>
            <MusicBox imgSrc = {<img src={HypeBoy}/>} 
                    title="Hype boy" 
                    name="New Jeans" 
                    genre="K-POP"/>
        </div>
    );
}

export default musicList;