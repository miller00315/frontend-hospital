import * as ACTIONS from './PatientRegisterType';
import { genres, states, cities } from '../bd';

export const fetchData = protocol => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_STATE });
    dispatch({ type: ACTIONS.FETCH_STATE_SUCCESS, payload: states });
    dispatch({ type: ACTIONS.FETCH_GENRE_SUCCESS, payload: genres });
    dispatch({ type: ACTIONS.SELECT_PROTOCOL, payload: protocol });
  };
};

export const changeState = state => {
  return dispatch => {
    dispatch({ type: ACTIONS.FETCH_CITY });
    dispatch({ type: ACTIONS.FETCH_CITY_SUCCESS, payload: cities });
  };
};

export const resgisterPatient = values => {
  return dispatch => {
    dispatch({ type: ACTIONS.REGISTER_PATIENT });
    dispatch({ type: ACTIONS.REGISTER_PATIENT_SUCCESS, payload: values });
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
