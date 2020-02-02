import * as ACTIONS from './PatientRegisterType';

import axios from 'axios';
import localStorage from 'local-storage';

export const fetchData = protocol => {
  return dispatch => {
    const user = localStorage.get('medicalProtocols');
    dispatch({ type: ACTIONS.SELECT_PROTOCOL, payload: protocol });
    dispatch({ type: ACTIONS.SET_USER, payload: user });
    fetchState(dispatch, user);
    fetchGenre(dispatch, user);
  };
};

const fetchState = (dispatch, user) => {
  dispatch({ type: ACTIONS.FETCH_STATE });
  axios
    .get('http://localhost:3001/api/states', {
      headers: {
        Authorization: user.token,
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      if (res.status === 200) {
        const { result } = res.data;
        dispatch({ type: ACTIONS.FETCH_STATE_SUCCESS, payload: result });
      }
    })
    .catch(e => {
      dispatch({ type: ACTIONS.FETCH_STATE_FAILED, payload: e.message });
    });
};

const fetchGenre = (dispatch, user) => {
  dispatch({ type: ACTIONS.FETCH_GENRE });
  axios
    .get('http://localhost:3001/api/genres', {
      headers: {
        Authorization: user.token,
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      const { result } = res.data;
      dispatch({ type: ACTIONS.FETCH_GENRE_SUCCESS, payload: result });
    })
    .catch(e => {
      dispatch({ type: ACTIONS.FETCH_GENRE_FAILED, payload: e.message });
    });
};

export const changeState = state => {
  return dispatch => {
    const user = localStorage.get('medicalProtocols');
    dispatch({ type: ACTIONS.FETCH_CITY });
    axios
      .get('http://localhost:3001/api/cities/stateCode', {
        headers: {
          Authorization: user.token,
          'Content-Type': 'application/json',
        },
        params: {
          stateCode: state,
        },
      })
      .then(res => {
        const { result } = res.data;
        dispatch({ type: ACTIONS.FETCH_CITY_SUCCESS, payload: result });
      })
      .catch(e => {
        dispatch({ type: ACTIONS.FETCH_CITY_FAILED, payload: e.message });
      });
  };
};

export const resgisterPatient = values => {
  return dispatch => {
    dispatch({ type: ACTIONS.REGISTER_PATIENT });
    const user = localStorage.get('medicalProtocols');
    const patient = { ...values, register_by: user._id };

    axios
      .post(
        'http://localhost:3001/api/patients',
        { patient },
        {
          headers: {
            Authorization: user.token,
            'Content-Type': 'application/json',
          },
        }
      )
      .then(res => {
        if (res.status === 200) {
          const { result } = res.data;
          dispatch({ type: ACTIONS.REGISTER_PATIENT_SUCCESS, payload: result });
        }
      })
      .catch(e => {
        dispatch({ type: ACTIONS.REGISTER_PATIENT_FAILED, payload: e.message });
      });
  };
};

export const goToScreen = (history, screen, protocol, patient) => {
  return dispatch => {
    history.push({
      pathname: screen,
      state: { protocol, patient },
    });
    dispatch({ type: ACTIONS.HIDE_MODAL });
  };
};

export const hideModal = () => {
  return { type: ACTIONS.HIDE_MODAL };
};
