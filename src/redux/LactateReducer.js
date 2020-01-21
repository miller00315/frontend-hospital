import * as ACTIONS from '../actions/LactateTypes';

const INITIAL_STATE = {
  thirty_minutes: [],
  sixth_hour: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
