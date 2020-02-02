import * as ACTIONS from '../actions/PatientRegisterType';

const INITIAL_STATE = {
  user: null,
  protocol: null,
  loadingRegisterPatient: false,
  showModal: false,
  registerPatientError: null,
  patient: null,
  cities: [],
  states: [],
  genres: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return { ...state, user: action.payload };
    case ACTIONS.FETCH_CITY_SUCCESS:
      return { ...state, cities: action.payload };
    case ACTIONS.FETCH_STATE_SUCCESS:
      return { ...state, states: action.payload };
    case ACTIONS.FETCH_GENRE_SUCCESS:
      return { ...state, genres: action.payload };
    case ACTIONS.SELECT_PROTOCOL:
      return { ...state, protocol: action.payload };
    case ACTIONS.HIDE_MODAL:
      return { ...state, showModal: false };
    case ACTIONS.REGISTER_PATIENT:
      return {
        ...state,
        patient: null,
        registerPatientError: null,
        loadingRegisterPatient: true,
        showModal: false,
      };
    case ACTIONS.REGISTER_PATIENT_SUCCESS:
      return {
        ...state,
        patient: action.payload,
        registerPatientError: null,
        loadingRegisterPatient: false,
        showModal: true,
      };
    case ACTIONS.REGISTER_PATIENT_FAILED:
      return {
        ...state,
        patient: null,
        registerPatientError: action.payload,
        loadingRegisterPatient: false,
      };
    default:
      return { ...state };
  }
};
