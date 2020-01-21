import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import ControlSelect from '../../../../commons/ControlSelect';
import ControlTextInput from '../../../../commons/ControlTextInput';
import ControlCustom from '../../../../commons/ControlCustom';
import DatePicker from '../../../../commons/DatePicker';
import TimePicker from '../../../../commons/TimePicker';

import * as ANTIBIOTIC_ACTIONS from '../../../../../actions/AntibioticActions';

class Antibiotic extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              model="antibiotic"
              onSubmit={values => this.props.doRegister(values)}
            >
              <div className="row border-div">
                <div className="col-12">
                  <h5>Antibiótico</h5>
                </div>
                <div className="col-12">
                  <ControlSelect
                    model=".prescribid_atb"
                    id="prescribid_atb"
                    label="Precrito Atb"
                    options={this.props.prescribid_atb}
                  />
                  <ControlSelect
                    model=".atb_type_1"
                    id="atb_type_1"
                    label="ATB tipo 1"
                    options={this.props.atb_type_1}
                  />
                  <ControlSelect
                    model=".atb_type_2"
                    id="atb_type_2"
                    label="ATB tipo 2"
                    options={this.props.atb_type_2}
                  />
                  <ControlSelect
                    model=".atb_type_3"
                    id="atb_type_3"
                    label="ATB tipo 3"
                    options={this.props.atb_type_3}
                  />
                  <ControlSelect
                    model=".atb_type_4"
                    id="atb_type_4"
                    label="ATB tipo 4"
                    options={this.props.atb_type_4}
                  />
                  <ControlSelect
                    model=".atb_type_5"
                    id="atb_type_5"
                    label="ATB tipo 5"
                    options={this.props.atb_type_5}
                  />
                  <ControlSelect
                    model=".atb_type_6"
                    id="atb_type_6"
                    label="ATB tipo 6"
                    options={this.props.atb_type_6}
                  />
                  <ControlSelect
                    model=".atb_type_7"
                    id="atb_type_7"
                    label="ATB tipo 7"
                    options={this.props.atb_type_7}
                  />
                  <ControlSelect
                    model=".atb_type_8"
                    id="atb_type_8"
                    label="ATB tipo 8"
                    options={this.props.atb_type_8}
                  />
                  <ControlSelect
                    model=".atb_type_9"
                    id="atb_type_9"
                    label="ATB tipo 9"
                    options={this.props.atb_type_9}
                  />
                  <div className="row border-div">
                    <div className="col-12">
                      <h5>1º dose de antibiótico</h5>
                    </div>
                    <div className="col-12">
                      <ControlCustom
                        id="date_first_dose"
                        model=".date_first_dose"
                        label="Data primeira dose de antibiótico"
                        placeholder="Escolha a data da primeira dose"
                        component={DatePicker}
                      />
                      <ControlCustom
                        id="time_first_dose"
                        model=".time_first_dose"
                        label="Horário primeira dose de antibiótico"
                        placeholder="Escolha o horário da primeira dose de antibiótico"
                        component={TimePicker}
                      />
                      <ControlTextInput
                        id="previus_use_atb"
                        model=".previus_use_atb"
                        label="Uso previo de atb"
                        placeholder="Insira aqui informações sobre o uso do ATB"
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
                  <Control.reset model="antibiotic" className="button outline">
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

const mapStateToProps = state => ({ ...state.AntibioticReducer });

export default {
  view: connect(mapStateToProps, { ...ANTIBIOTIC_ACTIONS })(Antibiotic),
};
