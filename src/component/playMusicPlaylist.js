// 재생화면 > 재생목록 모음

import '../css/playMusicPlaylist.css'
import PlaylistBox from "./playlistBox";

function PlayMusicPlaylist() {
  return (
    <div className="playlistArea">
        <PlaylistBox title="Kistch" name="IVE" time="3:50"/>
        <PlaylistBox title="Queencard" name="G-IDLE" time="2:50"/>
        <PlaylistBox title="Hello Future" name="NCT DREAM" time="3:17"/>
        <PlaylistBox title="Smiley" name="Yena" time="3:24"/>
        <PlaylistBox title="Red Flavor" name="Red Velvet" time="3:12"/>
        <PlaylistBox title="BBI BBI" name="IU" time="3:15"/>
        <PlaylistBox title="Call Me Baby" name="EXO" time="3:32"/>
        <PlaylistBox title="Snapping" name="CHUNG HA" time="3:33"/>
        <PlaylistBox title="Likey" name="TWICE" time="3:28"/>
        <PlaylistBox title="Dun Dun Dance" name="OH MY GIRL" time="3:41"/>
        <PlaylistBox title="Step Back" name="GOT the beat" time="3:49"/>
        <PlaylistBox title="Energetic" name="Wanna One" time="3:09"/>
        <PlaylistBox title="ASAP" name="STACY" time="3:15"/>
        <PlaylistBox title="Mr.Chu" name="A-pink" time="3:24"/>
        <PlaylistBox title="Rollin'" name="Brave Girls" time="3:18"/>
        <PlaylistBox title="DALLA DALLA" name="ITZY" time="3:20"/>
    </div>
  );
}

export default PlayMusicPlaylist;