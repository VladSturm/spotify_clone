import React, { useEffect, useState } from 'react';
import Login from './Login';
import './App.css';
import {getTokenFromUrl} from './spotify';
import  SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player.js';
import {useDataLayerValue} from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [_token, setToken] = useState(null);

  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(()=>{
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if(_token){
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
      setToken(_token);
      

      spotify.setAccessToken(_token);

      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user,
        });
      });
    }
    console.log('I have a token', token)
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log('user', user);
  console.log('token', token);

  return (
    <div className="App">
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
     
    </div>
  );
}

export default App;
