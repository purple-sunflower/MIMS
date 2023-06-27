import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import '../css/header.css'
import Logo from "../images/logo.png" // 이미지 삽입을 위한 import

function Header(){

    const clickBtn = () => {
        console.log("You click your button!");
    } // 버튼 작동 확인

    return(
        <div id='header-wrap'>
            <div id='logo-box' className='box'>
                <img src={Logo} id='logo-img'/>
            </div>
            <div id='btn-group' className='box'>
                <button className='btn' id='home' onClick={clickBtn}>홈</button>
                <button className='btn' id='myList' onClick={clickBtn}>내 보관함</button>
                <button className='btn' id='all' onClick={clickBtn}>전체보기</button>
            </div>
            <div id='search-area' className='box'>
                <FontAwesomeIcon icon={faSearch} id="searchIcon"/>
                <input id='searchInput' placeholder="검색어를 입력하세요."/>
            </div>
            <div id="user-area" className='box'>
                <FontAwesomeIcon icon={faUser} id="userIcon"/>
            </div>
        </div>
    );
}



export default Header;