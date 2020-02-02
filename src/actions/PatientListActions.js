import * as ACTIONS from './PacientsListTypes';
import axios from 'axios';
import localStorage from 'local-storage';

export const fetchData = protocol => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_DATA });
    dispatch({ type: ACTIONS.SET_PROTOCOL, payload: protocol });

    const user = localStorage.get('medicalProtocols');

    axios
      .get('http://localhost:3001/api/patients', {
        headers: {
          Authorization: user.token,
          'Content-Type': 'application/json',
        },
      })
      .then(res => {
        if (res.status === 200) {
          const { result } = res.data;
          dispatch({ type: ACTIONS.FETCH_DATA_SUCCESS, payload: result });
        }
      })
      .catch(e => {
        dispatch({ type: ACTIONS.FETCH_DATA_FAILED, payload: e.messsage });
      });
  };
};

export const searchPatient = event => {
  return dispatch => {
    const { value } = event.target;
    dispatch({ type: ACTIONS.CHANGE_SEARCH_TEXT, payload: value });
    //  searchOnList(value, dispatch);
  };
};

export const fetchProtocols = patient => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_PROTOCOLS });
    dispatch({ type: ACTIONS.SELECT_PATIENT, payload: patient });
    const user = localStorage.get('medicalProtocols');

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
            type: ACTIONS.FETCH_PROTOCOLS_SUCCESS,
            payload: result,
          });
        }
      })
      .catch(e =>
        dispatch({ type: ACTIONS.FETCH_PROTOCOLS_FAILED, payload: e.message })
      );
  };
};

export const goToScreen = (history, screen, protocol, patient) => {
  return dispatch => {
    dispatch({ type: ACTIONS.HIDE_MODAL });
    history.push({
      pathname: screen,
      state: { protocol, patient },
    });
  };
};

export const hideModal = () => ({ type: ACTIONS.HIDE_MODAL });

const searchOnList = (value, dispatch) => {
  /*let items = _.map(patients).filter(item => {
    return (
      `${item.name} ${item.surname}`
        .toLowerCase()
        .search(value.toLowerCase()) !== -1 ||
      item.register.search(value) !== -1
    );
  });*/
  // dispatch({ type: ACTIONS.SEARCH_PATIENT_SUCCESS, payload: items });
};
