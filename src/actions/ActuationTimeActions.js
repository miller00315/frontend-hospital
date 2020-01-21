import * as ACTIONS from './ActuationTimeTypes';

export const doRegister = values => {
  return dispatch => {
    console.log(values);
  };
};

export const fetchData = () => {
  return dispatch => {
    console.log('fetch_data');
  };
};
