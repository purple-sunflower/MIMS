import React from 'react';
import '../css/musicBox.css'

function musicBox(props){
    return(
        <div id='musicBox-wrap'>
         {props.imgSrc} <br/>
         제목: {props.title} <br/>
         가수: {props.name} <br/>
         장르: {props.genre} <br/>
        </div>
    );
}

export default musicBox;