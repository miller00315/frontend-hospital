import * as ACTIONS from '../actions/InitialApproachTypes';

const INITIAL_STATE = {
  volume: [],
  vasoActiveDrugs: [],
  vasoActiveDrugsName: [],
  hemoTransfusion: [],
  mecanicalVentilation: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
