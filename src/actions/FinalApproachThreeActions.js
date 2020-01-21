import * as ACTIONS from './FinalApproachThreeTypes';
import { sofa } from '../bd';

export const doRegister = values => {
  return dispatch => {
    console.log(values);
  };
};

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_DATA_SUCCESS, payload: sofa });
  };
};
