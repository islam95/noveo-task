import * as Types from "../actions/types";

// const INITIAL_STATE = {
//   disk: {}
// };

const Disk = (state = {}, action) => {
  const { type, disk } = action;
  switch (type) {
    case Types.LOAD_DISK:
      return { ...state, disk };

    default:
      return state;
  }
};

export default Disk;
