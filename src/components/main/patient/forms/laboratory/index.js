import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import ControlSelect from '../../../../commons/ControlSelect';
import ControlTextInput from '../../../../commons/ControlTextInput';
import ControlCustom from '../../../../commons/ControlCustom';
import DatePicker from '../../../../commons/DatePicker';
import TimePicker from '../../../../commons/TimePicker';

import * as DISPATCHES from '../../../../../actions/LaboratoryActions';

class Laboratory extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              model="laboratory"
              onSubmit={values => this.props.doRegister(values)}
            >
              <div className="row border-div">
                <div className="col-12">
                  <h5>Laboratório</h5>
                </div>
                <div className="col-12">
                  <div className="row border-div">
                    <div className="col-12">
                      <ControlSelect
                        model=".sepse_kit"
                        id="sepse_kit"
                        label="Kit Sepse"
                        options={this.props.sepse_kit}
                      />
                    </div>
                  </div>
                  <div className="row border-div">
                    <div className="col-12">
                      <h5>Coleta</h5>
                    </div>
                    <div className="col-12">
                      <ControlSelect
                        model=".collect.type"
                        id="collect.type"
                        label="Tipo de coleta"
                        options={this.props.collect_type}
                      />
                      <ControlCustom
                        id="collect.date"
                        model=".collect.date"
                        label="Data da coleta"
                        placeholder="Escolha a data da coleta"
                        component={DatePicker}
                      />
                      <ControlCustom
                        id="collect.time"
                        model=".collect.time"
                        label="Horário Coleta"
                        placeholder="Escolha o horário"
                        component={TimePicker}
                      />
                    </div>
                  </div>
                  <div className="row border-div">
                    <div className="col-12">
                      <h5>Hemocultura</h5>
                    </div>
                    <div className="col-12">
                      <ControlTextInput
                        id="hemo_cult_before_atb.result"
                        model=".hemo_cult_before_atb.result"
                        label="Resultado hemocultura"
                        placeholder="Insira aqui resultado da hemocultura"
                      />
                      <ControlCustom
                        id="hemo_cult_before_atb.date"
                        model=".hemo_cult_before_atb.date"
                        label="Data da coleta"
                        placeholder="Escolha a data da hemocultura"
                        component={DatePicker}
                      />
                      <ControlCustom
                        id="hemo_cult_before_atb.time"
                        model=".hemo_cult_before_atb.time"
                        label="Horário hemocultura"
                        placeholder="Escolha o horário"
                        component={TimePicker}
                      />
                    </div>
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

const mapStateToProps = state => ({ ...state.LaboratoryReducer });

export default {
  view: connect(mapStateToProps, { ...DISPATCHES })(Laboratory),
};
