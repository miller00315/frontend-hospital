import * as ACTIONS from './UserTypes';
import localStorage from 'local-storage';

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_DATA });
    const user = localStorage.get('medicalProtocols');
    dispatch({ type: ACTIONS.FETCH_DATA_SUCCESS, payload: user });
  };
};
