// 내 보관함

import { Link } from 'react-router-dom';
import '../css/myMusic.css'
import Header from './header';
import User from '../images/user.png'
import PlaylistMusicBox from './playlistMusicBox';
import MyMusicPlaylistItem from './myMusicPlaylistItem';

function MyMusic() {
    return(
        <div id='myMusic-wrap'>
            <Header/>
            <div id='user-area'>
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
            <div id='like-list' className='myMusicBox'>
                <h1 className='myMusicTitle'>좋아요 누른 곡</h1>
                {/* 230706 
                재생목록 리스트랑 똑같음. but, width가 다름 & album 요소 추가
                => 하나 더 만들어서 css만 수정 > 중복코드라 ㅠㅠ 
                Q. 다른 방법? */}
                <PlaylistMusicBox title="Kistch" name="IVE" album="I've IVE" time="3:50"/>
                <PlaylistMusicBox title="Queencard" name="G-IDLE" album="I feel" time="2:50"/>
                <PlaylistMusicBox title="Hello Future" name="NCT DREAM" album="Hello Future" time="3:17"/>
                <PlaylistMusicBox title="Smiley" name="Yena" album="ˣ‿ˣ (SMiLEY)" time="3:24"/>
                <PlaylistMusicBox title="Red Flavor" name="Red Velvet" album="The Red Summer" time="3:12"/>
            </div>
            <div id='my-playlist' className='myMusicBox'>
                <h1 className='myMusicTitle'>재생목록</h1>
                <Link to="/storedPlaylist">
                    <MyMusicPlaylistItem playlistTitle = "은은한 풀내음이 가득한"/>
                </Link>
                {/* 230712 storedPlaylist로 페이지 이동 시, 페이지가 맨 위로 자동으로 올라가면 좋겠다.. 우예해?
                scrollToTop() 컴포넌트 생성 후 App에 넣어줘! */}
                <MyMusicPlaylistItem playlistTitle = "스누피 커피우유보다 더 쎔"/>
                <MyMusicPlaylistItem playlistTitle = "오늘 하늘은 예쁘던가요?"/>
            </div>
        </div>
    );
}

export default MyMusic;