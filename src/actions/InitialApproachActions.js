import * as ACTIONS from './InitialApproachTypes';
import { initialApproach } from '../bd';

export const fetchData = user => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_DATA_SUCCESS, payload: initialApproach });
  };
};

export const doRegister = (user, values) => {
  return dispatch => {
    console.log(values);
  };
};
