import * as ACTIONS from './MedicalRecordsTypes';
import { protocols } from '../bd';

export const changeModule = modulo => ({
  type: ACTIONS.CHANGE_MODULE,
  payload: modulo,
});

export const fetchData = (protocol, patient) => {
  return dispatch => {
    dispatch({ type: ACTIONS.SET_PROTOCOL, payload: protocol });
    dispatch({ type: ACTIONS.SET_PATIENT, payload: patient });
    dispatch({
      type: ACTIONS.GET_MODULES_SUCCESS,
      payload: protocols[protocol.id],
    });
  };
};
