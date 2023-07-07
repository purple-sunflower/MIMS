// 재생목록 화면

import '../css/storedPlaylist.css'
import Header from './header';
import User from '../images/user.png'
import PlaylistMusicBox from './playlistMusicBox';

function MyMusic() {
    return(
        <div id='storedPlaylist-wrap'>
            <Header/>
            <div id='user'>
                <div id='user-left'>
                    <div id='user-img'>
                        <img src={User}/>
                    </div>
                </div>
                <div id='user-right'>
                    <div id="user-name">
                        재생목록 이름
                    </div>
                </div>
            </div>
            <div id='like-list' className='myMusicBox'>
                <h1 className='myMusicTitle'>노래들입니다</h1>
                {/* 230706 
                재생목록 리스트랑 똑같음. but, width가 다름
                => 하나 더 만들어서 css만 수정 > 중복코드라 ㅠㅠ 
                Q. 다른 방법? */}
                <PlaylistMusicBox title="Kistch" name="IVE" album="I've IVE" time="3:50"/>
                <PlaylistMusicBox title="Queencard" name="G-IDLE" album="I feel" time="2:50"/>
                <PlaylistMusicBox title="Hello Future" name="NCT DREAM" album="Hello Future" time="3:17"/>
                <PlaylistMusicBox title="Smiley" name="Yena" album="ˣ‿ˣ (SMiLEY)" time="3:24"/>
                <PlaylistMusicBox title="Red Flavor" name="Red Velvet" album="The Red Summer" time="3:12"/>
            </div>
        </div>
    );
}

export default MyMusic;