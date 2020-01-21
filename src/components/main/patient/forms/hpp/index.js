import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control, Errors } from 'react-redux-form';
import * as HPP_ACTIONS from '../../../../../actions/HPPActions';
import ControlSelect from '../../../../commons/ControlSelect';

class HPP extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              model="hpp"
              onSubmit={values => this.props.doRegister(values)}
            >
              <div className="row border-div">
                <div className="col-12">
                  <h5>HPP</h5>
                </div>
                <div className="col-12">
                  <ControlSelect
                    model=".dm"
                    id="dm"
                    label="DM"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".has"
                    id="has"
                    label="HAS"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".alcoholism"
                    id="alcoholism"
                    label="Alcoolismo"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".smoking"
                    id="smoking"
                    label="Fumante"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".ilicit_drugs"
                    id="ilicit_drugs"
                    label="Drogas ilícitas"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".ic"
                    id="ic"
                    label="IC"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".fa"
                    id="fa"
                    label="FA"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".renal_insufficiency"
                    id="renal_insufficiency"
                    label="Insuficiência Renal"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".dac"
                    id="dac"
                    label="DAC"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".bedridden"
                    id="bedridden"
                    label="Acamado"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".dpoc_asthma"
                    id="dpoc_asthma"
                    label="DPOC/ASMA"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".previus_avc"
                    id="previus_avc"
                    label="AVC prévio"
                    options={this.props.values}
                  />
                  <ControlSelect
                    model=".cid"
                    id="cid"
                    label="CID"
                    options={this.props.values}
                  />
                </div>
              </div>
              <div className="row border-div">
                <div className="col-12">
                  <h5>Ações</h5>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <button type="submit" className="button">
                    Salvar
                  </button>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <Control.reset model="hpp" className="button outline">
                    Limpar fomulário
                  </Control.reset>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ ...state.HPPReducer });

export default { view: connect(mapStateToProps, { ...HPP_ACTIONS })(HPP) };
