import * as ACTIONS from '../actions/LaboratoryTypes';

const INITIAL_STATE = {
  sepse_kit: [],
  hemo_cult_before_atb: [],
  collect_type: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
