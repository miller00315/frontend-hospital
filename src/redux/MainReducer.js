import * as ACTIONS from '../actions/MainTypes';

const INITIAL_STATE = {
  loadingMain: false,
  errorMain: null,
  showModal: false,
  protocol: null,
  protocols: [],
  results: [],
  searchText: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.CHANGE_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case ACTIONS.SET_RESULTS:
      return { ...state, protocols: action.payload };
    case ACTIONS.SELECT_PROTOCOL:
      return { ...state, protocol: action.payload, showModal: true };
    case ACTIONS.HIDE_MODAL:
      return { ...state, showModal: false };
    case ACTIONS.FETCH_DATA:
      return { ...state, loadingMain: true, protocols: [], errorMain: null };
    case ACTIONS.FETCH_DATA_SUCCESS:
      return {
        ...state,
        protocols: action.payload,
      };
    case ACTIONS.FETCH_DATA_FAILED:
      return {
        ...state,
        errorMain: action.payload,
        data: [],
        loadingMain: false,
      };
    default:
      return { ...state };
  }
};
