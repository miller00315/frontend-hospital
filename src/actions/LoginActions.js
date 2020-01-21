import * as ACTIONS from './LoginsTypes';

export const doLogin = (history, values) => {
  return dispatch => {
    console.log('tou em actions', values);
    history.push('/main');
  };
};

export const goToRegister = () => {
  console.log('goToRegister');
};
