import React, { Component } from 'react';
import { Header, Layout, Drawer, Content, Navigation, Button } from 'react-mdl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LazyLoadModule } from '../../../../utils/Lazy';
import * as DISPATCHES from '../../../../actions/MedicalRecordsActions';

class MedicalRecords extends Component {
  constructor(props) {
    super(props);
    this.state = { modules: [], active: false };
  }

  componentDidMount() {
    const { protocol, patient } = this.props.location.state;
    this.props.fetchData(protocol, patient);
  }

  componentDidUpdate() {
    if (this.state.modules.length === 0 && this.props.modules) {
      const modules = this.props.modules.map(item => (
        <LazyLoadModule
          key={item.id}
          resolve={() => import(`../forms/${item.module}`)}
        />
      ));

      this.setState({ modules, active: modules[0] });
    }
  }

  toggleModule = id => {
    const result = this.state.modules.find(item => item.key === id);
    this.setState({ active: result });
  };

  _setContent = activeTab => this.setState({ activeTab });

  _renderButtons = () =>
    this.props.modules.map(item => (
      <Button key={item.id} onClick={() => this.toggleModule(item.id)}>
        <b>{item.label}</b>
      </Button>
    ));

  _renderDrawer = () => (
    <Drawer
      title={`Protocolo ${
        this.props.protocol ? this.props.protocol.protocol : ''
      }`}
    >
      <Navigation>{this.props.modules && this._renderButtons()}</Navigation>
      <div className="row">
        <div className="col-12 text-center">
          {this.props.modules && (
            <button className="button">Finalizar protocolo</button>
          )}
        </div>
      </div>
    </Drawer>
  );

  render() {
    return (
      <Layout fixedHeader fixedDrawer>
        <Header
          title={
            <h5>{`Prontuário de ${
              this.props.patient ? this.props.patient.name : false
            }`}</h5>
          }
        >
          <Navigation>
            <Link to="/main">Principal</Link>
          </Navigation>
        </Header>
        {this._renderDrawer()}
        <Content>
          <div className="page-content">
            <div className="container">{this.state.active}</div>
          </div>
        </Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({ ...state.MedicalRecordsReducer });

export default connect(mapStateToProps, { ...DISPATCHES })(MedicalRecords);
