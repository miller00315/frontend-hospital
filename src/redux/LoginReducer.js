import * as ACTIONS from '../actions/LoginsTypes';

const INITIAL_STATE = {
  errorLogin: null,
  loadingLogin: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.DO_LOGIN:
      return { ...state };
    case ACTIONS.DO_LOGIN_SUCCESS:
      return { ...state };
    case ACTIONS.DO_LOGIN_FAILED:
      return { ...state };
    default:
      return { ...state };
  }
};
