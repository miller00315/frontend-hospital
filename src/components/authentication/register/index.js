import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import * as REGISTER_ACTIONS from '../../../actions/ResgisterActions';
import ControlSelect from '../../commons/ControlSelect';
import ControlTextInput from '../../commons/ControlTextInput';
import { Header, Layout, Content, Navigation } from 'react-mdl';
import { Link, withRouter } from 'react-router-dom';

class Register extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderForm = () => (
    <Form
      model="user"
      onSubmit={values => this.props.doRegister(this.props.history, values)}
    >
      <div className="row border-div">
        <div className="col-12">
          <h5>Dados Pessoais</h5>
        </div>
        <div className="col-12">
          <ControlTextInput
            id="name"
            model=".name"
            label="Nome"
            placeholder="Insira aqui o seu primeiro nome"
          />
          <ControlTextInput
            id="surname"
            model=".surname"
            label="Sobrenome"
            placeholder="Insira aqui todo o seu sobrenome"
          />
          <ControlTextInput
            id="nickname"
            model=".nickname"
            label="Nome de usuário"
            placeholder="Insira aqui o seu usuário"
          />
          <ControlTextInput
            id="email"
            model=".email"
            label="Email"
            placeholder="Insira aqui o seu email"
          />
          <ControlTextInput
            id="phone"
            model=".phone"
            label="Telefone"
            placeholder="Insira aqui o seu telefone"
          />
          <ControlSelect
            model=".type"
            id="type"
            label="Tipo de usuário"
            options={this.props.types}
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

      <div className="row border-div">
        <div className="col-12">
          <h5>Endereço</h5>
        </div>
        <div className="col-12">
          <ControlSelect
            model=".address.state"
            id="address.state"
            label="Estado"
            options={this.props.states}
          />
          <ControlSelect
            model=".address.city"
            id="address.city"
            label="Cidade"
            options={this.props.cities}
          />
        </div>
      </div>
      <div className="row border-div text-center">
        <div className="col-lg-6 col-sm-12">
          <button type="submit" className="button">
            Registrar
          </button>
        </div>
        <div className="col-lg-6 col-sm-12">
          <Control.reset model="user" className="button outline">
            Limpar fomulário
          </Control.reset>
        </div>
      </div>
    </Form>
  );

  render() {
    return (
      <Layout fixedHeader>
        <Header title={<h5>Registre-se</h5>}>
          <Navigation>
            <Link to="/">Login</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="container">
            <div className="row">
              <div className="col-12">{this.renderForm()}</div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ ...state.RegisterReducer });

export default withRouter(connect(mapStateToProps, REGISTER_ACTIONS)(Register));
