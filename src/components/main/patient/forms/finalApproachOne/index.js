import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import ControlSelect from '../../../../commons/ControlSelect';

import * as FINAL_APPROACH_ONE_ACTIONS from '../../../../../actions/FinalApproachOneActions';

class FinalApproachOne extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              model="finalApproachOne"
              onSubmit={values => this.props.doRegister(values)}
            >
              <div className="row border-div">
                <div className="col-12">
                  <h5>Abordagem final 1 após 01-24h</h5>
                </div>
                <div className="col-12">
                  <ControlSelect
                    model=".sofa_snc"
                    id="sofa_snc"
                    label="SOFA SNC"
                    options={this.props.sofa_snc}
                  />
                  <ControlSelect
                    model=".sofa_res"
                    id="sofa_res"
                    label="SOFA RES"
                    options={this.props.sofa_res}
                  />
                  <ControlSelect
                    model=".sofa_cardio"
                    id="sofa_cardio"
                    label="SOFA CARDIO"
                    options={this.props.sofa_cardio}
                  />
                  <ControlSelect
                    model=".sofa_hep"
                    id="sofa_hep"
                    label="SOFA HEP"
                    options={this.props.sofa_hep}
                  />
                  <ControlSelect
                    model=".sofa_renal"
                    id="sofa_renal"
                    label="SOFA RENAL"
                    options={this.props.sofa_renal}
                  />
                  <ControlSelect
                    model=".sofa_coag"
                    id="sofa_coag"
                    label="SOFA COAG"
                    options={this.props.sofa_coag}
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

const mapStateToProps = state => ({ ...state.FinalApproachOneReducer });

export default {
  view: connect(mapStateToProps, { ...FINAL_APPROACH_ONE_ACTIONS })(
    FinalApproachOne
  ),
};
