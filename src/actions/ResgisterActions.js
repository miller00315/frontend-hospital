import * as ACTIONS from './RegisterTypes';
import axios from 'axios';
import localStorage from 'local-storage';

export const doRegister = (history, professional) => {
  return dispatch => {
    //history.push('/main');
    axios
      .post('http://localhost:3001/api/professionals', {
        professional,
      })
      .then(res => {
        if (res.status === 200) {
          const { result } = res.data;
          dispatch({ type: ACTIONS.DO_REGISTER_SUCCESS, payload: result });

          doLogin(professional, history, dispatch);
        }
      })
      .catch(e =>
        dispatch({ type: ACTIONS.DO_RESGITER_FAILED, payload: e.messsage })
      );
  };
};

const doLogin = (professional, history, dispatch) => {
  axios
    .post('http://localhost:3001/api/professionals/login', {
      professional,
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
