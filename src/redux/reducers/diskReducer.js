import * as Types from '../actions/types';

const INITIAL_STATE = {
  files: []
}
const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_DISK:
      return { ...state, files: action.files }

    default:
      return state
  }
}

export default Auth