import * as Types from '../actions/types';


const INITIAL_STATE = {
  token: null
}
const Auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.SET_TOKEN:
      return { ...state, token: action.token }

    default:
      return state
  }
}

export default Auth