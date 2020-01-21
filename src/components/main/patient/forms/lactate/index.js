import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import ControlSelect from '../../../../commons/ControlSelect';
import ControlTextInput from '../../../../commons/ControlTextInput';
import ControlCustom from '../../../../commons/ControlCustom';
import DatePicker from '../../../../commons/DatePicker';
import TimePicker from '../../../../commons/TimePicker';

import * as DISPATCHES from '../../../../../actions/LactateActions';

class Lactate extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              model="lactate"
              onSubmit={values => this.props.doRegister(values)}
            >
              <div className="row border-div">
                <div className="col-12">
                  <h5>Lactato</h5>
                </div>
                <div className="col-12">
                  <div className="row border-div">
                    <div className="col-12">
                      <h5>Primeiro Lactato</h5>
                    </div>
                    <div className="col-12">
                      <ControlCustom
                        id="date_result_first_lactate"
                        model=".date_result_first_lactate"
                        label="Data resultado primeiro lactato"
                        placeholder="Escolha a data do primeiro lactato"
                        component={DatePicker}
                      />
                      <ControlSelect
                        model=".result_thirty_minutes"
                        id="result_thirty_minutes"
                        label="Trinta minutos"
                        options={this.props.thirty_minutes}
                      />
                      <ControlTextInput
                        id="result_thirty_minutes"
                        model=".result_thirty_minutes"
                        label="Resultado trinta minutos"
                        placeholder="Insira aqui resultado após trinta minutos"
                      />
                    </div>
                  </div>
                  <div className="row border-div">
                    <div className="col-12">
                      <h5>Segundo Lactato</h5>
                    </div>
                    <div className="col-12">
                      <ControlCustom
                        id="date_result_second_lactate"
                        model=".date_result_second_lactate"
                        label="Data resultado segundo lactato"
                        placeholder="Escolha a data do segundo lactato"
                        component={DatePicker}
                      />
                      <ControlCustom
                        id="time_result_second_lactate"
                        model=".time_result_second_lactate"
                        label="Horário resultado segundo lactato"
                        placeholder="Escolha o horário do segundo lactato"
                        component={TimePicker}
                      />
                      <ControlSelect
                        model=".sixth_hour"
                        id="sixth_hour"
                        label="Sexta hora"
                        options={this.props.sixth_hour}
                      />
                      <ControlTextInput
                        id="result_sixth_hour"
                        model=".result_sixth_hour"
                        label="Resultado sexta hora"
                        placeholder="Insira aqui resultado da sexta horas"
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
                  <Control.reset model="lactate" className="button outline">
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

const mapStateToProps = state => ({ ...state.LactateReducer });

export default {
  view: connect(mapStateToProps, { ...DISPATCHES })(Lactate),
};
