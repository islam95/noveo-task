import { LOAD_DISK } from "./types";
import * as api from "../../helpers/api";

// Get all items from api call and save them to redux store
export const getFiles = (token, path) => {
  return async dispatch => {
    const disk = await api.getFiles(token, path);
    dispatch({
      type: LOAD_DISK,
      loading: false,
      disk
    });
  };
};
