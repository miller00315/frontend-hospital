import * as ACTIONS from './ProfilePatientTypes';

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_STATE });
  };
};

export const registerChange = values => {
  return dispatch => {
    dispatch({ type: ACTIONS.HIDE_MODAL });
  };
};

export const editUser = () => ({ type: ACTIONS.SHOW_MODAL });

export const hideModal = () => ({ type: ACTIONS.HIDE_MODAL });
