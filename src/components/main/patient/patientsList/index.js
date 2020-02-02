import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  Header,
  Layout,
  Card,
  CardText,
  CardActions,
  CardTitle,
  Content,
  Navigation,
  Button,
} from 'react-mdl';
import moment from 'moment';

import * as DISPATCHES from '../../../../actions/PatientListActions';
import SelectProtocolModal from '../../../modals/SelectProtocolModal';

class PatientList extends Component {
  componentDidMount() {
    if (this.props.location.state) {
      const { protocol } = this.props.location.state;
      this.props.fetchData(protocol);
    } else {
      this.props.fetchData(null);
    }
  }

  _renderUsers = items => {
    return items.map(item => (
      <div key={item._id} className="col-lg-4 col-sm-12">
        <Card
          shadow={0}
          style={{
            width: '256px',
            height: '256px',
            background: '#3F51B5',
            marginBottom: 10,
          }}
        >
          <CardTitle expand style={{ alignItems: 'flex-start', color: '#fff' }}>
            <h4 style={{ marginTop: '0' }}>{`${item.name} ${item.surname}`}</h4>
          </CardTitle>
          <CardText
            style={{ color: '#fff' }}
          >{`Registro: ${item.register}`}</CardText>
          <CardText style={{ color: '#fff' }}>{`Data entrada: ${moment(
            item.register_date
          ).format('L')}`}</CardText>
          <CardText
            style={{ color: '#fff' }}
          >{`Cidade: ${item.address.city}`}</CardText>
          <CardActions border className="actions">
            {this.props.protocol ? (
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
                onClick={() =>
                  this.props.goToScreen(
                    this.props.history,
                    '/medical_records',
                    this.props.protocol,
                    item
                  )
                }
              >
                <b>{`Protocolo ${this.props.protocol.title}`}</b>
              </Button>
            ) : (
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
                onClick={() => this.props.fetchProtocols(item)}
              >
                <b>Escolher protocolo</b>
              </Button>
            )}
          </CardActions>
        </Card>
      </div>
    ));
  };

  render() {
    return (
      <Layout fixedHeader>
        <SelectProtocolModal />
        <Header title={<h5>Pacientes</h5>}>
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
            <div className="row spaced-div">
              <div className="col-lg-6 col-sm-12">
                <input
                  className="form-control"
                  value={this.props.searchText}
                  placeholder="Procurar paciente"
                  onChange={this.props.searchPatient}
                />
              </div>
            </div>
            <div className="row spaced-div">
              {this.props.searchText.length > 0
                ? this._renderUsers(this.props.searchResult)
                : this._renderUsers(this.props.patients)}
            </div>
          </div>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ ...state.PatientListReducer });

export default withRouter(
  connect(mapStateToProps, { ...DISPATCHES })(PatientList)
);
