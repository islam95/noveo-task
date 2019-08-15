import { combineReducers } from "redux";
import auth from "../reducers/authReducer";
import disk from "../reducers/diskReducer";

const rootReducer = combineReducers({
  auth,
  disk
});

export default rootReducer;
