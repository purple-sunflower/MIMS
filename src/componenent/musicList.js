import React from 'react';
import '../css/musicList.css'
import MusicBox from './musicBox.js'

function musicList(){
    return(
        <div id='musicList-wrap'>
            <MusicBox title="Broken Melodies" 
                    name="NCT DREAM" 
                    genre="K-POP"/>
        </div>
    );
}

export default musicList;