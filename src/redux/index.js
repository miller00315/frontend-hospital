import { combineReducers, applyMiddleware, createStore } from 'redux';
import * as FORMS from './Forms';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import { reducer as toastr } from 'react-redux-toastr';

import LoginReducer from './LoginReducer';
import RegisterReducer from './RegisterReducer';
import MainReducer from './MainReducer';
import RegisterPatientReducer from './RegisterPatientReducer';
import HPPReducer from './HPPReducer';
import InitialApproachReducer from './InitialApproachReducer';
import ActuationTimeReducer from './ActuationTimeReducer';
import InitialDiagnosisReducer from './InitialDiagnosisReducer';
import LaboratoryReducer from './LaboratoryReducer';
import LactateReducer from './LactateReducer';
import AntibioticReducer from './AntibioticReducer';
import FinalApproachOneReducer from './FinalApproachOneReducer';
import FinalApproachTwoReducer from './FinalApproachTwoReducer';
import FinalApproachThreeReducer from './FinalApproachThreeReducer';
import OutcomeReducer from './OutcomeReducer';
import MedicalRecordsReducer from './MedicalRecordsReducer';
import PatientProfileReducer from './PatientProfileReducer';
import PatientListReducer from './PatientListReducer';
import UserReducer from './UserReducer';

export const ConfigureStore = () => {
  let middlewares = [thunk];

  if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger').logger;
    middlewares = [...middlewares, logger];
  }

  const store = createStore(
    combineReducers({
      toastr,
      LoginReducer,
      RegisterReducer,
      MainReducer,
      RegisterPatientReducer,
      HPPReducer,
      InitialApproachReducer,
      ActuationTimeReducer,
      InitialDiagnosisReducer,
      LaboratoryReducer,
      LactateReducer,
      AntibioticReducer,
      FinalApproachOneReducer,
      FinalApproachTwoReducer,
      FinalApproachThreeReducer,
      OutcomeReducer,
      MedicalRecordsReducer,
      PatientProfileReducer,
      PatientListReducer,
      UserReducer,
      ...createForms({ ...FORMS }),
    }),
    applyMiddleware(...middlewares)
  );

  return store;
};
