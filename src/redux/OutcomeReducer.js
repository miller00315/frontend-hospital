import * as ACTIONS from '../actions/OutcomeTypes';

const INITIAL_STATE = {
  outcomeTypes: [],
  outcome: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, ...action.payload };
    case ACTIONS.CHANGE_OUTCOME:
      return { ...state, outcome: action.payload };
    default:
      return { ...state };
  }
};
