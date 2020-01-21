import * as ACTIONS from './UserTypes';

import { user } from '../bd';

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_DATA });
    dispatch({ type: ACTIONS.FETCH_DATA_SUCCESS, payload: user });
  };
};
