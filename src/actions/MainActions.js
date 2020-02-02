import * as ACTIONS from './MainTypes';
import axios from 'axios';
import localStorage from 'local-storage';

export const fetchData = () => {
  return dispatch => {
    const user = localStorage.get('medicalProtocols');

    dispatch({ type: ACTIONS.SET_USER, payload: user });

    axios
      .get('http://localhost:3001/api/protocols', {
        headers: {
          Authorization: user.token,
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        if (res.status === 200) {
          const { result } = res.data;
          dispatch({
            type: ACTIONS.FETCH_DATA_SUCCESS,
            payload: result,
          });
        }
      })
      .catch(e =>
        dispatch({ type: ACTIONS.FETCH_DATA_FAILED, payload: e.message })
      );
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
    console.log(protocol);
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
  // let items = _.map(protocolsList).filter(item => {
  //   return `${item.protocol}`.toLowerCase().search(value.toLowerCase()) !== -1;
  // });
  // dispatch({ type: ACTIONS.SET_RESULTS, payload: items });
};

export const hideModal = () => ({ type: ACTIONS.HIDE_MODAL });
