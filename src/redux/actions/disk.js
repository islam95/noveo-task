import { LOAD_DISK } from './types';
import * as api from '../../helpers/api';

export const getFiles = (token, path) => {
  return async dispatch => {
    const files = await api.getFiles(token, path);

    dispatch({
      type: LOAD_DISK,
      files
    });

  }
}

