import * as ACTIONS from '../actions/RegisterTypes';

const INITIAL_STATE = {
  errorRegister: null,
  registerSuccess: false,
  loadingRegister: false,
  genres: [
    { id: 1, value: 'male' },
    { id: 2, value: 'female' },
  ],
  cities: [],
  states: [],
  types: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_CITY_SUCCESS:
      return { ...state, city: action.payload };
    case ACTIONS.FETCH_TYPES_SUCCESS:
      return { ...state, types: action.payload };
    case ACTIONS.FETCH_STATE_SUCCESS:
      return { ...state, states: action.payload };
    case ACTIONS.DO_REGISTER:
      return { ...state };
    case ACTIONS.DO_REGISTER_SUCCESS:
      return { ...state };
    case ACTIONS.DO_RESGITER_FAILED:
      return { ...state };
    default:
      return { ...state };
  }
};
