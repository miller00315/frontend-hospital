import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { hideModal } from '../../../../../actions/ProfilePatientActions';
import { withRouter } from 'react-router-dom';
import PatientForm from '../../../../commons/forms/Patient';

const modal = props => {
  return (
    <Modal show={props.showModal} onHide={props.hideModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Editar paciente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <PatientForm
            onSubmit={props.hideModal}
            genres={props.genres}
            states={props.states}
            cities={props.cities}
            patient={props.patient}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
};

const mapStateToProps = state => {
  const {
    showModal,
    genres,
    states,
    cities,
    patient,
  } = state.PatientProfileReducer;

  return { showModal, genres, states, cities, patient };
};

export default withRouter(connect(mapStateToProps, { hideModal })(modal));
