import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Layout, Content, Navigation } from 'react-mdl';
import { Link } from 'react-router-dom';
import * as DISPATCHES from '../../../../actions/UserActions';

class PersonalProfile extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    const { user } = this.props;
    return user ? (
      <Layout fixedHeader>
        <Header title={<h5>Meu perfil</h5>}>
          <Navigation>
            <Link to="/main">Principal</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="container">
            <div className="row border-div">
              <div className="col-12">
                <h5>Perfil</h5>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <div className="row border-div">
                      <div className="col-12">
                        <h5>Dados pessoais</h5>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="text-profile">{`Nome: ${user.name} ${user.surname}`}</div>
                        </div>
                        <div className="row">
                          <div className="text-profile">{`Email: ${user.email}`}</div>
                        </div>
                        <div className="row">
                          <div className="text-profile">{`Tipo: ${user.type}`}</div>
                        </div>
                        <div className="row">
                          <div className="text-profile">{`Telefone: ${user.phone}`}</div>
                        </div>
                      </div>
                    </div>
                    <div className="row border-div">
                      <div className="col-12">
                        <h5>Endereço</h5>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="text-profile">{`Cidade: ${user.address.city}`}</div>
                        </div>
                        <div className="row">
                          <div className="text-profile">{`Estado: ${user.address.state}`}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    ) : (
      <h5>Carregando</h5>
    );
  }
}

const mapStateToProps = state => ({
  ...state.UserReducer,
});

export default withRouter(
  connect(mapStateToProps, { ...DISPATCHES })(PersonalProfile)
);
