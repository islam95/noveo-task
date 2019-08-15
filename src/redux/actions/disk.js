import { LOAD_DISK } from './types';
import { baseURL } from '../../constants';
import * as api from '../../helpers/api';


export const getFiles = (token) => {
  return async dispatch => {
    const files = await api.getFiles(token);

    dispatch({
      type: LOAD_DISK,
      files
    });

  }
}

