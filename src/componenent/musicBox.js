import React from 'react';
import '../css/musicBox.css'

function musicBox(props){
    return(
        <div id='musicBox-wrap'>
         노래 박스 입니다. <br/>
         제목: {props.title} <br/>
         가수: {props.name} <br/>
         장르: {props.genre} <br/>
        </div>
    );
}

export default musicBox;