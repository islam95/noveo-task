import { SET_TOKEN } from './types';
import { baseURL } from '../../constants';


const parseAccessToken = (url) => {
  if(url) return /access_token=([^&]+)/.exec(url)[1];
}

export const performLogin = () => {
  return async dispatch => {
    const win = window.open(baseURL, "windowname1", 'width=800, height=600'); 

    const pollTimer   =   window.setInterval(function() { 
      try {
          if (win.document.URL.indexOf('access_token') != -1) {
              window.clearInterval(pollTimer);
              const url =   win.document.URL;
              win.close();

              const token = parseAccessToken(url);
              localStorage.setItem('access_token', token)
              dispatch({
                type: SET_TOKEN,
                token
              });
          }
      } catch(e) {
      }
    }, 100);
  }
}
export const setToken = token => ({
  type: SET_TOKEN,
  token
})
