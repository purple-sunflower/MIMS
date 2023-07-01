// 재생목록 모음

import "../css/musicLyric.css"
import PlaylistContent from "./playlistContent";

function MusicPlaylist() {
  return (
    <div className="playlistArea">
        <PlaylistContent title="Kistch" name="IVE" time="3:50"/>
        <PlaylistContent title="Queen card" name="G-IDLE" time="2:50"/>
        <PlaylistContent title="Hello Future" name="NCT DREAM" time="3:17"/>
        <PlaylistContent title="Smiley" name="Yena" time="3:24"/>
        <PlaylistContent title="Red Flavor" name="Red Velvet" time="3:12"/>
        <PlaylistContent title="BBI BBI" name="IU" time="3:15"/>
        <PlaylistContent title="Call Me Baby" name="EXO" time="3:32"/>
        <PlaylistContent title="Snapping" name="CHUNG HA" time="3:33"/>
        <PlaylistContent title="Likey" name="TWICE" time="3:28"/>
        <PlaylistContent title="Dun Dun Dance" name="OH MY GIRL" time="3:41"/>
        <PlaylistContent title="Step Back" name="GOT the beat" time="3:49"/>
        <PlaylistContent title="Energetic" name="Wanna One" time="3:09"/>
        <PlaylistContent title="ASAP" name="STACY" time="3:15"/>
        <PlaylistContent title="Mr.Chu" name="A-pink" time="3:24"/>
        <PlaylistContent title="Rollin'" name="Brave Girls" time="3:18"/>
        <PlaylistContent title="DALLA DALLA" name="ITZY" time="3:20"/>
    </div>
  );
}

export default MusicPlaylist;