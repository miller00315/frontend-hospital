import * as ACTIONS from '../actions/AntibioticTypes';

const INITIAL_STATE = {
  prescribid_atb: [],
  atb_type_1: [],
  atb_type_2: [],
  atb_type_3: [],
  atb_type_4: [],
  atb_type_5: [],
  atb_type_6: [],
  atb_type_7: [],
  atb_type_8: [],
  atb_type_9: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
