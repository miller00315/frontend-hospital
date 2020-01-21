import * as ACTIONS from '../actions/PacientsListTypes';

const INITIAL_STATE = {
  loadingPatientList: false,
  showModal: false,
  protocol: null,
  patients: [],
  protocols: [],
  patient: null,
  searchText: '',
  searchResult: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SEARCH_PATIENT_SUCCESS:
      return { ...state, searchResult: action.payload };
    case ACTIONS.CHANGE_SEARCH_TEXT:
      return { ...state, searchText: action.payload };
    case ACTIONS.SELECT_PATIENT:
      return { ...state, patient: action.payload };
    case ACTIONS.FETCH_PROTOCOLS:
      return { ...state, loadingPatientList: true };
    case ACTIONS.FETCH_PROTOCOLS_SUCCESS:
      return {
        ...state,
        loadingPatientList: false,
        protocols: action.payload,
        showModal: true,
      };
    case ACTIONS.HIDE_MODAL:
      return { ...state, showModal: false };
    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, patients: action.payload };
    case ACTIONS.SET_PROTOCOL:
      return { ...state, protocol: action.payload };
    default:
      return { ...state };
  }
};
