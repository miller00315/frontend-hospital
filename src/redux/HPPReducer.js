import * as ACTIONS from '../actions/HPPTypes';

const INITIAL_STATE = {
  loadingHPP: false,
  errorHPP: null,
  patient: null,
  values: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA:
      return { ...state, loadingHPP: true, errorHPP: null, patient: null };
    case ACTIONS.FETCH_DATA_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case ACTIONS.FETCH_DATA_FAILED:
      return {
        ...state,
        loadingHPP: false,
        errorHPP: action.payload,
        patient: null,
      };
    default:
      return { ...state };
  }
};
