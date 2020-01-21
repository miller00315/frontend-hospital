import * as ACTIONS from '../actions/FinalApproachTwoTypes';

const INITIAL_STATE = {
  sofa_snc: [],
  sofa_res: [],
  sofa_cardio: [],
  sofa_hep: [],
  sofa_renal: [],
  sofa_coag: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
