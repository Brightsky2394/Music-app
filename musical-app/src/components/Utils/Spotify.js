<<<<<<< HEAD


const clientId = "78f4f8ed0fc4422d9a2c1eeb8dea0ed8";
const redirectUri = "http%3A%2F%2Flocalhost%3A3000";
=======
const clientId = "b74acc58403e401a9dba1b776e1c4c23";
const redirectUri = "http://localhost:3000/";
>>>>>>> 403289f9240adbd553a051781f627bfbd2f851b8
let accessToken;

const Spotify = {
    getAccessToken () {
        if (accessToken) {
            return accessToken;
        }

        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        if (accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(()=> (accessToken=""), expiresIn * 1000);
            window.history.pushState("Access Token", null, "/");
            return accessToken;
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
<<<<<<< HEAD
            // const accessUrl = `https://accounts.spotify.com/authorize?client_id=78f4f8ed0fc4422d9a2c1eeb8dea0ed8&redirect_uri=http%3A%2F%2Flocalhost%3A3000&response_type=token&scope=playlist-modify-public`;
=======
>>>>>>> 403289f9240adbd553a051781f627bfbd2f851b8
            window.location = accessUrl;
        }
    },
    
    
    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Search request failed');
            }
            return response.json();
        })
        .then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri,
            }));
        })
        .catch(error => {
            console.error('Error during search:', error);
        });
    },

    savePlaylist(name,trackUris) {
        if(!name || !trackUris.length) {
            return;
        }
        const accessToken = Spotify.getAccessToken();
        const headers = {Authorization: `Bearer ${accessToken}`};
        let userId;

        return fetch("https://api.spotify.com/v1/me", {headers: headers})
            .then(response => response.json())
            .then(jsonResponse => {
                userId = jsonResponse.id;
                return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({name:name})
                })
                .then(response => response.json())
                .then(jsonResponse => {
                    const playlistId = jsonResponse.id;
                    return fetch(
                        `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
                            headers: headers,
                            method: "POST",
                            body: JSON.stringify({uris:trackUris})
                        }
                    )
                })
            })
    }
};

export default Spotify;

