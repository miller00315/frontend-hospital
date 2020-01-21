import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as PROFILE_ACTIONS from '../../../../../actions/ProfilePatientActions';
import EditPatientModal from './EditPatientModal';

class PatientProfile extends Component {
  render() {
    return (
      <div className="container">
        <EditPatientModal />
        <div className="row border-div">
          <div className="col-12">
            <h5>Perfil</h5>
          </div>
          <div className="col-12">
            <div className="row border-div">
              <div className="col-12">
                <h5>Dados Pessoais</h5>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="text-profile">{`Nome: ${this.props.patient.name} ${this.props.patient.surname}`}</div>
                </div>
                <div className="row">
                  <div className="text-profile">{`Registro: ${this.props.patient.register}`}</div>
                </div>
                <div className="row">
                  <div className="text-profile">{`Data entrada: ${this.props.patient.register_date}`}</div>
                </div>
                <div className="row">
                  <div className="text-profile">{`Hora entrada: ${this.props.patient.register_time}`}</div>
                </div>
                <div className="row">
                  <div className="text-profile">{`Data nascimento: ${this.props.patient.birth_date}`}</div>
                </div>
                <div className="row">
                  <div className="text-profile">{`Sexo: ${this.props.patient.genre}`}</div>
                </div>
                <div className="row">
                  <div className="text-profile">{`Documento: ${this.props.patient.document}`}</div>
                </div>
              </div>
            </div>
            <div className="row border-div">
              <div className="col-12">
                <h5>Contato</h5>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="text-profile">{`Responsável: ${this.props.patient.contact.responsible}`}</div>
                </div>
                <div className="row">
                  <div className="text-profile">{`Telefone: ${this.props.patient.contact.phone}`}</div>
                </div>
                <div className="row">
                  <div className="text-profile">{`Email: ${this.props.patient.contact.email}`}</div>
                </div>
              </div>
            </div>
            <div className="row border-div">
              <div className="col-12">
                <h5>Endereço</h5>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="text-profile">{`${this.props.patient.address.street} 
                  ${this.props.patient.address.number}, 
                  ${this.props.patient.address.complement}, 
                  ${this.props.patient.address.location},
                  ${this.props.patient.address.city}-
                  ${this.props.patient.address.state}`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12">
          <button
            type="submit"
            className="button"
            onClick={() => this.props.editUser()}
          >
            Editar informações
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  patient: state.MedicalRecordsReducer.patient,
});

export default {
  view: connect(mapStateToProps, { ...PROFILE_ACTIONS })(PatientProfile),
};
