import * as ACTIONS from './RegisterTypes';

export const doRegister = (history, values) => {
  return dispatch => {
    history.push('/main');
  };
};

export const fetchData = () => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_STATE, payload: [] });
    dispatch({ type: ACTIONS.FETCH_TYPES_SUCCESS, payload: [] });
    dispatch({ type: ACTIONS.FETCH_STATE_SUCCESS, payload: [] });
  };
};

export const onChangeState = state => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_CITY, payload: [] });
    dispatch({ type: ACTIONS.FETCH_CITY_SUCCESS, payload: [] });
  };
};
