// react - spotify API 실습
import {useEffect, useState} from 'react';
import axios from 'axios';
import "../css/searchSample.css"
import black from "../images/blackImg.png"
import PlaylistMusicBox from './playlistMusicBox';
import Header from './header';
import Result from './result';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

// 스포티파이를 통해 로그인 시, redirect_uri로 연결!

// 230726 노래 검색 시, 뜨도록 해야함 ! (지금은 가수만 나옴 ㅠㅠ)
// 230727 로그아웃하고 다시 로그인하니까 안됨... uri 등록 해야하나? >이미 되어있는디?
// 애초에 로그인 상태였을 때도 401 에러 뜸..
// 230728 엥 된다... 원래 원버전에서 로그인 하고 나서 하니까 되넹... > 왜 또 안됨? => 됐다 안됐다 함!!!!!!!!!

function SearchSample() {
    const CLIENT_ID = "3a5c7bcf08c24a9cad7adbcbf594d6ba"
    const REDIRECT_URI = "http://localhost:3000"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
    
        setToken(token)
    
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    const [searchKey, setSearchKey] = useState("")
    const [artists, setArtists] = useState([])

    const searchArtists = async (e) => {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "artist"
            }
        })
    
        setArtists(data.artists.items)
    }

    // 이미지, 노래 제목, 가수, 앨범, 노래 시간
    const renderArtists = () => {
        return artists.map(artist => (
            <div key={artist.id}>
                <PlaylistMusicBox img ={artist.images.length ? <img width={"60px"} height={"60px"} src={artist.images[0].url} alt=""/> 
                : <img width={"60px"} height={"60px"} src={black} alt=""/>}  title="제목" name = {artist.name} album = {artist.genres[0]} time = "3:00"/>
            </div>
        ))
    }


    return (
        <div className="searchSample-wrap">
            <header className="searchSample-header">
            {/*<h3>Spotify React</h3>*/}
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}

                {token ? 
                <form onSubmit={searchArtists}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)} placeholder='검색어를 입력하세요'/>
                    <button type={"submit"}>
                            <FontAwesomeIcon icon={faSearch} id="searchIcon"/>
                    </button>
                </form>
                : <h2>Please Login</h2>
                }
    
                {/*renderArtists()*/}
                {/*<Result renderArtists = {renderArtists()}/>*/}
            </header>
        </div>

        
        
    );
}

export default SearchSample;
