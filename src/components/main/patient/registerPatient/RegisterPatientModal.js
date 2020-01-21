import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import {
  hideModal,
  goToScreen,
} from '../../../../actions/PatientRegisterActions';
import { withRouter } from 'react-router-dom';

const modal = props => {
  return (
    <Modal show={props.showModal} onHide={props.hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>O paciente foi registrado</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <button className="button outline" onClick={props.hideModal}>
          Fechar
        </button>
        {props.protocol && (
          <button
            className="button"
            onClick={() =>
              props.goToScreen(
                props.history,
                '/medical_records',
                props.protocol,
                props.patient
              )
            }
          >
            Ir para prontuário
          </button>
        )}
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => {
  const { showModal, patient, protocol } = state.RegisterPatientReducer;

  return { showModal, patient, protocol };
};

export default withRouter(
  connect(mapStateToProps, { hideModal, goToScreen })(modal)
);
