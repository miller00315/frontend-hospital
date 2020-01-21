import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './components/authentication/login';
import Register from './components/authentication/register';
import Main from './components/main';
import RegisterPatient from './components/main/patient/registerPatient/index';
import MedicalRecords from './components/main/patient/medicalRecords';
import PatientsList from './components/main/patient/patientsList';
import PersonalProfile from './components/main/user/personalProfile';

import { ConfigureStore } from './redux';

const store = ConfigureStore();

export default props => {
  return (
    <Provider store={ConfigureStore(store)}>
      <BrowserRouter>
        <Route
          render={() => {
            return (
              <Switch>
                <Route path="/" exact={true} component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/main" component={Main} />
                <Route path="/register_patient" component={RegisterPatient} />
                <Route path="/medical_records" component={MedicalRecords} />
                <Route path="/patients_list" component={PatientsList} />
                <Route path="/user_profile" component={PersonalProfile} />
              </Switch>
            );
          }}
        />
      </BrowserRouter>
    </Provider>
  );
};
