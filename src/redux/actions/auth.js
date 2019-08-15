import { SET_TOKEN } from './types';
import { baseURL } from '../../helpers/constants';

const parseAccessToken = (url) => {
  if(url) return /access_token=([^&]+)/.exec(url)[1];
}

export const checkAuth = () => {
  return async dispatch => {
    const token = localStorage.getItem('access_token');
    if (token) {
      dispatch({
        type: SET_TOKEN,
        token
      });
    }
  }
}

export const performLogout = () => {
  return async dispatch => {
    localStorage.removeItem('access_token');
    dispatch({
      type: SET_TOKEN,
      token: null
    });
  }
}
export const performLogin = () => {
  return async dispatch => {
    const win = window.open(baseURL, "windowname1", 'width=800, height=600'); 
    
    const pollTimer = window.setInterval(function() { 
      try {
          if (win.document.URL.indexOf('access_token') !== -1) {
              window.clearInterval(pollTimer);
              const url = win.document.URL;
              win.close();

              const token = parseAccessToken(url);
              localStorage.setItem('access_token', token)
              dispatch({
                type: SET_TOKEN,
                token
              });
          }
      } catch(e) {
        console.log(e)
      }
    }, 100);
  }
}

// export const setToken = token => ({
//   type: SET_TOKEN,
//   token
// })
