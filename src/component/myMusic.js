// 내 보관함

import '../css/myMusic.css'
import Header from './header';
import User from '../images/user.png'
import MyMusicListContent from './myMusicListContent';
import MyPlaylistItem from './myPlaylistItem';

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
            <div id='like-list' className='myMusicBox'>
                <h1 className='myMusicTitle'>좋아요 누른 곡</h1>
                {/* 230706 
                재생목록 리스트랑 똑같음. but, width가 다름
                => 하나 더 만들어서 css만 수정 > 중복코드라 ㅠㅠ 
                Q. 다른 방법? */}
                <MyMusicListContent title="Kistch" name="IVE" album="I've IVE" time="3:50"/>
                <MyMusicListContent title="Queencard" name="G-IDLE" album="I feel" time="2:50"/>
                <MyMusicListContent title="Hello Future" name="NCT DREAM" album="Hello Future" time="3:17"/>
                <MyMusicListContent title="Smiley" name="Yena" album="ˣ‿ˣ (SMiLEY)" time="3:24"/>
                <MyMusicListContent title="Red Flavor" name="Red Velvet" album="The Red Summer" time="3:12"/>
            </div>
            <div id='my-playlist' className='myMusicBox'>
                <h1 className='myMusicTitle'>재생목록</h1>
                <MyPlaylistItem playlistTitle = "은은한 풀내음이 가득한"/>
                <MyPlaylistItem playlistTitle = "스누피 커피우유보다 더 쎔"/>
                <MyPlaylistItem playlistTitle = "오늘 하늘은 예쁘던가요?"/>
            </div>
        </div>
    );
}

export default MyMusic;