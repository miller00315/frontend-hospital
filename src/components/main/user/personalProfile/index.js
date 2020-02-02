import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header, Layout, Content, Navigation, Button } from 'react-mdl';
import * as DISPATCHES from '../../../../actions/UserActions';
import moment from 'moment';

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
            <button
              className="button transparent"
              onClick={() => this.props.history.goBack()}
            >
              Principal
            </button>
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
                          <div className="text-profile">{`Registrado em: ${moment(
                            user.createdAt
                          ).format('L')}`}</div>
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
