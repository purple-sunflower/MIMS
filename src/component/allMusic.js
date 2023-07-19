// 음악 전체보기 창
// 230712 12개씩 보이고 다음 창으로 넘어가는 pagination 필요
import React from 'react';
import '../css/allMusic.css'
import Header from './header';
import RecMusicBox from './recMusicBox';
import Kistch from '../images/albumCover/kitsch.jpg'
import Spicy from '../images/albumCover/spicy.jpg'
import HelloFuture from '../images/albumCover/hello_future.jpg'
import HypeBoy from '../images/albumCover/hype_boy.jpg'

function AllMusic(){


    return(
        <div id='allMusic-wrap'>
         <Header/>
         <div id='musicList'>
            <RecMusicBox imgSrc = {<img className='img' src={Kistch}/>} // 되긴 하지만... 더 좋은 방법은?
                    title="Kitsch" 
                    name="IVE" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={Spicy}/>} 
                    title="Spicy" 
                    name="AESPA" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={HelloFuture}/>} 
                    title="Hello Future" 
                    name="NCT DREAM" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={HypeBoy}/>} 
                    title="Hype boy" 
                    name="New Jeans" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={Kistch}/>} // 되긴 하지만... 더 좋은 방법은?
                    title="Kitsch" 
                    name="IVE" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={Spicy}/>} 
                    title="Spicy" 
                    name="AESPA" 
                    genre="K-POP"/> 
            <RecMusicBox imgSrc = {<img className='img' src={Kistch}/>} // 되긴 하지만... 더 좋은 방법은?
                    title="Kitsch" 
                    name="IVE" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={Spicy}/>} 
                    title="Spicy" 
                    name="AESPA" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={HelloFuture}/>} 
                    title="Hello Future" 
                    name="NCT DREAM" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={HypeBoy}/>} 
                    title="Hype boy" 
                    name="New Jeans" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={Kistch}/>} // 되긴 하지만... 더 좋은 방법은?
                    title="Kitsch" 
                    name="IVE" 
                    genre="K-POP"/>
            <RecMusicBox imgSrc = {<img className='img' src={Spicy}/>} 
                    title="Spicy" 
                    name="AESPA" 
                    genre="K-POP"/> 
            
         </div>
        </div>
    );
}

export default AllMusic;