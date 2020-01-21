import * as ACTIONS from '../actions/UserTypes';

const INITIAL_STATE = {
  user: null,
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA:
      return { ...state, user: null, loading: true };
    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case ACTIONS.FETCH_DATA_FAILED:
      return { ...state, user: null, loading: false, error: action.payload };
    default:
      return state;
  }
};
