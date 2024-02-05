// 헤더
// react-bootstrap 사용

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import React from 'react'
import '../css/header.css'
import Logo from "../images/logo3-final.png" // 이미지 삽입을 위한 import
import { Button } from "react-bootstrap";


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
                <Button className='btn' variant="outline-dark" href="/" id='home' onClick={clickBtn}>
                    홈
                </Button>{' '}
                <Button className='btn' variant="outline-dark" href="/myMusic" id='myList' onClick={clickBtn}>
                    내 보관함
                </Button>{' '}
                <Button className='btn' variant="outline-dark" href="/allMusic" id='all' onClick={clickBtn}>
                    노래 추천
                </Button>{' '}
                <Button className='btn' variant="outline-dark" href="/searchAlbum" id='search' onClick={clickBtn}>
                    검색 {/* 앨범 검색 */}
                </Button>{' '}
            </div>
            <div id="user-area" className='box'>
                <FontAwesomeIcon icon={faUser} id="userIcon"/>
            </div>
        </div>
    );
}



export default Header;