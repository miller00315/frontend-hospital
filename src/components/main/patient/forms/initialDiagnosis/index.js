import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Control } from 'react-redux-form';
import ControlSelect from '../../../../commons/ControlSelect';
import ControlTextInput from '../../../../commons/ControlTextInput';

import * as DISPATCHES from '../../../../../actions/InitialDiagnosisActions';

class InitialDiagnosis extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form
              model="initialDiagnosis"
              onSubmit={values => this.props.doRegister(values)}
            >
              <div className="row border-div">
                <div className="col-12">
                  <h5>Quadro numeração do SOFA</h5>
                </div>
                <div className="col-12">
                  <ControlSelect
                    model=".foco"
                    id="foco"
                    label="Foco"
                    options={this.props.foco}
                  />
                  <ControlTextInput
                    model=".cid"
                    id="cid"
                    label="CID"
                    placeholder="Insira aqui o CID"
                  />
                  <ControlSelect
                    model=".sirs_fr"
                    id="sirs_fr"
                    label="SIRS FR"
                    options={this.props.sirsFr}
                  />
                  <ControlSelect
                    model=".sirs_pa"
                    id="sirs_pa"
                    label="SIRS PA"
                    options={this.props.sirsPa}
                  />
                  <ControlSelect
                    model=".sirstcorp"
                    id="sirstcorp"
                    label="SIRSTCORP"
                    options={this.props.sirtcorp}
                  />
                  <ControlSelect
                    model=".sirs_leuco"
                    id="sirs_leuco"
                    label="SIRS LEUCO"
                    options={this.props.sirsLeuco}
                  />
                  <ControlSelect
                    model=".qsofa_fr_up_22"
                    id="qsofa_fr_up_22"
                    label="qSOFA - FR > 22"
                    options={this.props.qsofaFrUp22}
                  />
                  <ControlSelect
                    model=".qsofa_pas_less_100"
                    id="qsofa_pas_less_100"
                    label="qSOFA - PAS < 100"
                    options={this.props.qsofaPasLess100}
                  />
                  <ControlSelect
                    model=".qsofa_egc_less_13"
                    id="qsofa_egc_less_13"
                    label="qSOFA - EGC < 13"
                    options={this.props.qsofaEgcLess13}
                  />
                  <ControlSelect
                    model=".sofa_snc"
                    id="sofa_snc"
                    label="SOFA SNC"
                    options={this.props.sofaSnc}
                  />
                  <ControlSelect
                    model=".sofa_res"
                    id="sofa_res"
                    label="SOFA RES"
                    options={this.props.sofaRes}
                  />
                  <ControlSelect
                    model=".sofa_cardio"
                    id="sofa_cardio"
                    label="SOFA CARDIO"
                    options={this.props.sofaCardio}
                  />
                  <ControlSelect
                    model=".sofa_hep"
                    id="sofa_hep"
                    label="SOFA HEP"
                    options={this.props.sofaHep}
                  />
                  <ControlSelect
                    model=".sofa_renal"
                    id="sofa_renal"
                    label="SOFA RENAL"
                    options={this.props.sofaRenal}
                  />
                  <ControlSelect
                    model=".sofa_coag"
                    id="sofa_coag"
                    label="SOFA COAG"
                    options={this.props.sofaCoag}
                  />
                  <ControlTextInput
                    model=".sugestive_history_infection"
                    id="sugestive_history_infection"
                    label="História sugestiva de infecção"
                    placeholder="Insira aqui a história sugestiva de infecção"
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

const mapStateToProps = state => ({ ...state.InitialDiagnosisReducer });

export default {
  view: connect(mapStateToProps, { ...DISPATCHES })(InitialDiagnosis),
};
