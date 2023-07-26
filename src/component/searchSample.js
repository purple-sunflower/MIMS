// react - spotify API 실습
import {useEffect, useState} from 'react';
import axios from 'axios';
import "../css/searchSample.css"
import black from "../images/blackImg.png"
import PlaylistMusicBox from './playlistMusicBox';
import Header from './header';

// 스포티파이를 통해 로그인 시, redirect_uri로 연결!

// 230726 노래 검색 시, 뜨도록 해야함 ! (지금은 가수만 나옴 ㅠㅠ)

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

                {/* {artist.images.length ? <img width={"50px"} height={"50px"} src={artist.images[0].url} alt=""/> 
                : <img width={"50px"} height={"50px"} src={black} alt=""/>}
                {artist.name} <br/>
                {artist.genres[0]} <br/> 여러 장르일 때, 맨 처음 장르만 표시 */}
            </div>
        ))
    }


    return (
        <div className="searchSample-wrap">
            <Header/>
            <header className="searchSample-header">
            <h1>Spotify React</h1>
                {!token ?
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                        to Spotify</a>
                    : <button onClick={logout}>Logout</button>}

                {token ? 
                <form onSubmit={searchArtists}>
                    <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                    <button type={"submit"}>Search</button>
                </form>
                : <h2>Please Login</h2>
                }
    
                {renderArtists()}
            </header>
        </div>

        
        
    );
}

export default SearchSample;
