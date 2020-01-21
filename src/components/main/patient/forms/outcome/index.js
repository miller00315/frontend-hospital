import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import ControlSelect from '../../../../commons/ControlSelect';
import ControlCustom from '../../../../commons/ControlCustom';
import ControlTextInput from '../../../../commons/ControlTextInput';
import DatePicker from '../../../../commons/DatePicker';
import TimePicker from '../../../../commons/TimePicker';

import * as DISPATCHES from '../../../../../actions/OutcomeActions';

class Outcome extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  renderSelectedForm = (model, label) => (
    <div className="row border-div">
      <div className="col-12">
        <h5>{label}</h5>
      </div>
      <div className="col-12">
        <ControlCustom
          id={`${model}.date`}
          model={`.${model}.date`}
          label="Data"
          placeholder="Escolha a data"
          component={DatePicker}
        />
        <ControlCustom
          id={`${model}.time`}
          model={`.${model}.time`}
          label="Horário"
          placeholder="Escolha o horário"
          component={TimePicker}
        />
        <ControlTextInput
          id={`${model}.observation`}
          model={`.${model}.observation`}
          label="Observações"
          placeholder="Insira informações adicinais"
        />
      </div>
    </div>
  );

  renderOutcomeForm = () => {
    switch (this.props.outcome) {
      case 'alta':
        return this.renderSelectedForm('medical_release', 'Alta');
      case 'obito':
        return this.renderSelectedForm('death', 'Óbito');
      case 'uti':
        return this.renderSelectedForm('uti', 'UTI');
      default:
        return false;
    }
  };

  onChangeOutCome = event => {
    event.preventDefault();
    this.props.changeOutcome(event.target.value);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              model="outcome"
              onSubmit={values => this.props.doRegister(values)}
            >
              <div className="row border-div">
                <div className="col-12">
                  <h5>Desfecho</h5>
                </div>
                <div className="col-12">
                  <ControlSelect
                    model=".outcome"
                    id="outcome"
                    label="Desfecho"
                    options={this.props.outcomeTypes}
                    onChange={this.onChangeOutCome}
                  />
                  {this.renderOutcomeForm()}
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
                    model="finalApproachOne"
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

const mapStateToProps = state => ({ ...state.OutcomeReducer });

export default {
  view: connect(mapStateToProps, { ...DISPATCHES })(Outcome),
};
