// 내 보관함

import '../css/myMusic.css'
import Header from './header';
import User from '../images/user.png'

function MyMusic() {
    return(
        <div id='myMusic-wrap'>
            <Header/>
            <div id='user'>
                <div id='user-left'>
                    <div id='user-img'>
                        <img src={User}/>
                    </div>
                </div>
                <div id='user-right'>
                    <div id="user-name">
                        사용자 이름
                    </div>
                </div>
            </div>
            <div id='like-list'>
                <h1>좋아요 누른 곡</h1>
            </div>
            <div id='my-playlist'>

            </div>
        </div>
    );
}

export default MyMusic;