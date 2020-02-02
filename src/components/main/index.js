import React, { Component } from 'react';
import {
  Header,
  Layout,
  Content,
  Navigation,
  Button,
  Card,
  CardTitle,
  CardActions,
  CardText,
} from 'react-mdl';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import * as DISPATCHES from '../../actions/MainActions';
import SelectPatientModal from '../modals/SelectPatientModal';

class Main extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  _renderProtocolCard = item => (
    <div key={item._id} className="col-lg-4 col-sm-12 spaced-div text-center">
      <Card shadow={0} style={{ width: '256px', background: '#3F51B5' }}>
        <CardTitle
          expand
          style={{
            color: '#fff',
            background: 'bottom right 15% no-repeat transparent',
          }}
        >
          {item.title}
        </CardTitle>
        <CardText style={{ alignItems: 'flex-start', color: '#fff' }}>
          {item.description}
        </CardText>
        <CardActions border>
          <Button
            colored
            style={{
              color: '#6c757d',
              backgroundColor: '#fff',
              borderRadius: 5,
              borderColor: '#D6DBDF ',
              borderWidth: 1,
              // boxShadow: '1px 1px 1px 1px #919E9E9E',
            }}
            onClick={() => {
              console.log(item);
              this.props.selectProtocol(item);
            }}
          >
            <b>{`Escolher ${item.title}`}</b>
          </Button>
        </CardActions>
      </Card>
    </div>
  );

  _renderProtocols = () =>
    this.props.protocols.map(item => this._renderProtocolCard(item));

  _renderProtocolsBySearchResult = () =>
    this.props.results.map(item => this._renderProtocolCard(item));

  render() {
    const { user } = this.props;
    return (
      <Layout fixedHeader>
        <SelectPatientModal />
        <Header title={<h5>Principal</h5>}>
          <Navigation>
            <Link to="/register_patient">Novo paciente</Link>
            <Link to="/patients_list">Ver pacientes</Link>
            <Link to="/user_profile">{`Perfil de ${
              user ? user.name : ''
            }`}</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content">
            <div className="container">
              <div className="col">
                <div className="row spaced-div">
                  <div className="row col-lg-6 col-sm-12">
                    <input
                      className="form-control"
                      value={this.props.searchText}
                      placeholder="Procurar protocolo"
                      onChange={this.props.changeTextSearch}
                    />
                  </div>
                </div>
              </div>
              <div className="row">{this._renderProtocols()}</div>
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ ...state.MainReducer });

export default withRouter(connect(mapStateToProps, { ...DISPATCHES })(Main));
