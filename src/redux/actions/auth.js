import { SET_TOKEN } from "./types";
import { baseURL } from "../../helpers/constants";
import { parseAccessToken } from "../../helpers/helpers";

// Check if the user authorised
export const checkAuth = () => {
  return async dispatch => {
    const token = localStorage.getItem("access_token");
    if (token) {
      dispatch({
        type: SET_TOKEN,
        token
      });
    }
  };
};

// Logout the user by deleting the token from local storage
export const performLogout = () => {
  return async dispatch => {
    localStorage.removeItem("access_token");
    //set token to null
    dispatch({
      type: SET_TOKEN,
      token: null
    });
  };
};

// Login the user using open new small window
export const performLogin = () => {
  return async dispatch => {
    const win = window.open(baseURL, "windowname1", "width=800, height=600");

    const pollTimer = window.setInterval(function() {
      try {
        // Check if the uri contains access_token
        if (win.document.URL.indexOf("access_token") !== -1) {
          window.clearInterval(pollTimer);
          const url = win.document.URL;
          win.close();
          // get token from the uri
          const token = parseAccessToken(url);
          // save token to the local storage
          localStorage.setItem("access_token", token);
          dispatch({
            type: SET_TOKEN,
            token
          });
        }
      } catch (err) {
        console.error("Error occured at loading window", err);
      }
    }, 100);
  };
};
