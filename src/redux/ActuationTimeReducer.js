import * as ACTIONS from '../actions/ActuationTimeTypes';

const INITIAL_STATE = {
  loadingActuationTime: false,
  errorActuationTime: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return { ...state };
  }
};
