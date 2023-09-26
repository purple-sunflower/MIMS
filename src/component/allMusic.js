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

import {useEffect, useState} from 'react';
import axios from 'axios';
import black from "../images/blackImg.png"

function AllMusic(){

        // 230921 연습
        // const CLIENT_ID = "3a5c7bcf08c24a9cad7adbcbf594d6ba"
        // const REDIRECT_URI = "http://localhost:3000"
        // const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
        // const RESPONSE_TYPE = "token"

        // const [artists, setArtists] = useState([])
        // const getArtists = async (e) => {
        //         e.preventDefault()
        //         const {data} = await axios.get(`https://api.spotify.com/v1/artists/4aawyAB9vmqN3uQ7FjRGTy`)
        //         const id = Math.floor(Math.random());
        //         setArtists(data.artists.items)
        //     }
            
        //     const renderArtists = () => {
        //         return artists.map(artist => (
        //             <div key={artist.id}>
        //                 <RecMusicBox imgSrc ={artist.images.length ? <img width={"60px"} height={"60px"} src={artist.images[0].url} alt=""/> 
        //                 : <img width={"60px"} height={"60px"} src={black} alt=""/>}  title="제목" name = {artist.name} genre = {artist.genres[0]}/>
        //             </div>
        //         ))
        //     }

        const accessToken = "3a5c7bcf08c24a9cad7adbcbf594d6ba"; //Replace with your Access Token obtained from Spotify API
        const [songData, setSongData] = useState(null);

        useEffect(() => {
        fetch(
        `https://api.spotify.com/v1/me/playlists`,
        {
                headers: {
                Authorization: `Bearer ${accessToken}`,
                },
        }
        )
        .then((response) => response.json())
        .then((data) => setSongData(data.playlists));
        }, []);


        // 무작위 검색어 얻기
        function getRandomSearch() {
                // A list of all characters that can be chosen.
                const characters = 'abcdefghijklmnopqrstuvwxyz';
                
                // Gets a random character from the characters string.
                const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));
                let randomSearch = '';
              
                // Places the wildcard character at the beginning, or both beginning and end, randomly.
                switch (Math.round(Math.random())) {
                  case 0:
                    randomSearch = randomCharacter + '%';
                    break;
                  case 1:
                    randomSearch = '%' + randomCharacter + '%';
                    break;
                }
              
                return randomSearch;
              }

    return(
        <div id='allMusic-wrap'>
         <Header/>
         <div id='musicList'>
            {/* <RecMusicBox imgSrc = {<img className='img' src={Kistch}/>} // 되긴 하지만... 더 좋은 방법은?
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
                    genre="K-POP"/>  */}
                    {/* {renderArtists()} */}
                    <div>
                {songData ? (
                        <div>
                        {/* <h1>{songData.name}</h1>
                        <p>{songData.artists[0].name}</p>
                        <img src={songData.album.images[0].url} alt="Album Cover" /> */}
                        {getRandomSearch(songData)}
                        </div>
                ) : (
                        <p>Loading...</p>
                )}
                </div>
            
         </div>
        </div>
    );
}

export default AllMusic;