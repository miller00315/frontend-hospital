import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';

import ControlCustom from '../../../../commons/ControlCustom';
import TimePicker from '../../../../commons/TimePicker';
import DatePicker from '../../../../commons/DatePicker';
import * as ACTUATION_TIME_ACTIONS from '../../../../../actions/ActuationTimeActions';

class ActuationTimes extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              model="actuationTime"
              onSubmit={values => this.props.doRegister(values)}
            >
              <div className="row border-div">
                <div className="col-12">
                  <h5>Tempo de atuação</h5>
                </div>
                <div className="col-12 border-div">
                  <div className="row">
                    <div className="col-12">
                      <h5>Inicio dos sintomas</h5>
                    </div>
                  </div>
                  <ControlCustom
                    id="symptoms_start.date"
                    model=".symptoms_start.date"
                    label="Data de Início"
                    placeholder="Escolha a data de início"
                    component={DatePicker}
                  />
                  <ControlCustom
                    id="symptoms_start.time"
                    model=".symptoms_start.time"
                    label="Horário de Início"
                    placeholder="Escolha o horário"
                    component={TimePicker}
                  />
                </div>
                <div className="col-12 border-div">
                  <div className="row">
                    <div className="col-12">
                      <h5>Abertura do protocolo</h5>
                    </div>
                  </div>
                  <div className="col-12">
                    <ControlCustom
                      id="protocol_open.date"
                      model=".protocol_open.date"
                      label="Data de Início"
                      placeholder="Escolha a data de início"
                      component={DatePicker}
                    />
                    <ControlCustom
                      id="protocol_open.time"
                      model=".protocol_open.time"
                      label="Horário de Início"
                      placeholder="Escolha o horário"
                      component={TimePicker}
                    />
                  </div>
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
                  <Control.reset
                    model="actuationTime"
                    className="button outline"
                  >
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

const mapStateToProps = state => ({ ...state.ActuationTimeReducer });

export default {
  view: connect(mapStateToProps, { ...ACTUATION_TIME_ACTIONS })(ActuationTimes),
};
