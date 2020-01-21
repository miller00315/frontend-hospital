import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import ControlSelect from '../../../../commons/ControlSelect';
import * as DISPATCHES from '../../../../../actions/InitialApproachActions';

class InitialApproach extends Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              model="initialApproach"
              onSubmit={values => console.log(values)}
            >
              <div className="row border-div">
                <div className="col-12">
                  <h5>Abordagem inicial</h5>
                </div>
                <div className="col-12">
                  <ControlSelect
                    model=".volume"
                    id="volume"
                    label="Volume"
                    options={this.props.volume}
                  />
                  <ControlSelect
                    model=".vasoactive_drugs"
                    id="vasoactive_drugs"
                    label="Drogas vasoativas"
                    options={this.props.vasoActiveDrugs}
                  />
                  <ControlSelect
                    model=".vasoactive_drugs_name"
                    id="vasoactive_drugs_name"
                    label="Nome da droga vaso ativa"
                    options={this.props.vasoActiveDrugsName}
                  />
                  <ControlSelect
                    model=".hemo_transfusion"
                    id="hemo_transfusion"
                    label="Hemotransfusão"
                    options={this.props.hemoTransfusion}
                  />
                  <ControlSelect
                    model=".mecanical_ventilation"
                    id="mecanical_ventilation"
                    label="Ventilação mecânica"
                    options={this.props.mecanicalVentilation}
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

const mapSateToProps = state => ({ ...state.InitialApproachReducer });

export default {
  view: connect(mapSateToProps, { ...DISPATCHES })(InitialApproach),
};
