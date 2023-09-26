import React, { useEffect, useState } from "react";
import axios from "axios";

const PLAYLISTS_ENDPOINT = "https://api.spotify/com/v1/playlists";

const SpotifyGetPlaylist = () => {
    const [token, setToken] = useState('');
    const [data, setData] = useState({});

    const accessToken = "3a5c7bcf08c24a9cad7adbcbf594d6ba";

    useEffect(() => {
        if(localStorage.getItem('accessToken')) {
            setToken(localStorage.getItem("accessToken"));
        }
    }, []);

    const handleGetPlaylists = () => {
        axios
        .get(PLAYLISTS_ENDPOINT, {
            headers: {
                Authorization: "Bearer" + accessToken,
            },
        })
        .then(response => {
            setData(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    };

    return (
        <>
        <button onClick={handleGetPlaylists}>Get Playlists</button>
        {data?.items ? data.items.map((item) => <p>{item.name}</p>) : null}
        </>
    );
};

export default SpotifyGetPlaylist;