import { Component } from 'react'
import '../css/header.css'
import Logo from "../images/logo.png" // 이미지 삽입을 위한 import

function Header(){
    return(
        <div id='header-wrap'>
            <div id='logo-box'>
                <img src={Logo} id='logo-img'/>
            </div>
        
        </div>
    );
}

export default Header;