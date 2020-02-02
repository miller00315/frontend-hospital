import React, { Component } from 'react';
import { Header, Layout, Content, Navigation } from 'react-mdl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import * as DISPATCHES from '../../../../actions/PatientRegisterActions';
import RegisterPatientModal from './RegisterPatientModal';
import PatientForm from '../../../commons/forms/Patient';

class RegisterPatient extends Component {
  constructor(props) {
    super(props);
    this._onChangeState = this._onChangeState.bind(this);
  }

  componentDidMount() {
    if (this.props.location.state) {
      const { protocol } = this.props.location.state;
      this.props.fetchData(protocol);
    } else {
      this.props.fetchData(null);
    }
  }

  _onChangeState = event => {
    event.preventDefault();
    this.props.changeState(event.target.value);
  };

  render() {
    console.log(this.props);
    return (
      <Layout fixedHeader>
        <RegisterPatientModal />
        <Header
          title={
            <h5>
              Registrar paciente{' '}
              {`protocolo ${
                this.props.protocol ? this.props.protocol.protocol : ''
              }`}
            </h5>
          }
        >
          <Navigation>
            <Link to="/main">Principal</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="container">
            <div className="row border-div">
              <div className="col-10">
                <PatientForm
                  onSubmit={this.props.resgisterPatient}
                  genres={this.props.genres}
                  states={this.props.states}
                  cities={this.props.cities}
                  onChangeState={this._onChangeState}
                />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ ...state.RegisterPatientReducer });

export default withRouter(
  connect(mapStateToProps, { ...DISPATCHES })(RegisterPatient)
);
