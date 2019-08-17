import * as Types from "../actions/types";

const Disk = (state = { loading: true }, action) => {
  const { type, disk } = action;
  switch (type) {
    case Types.LOAD_DISK:
      return { ...state, loading: false, disk };

    default:
      return state;
  }
};

export default Disk;
