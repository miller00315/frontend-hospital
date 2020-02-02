import * as ACTIONS from './LoginsTypes';
import axios from 'axios';
import localStorage from 'local-storage';

export const doLogin = (history, values) => {
  return dispatch => {
    dispatch({ type: ACTIONS.DO_LOGIN });

    axios
      .post('http://localhost:3001/api/professionals/login', {
        professional: values,
      })
      .then(res => {
        if (res.status === 200) {
          dispatch({ type: ACTIONS.DO_LOGIN_SUCCESS });
          const { result } = res.data;
          localStorage.set('medicalProtocols', result);
          history.replace('/main', { result });
        }
      })
      .catch(e => {
        dispatch({ type: ACTIONS.DO_LOGIN_FAILED, payload: e.message });
      });
  };
};

export const goToRegister = () => {
  console.log('goToRegister');
};
