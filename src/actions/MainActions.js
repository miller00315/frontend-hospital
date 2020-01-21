import * as ACTIONS from './MainTypes';
import { protocolsList } from '../bd';
import _ from 'lodash';

export const fetchData = () => {
  return dispatch => {
    dispatch({
      type: ACTIONS.FETCH_DATA_SUCCESS,
      payload: _.map(protocolsList),
    });
  };
};

export const goToScreen = (history, screen, protocol) => {
  return dispatch => {
    dispatch({ type: ACTIONS.HIDE_MODAL });
    history.push({
      pathname: screen,
      state: { protocol },
    });
  };
};

export const selectProtocol = protocol => {
  return dispatch => {
    dispatch({ type: ACTIONS.SELECT_PROTOCOL, payload: protocol });
  };
};

export const changeTextSearch = event => {
  const { value } = event.target;
  return dispatch => {
    dispatch({ type: ACTIONS.CHANGE_SEARCH_TEXT, payload: value });
    searchOnList(value, dispatch);
  };
};

const searchOnList = (value, dispatch) => {
  let items = _.map(protocolsList).filter(item => {
    return `${item.protocol}`.toLowerCase().search(value.toLowerCase()) !== -1;
  });

  dispatch({ type: ACTIONS.SET_RESULTS, payload: items });
};

export const hideModal = () => ({ type: ACTIONS.HIDE_MODAL });
