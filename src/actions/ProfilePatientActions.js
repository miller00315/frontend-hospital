import * as ACTIONS from './ProfilePatientTypes';
import axios from 'axios';
import localStorage from 'local-storage';

export const fetchData = () => {
  return dispatch => {
    const user = localStorage.get('medicalProtocols');
    fetchState(dispatch, user);
    fetchGenre(dispatch, user);
  };
};

const fetchState = (dispatch, user) => {
  axios
    .get('http://localhost:3001/api/states', {
      headers: {
        Authorization: user.token,
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(e => {
      console.log(e.message);
    });
};

const fetchGenre = (dispatch, user) => {
  axios
    .get('http://localhost:3001/api/genres', {
      headers: {
        Authorization: user.token,
        'Content-Type': 'application/json',
      },
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(e => {
      console.log(e.message);
    });
};

export const registerChange = values => {
  return dispatch => {
    dispatch({ type: ACTIONS.HIDE_MODAL });
  };
};

export const editUser = () => ({ type: ACTIONS.SHOW_MODAL });

export const hideModal = () => ({ type: ACTIONS.HIDE_MODAL });
