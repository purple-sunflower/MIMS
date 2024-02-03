
//240203부터 진행 중 (유료 계정 시, 노래 play 가능 -- 보류)
/* import Header from "./header";
import React, { useEffect, useState } from 'react';

const CLIENT_ID = "3a5c7bcf08c24a9cad7adbcbf594d6ba";
const CLIENT_SECRET = "97d0babb1c5e47b4ab66e70fe9794765";

function PlayTrackTest() {

    const [accessToken, setAccessToken] = useState("");

    useEffect(() => {
        
        var authParameters = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
          }
          fetch('https://accounts.spotify.com/api/token', authParameters)
            .then(result => result.json())
            .then(data => setAccessToken(data.access_token))

        const token = accessToken;

        const player = new window.Spotify.Player({
            name: 'Web Playback SDK Quick Start Player',
            getOAuthToken: cb => { cb(token); },
            volume: 0.5
        });

        // Ready
        player.addListener('ready', ({ device_id }) => {
            console.log('Ready with Device ID', device_id);
        });

        // Not Ready
        player.addListener('not_ready', ({ device_id }) => {
            console.log('Device ID has gone offline', device_id);
        });

        player.addListener('initialization_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('authentication_error', ({ message }) => {
            console.error(message);
        });

        player.addListener('account_error', ({ message }) => {
            console.error(message);
        });

        player.connect();

        return () => {
            player.disconnect();
        };
    }, []); // useEffect dependency array is empty, so it will only run once when the component mounts

    const togglePlay = () => {
        const player = new window.Spotify.Player();
        player.togglePlay();
    };

    return (
        <div>
            <Header/>
            <h1>Spotify Web Playback SDK Quick Start</h1>
            <button onClick={togglePlay}>Toggle Play</button>
        </div>
    );
}

export default PlayTrackTest; */