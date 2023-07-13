// 헤더

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import {Link} from 'react-router-dom'
import '../css/header.css'
import Logo from "../images/logo.png" // 이미지 삽입을 위한 import

function Header(){

    const clickBtn = () => {
        alert("You click your button!");
    } // 버튼 작동 확인

    return(
        <div id='header-wrap'>
            <div id='logo-box' className='box'>
                <img src={Logo} id='logo-img'/>
            </div>
            <div id='btn-group' className='box'>
                <button className='btn' id='home' onClick={clickBtn}>
                    <Link to="/">홈</Link>
                </button>
                <button className='btn' id='myList' onClick={clickBtn}>
                    <Link to="/myMusic">내 보관함</Link>
                </button>
                <button className='btn' id='all' onClick={clickBtn}>
                    <Link to="/allMusic">전체보기</Link>
                </button>
            </div>
            <div id='search-area' className='box'>
                <Link to="/searchMusic">
                    <FontAwesomeIcon icon={faSearch} id="searchIcon"/>
                </Link>
                <input id='searchInput' placeholder="검색어를 입력하세요."/>
            </div>
            <div id="user-area" className='box'>
                <FontAwesomeIcon icon={faUser} id="userIcon"/>
            </div>
        </div>
    );
}



export default Header;