import * as ACTIONS from './OutcomeTypes';
import { outcome } from '../bd';

export const doRegister = values => {
  return dispatch => {
    console.log(values);
  };
};

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_DATA_SUCCESS, payload: outcome });
  };
};

export const changeOutcome = outcome => {
  return { type: ACTIONS.CHANGE_OUTCOME, payload: outcome };
};
