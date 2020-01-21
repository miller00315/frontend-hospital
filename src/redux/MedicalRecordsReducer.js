import * as ACTIONS from '../actions/MedicalRecordsTypes';

const INITIAL_STATE = {
  module: '0',
  modules: [],
  patient: null,
  protocol: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SET_PATIENT:
      return { ...state, patient: action.payload };
    case ACTIONS.SET_PROTOCOL:
      return { ...state, protocol: action.payload };
    case ACTIONS.GET_MODULES_SUCCESS:
      return { ...state, modules: action.payload };
    case ACTIONS.CHANGE_MODULE:
      return { ...state, module: action.payload };
    default:
      return { ...state };
  }
};
