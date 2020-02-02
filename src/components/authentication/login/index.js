import React from 'react';
import { connect } from 'react-redux';
import { Form, Errors } from 'react-redux-form';
import { Link, withRouter } from 'react-router-dom';
import * as _ACTIONS from '../../../actions/LoginActions';
import ControlTextInput from '../../commons/ControlTextInput';

const renderForm = props => (
  <Form model="login" onSubmit={values => props.doLogin(props.history, values)}>
    <div className="row">
      <div className="col-12">
        <ControlTextInput
          id="email"
          model=".email"
          label="Usuário"
          type="email"
          placeholder="Insira seu email"
        />
        <ControlTextInput
          id="password"
          model=".password"
          label="Senha"
          type="password"
          placeholder="Pelo menos 6 caracteres"
        />
      </div>
    </div>
    <div className="row">
      <div className="col-lg-3 col-sm-12">
        <button type="submit" className="button">
          Entrar
        </button>
      </div>
    </div>
  </Form>
);

const Login = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <h2>Bem vindo ao SEPSE</h2>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-4 border-div">{renderForm(props)}</div>
        <div className="col-12">
          <Link to="/register">
            <button className="button outline">
              Caso voce ainda não tenha registro, registre-se aqui
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapSateToProps = state => ({ ...state.LoginReducer });

export default withRouter(connect(mapSateToProps, { ..._ACTIONS })(Login));
