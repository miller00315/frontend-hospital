import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { goToScreen, hideModal } from '../../actions/MainActions';
import { withRouter } from 'react-router-dom';

const modal = props => {
  return (
    <Modal show={props.showModal} onHide={props.hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>{`Protocolo escolhido ${
          props.protocol ? props.protocol.protocol : ''
        }`}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Escolha uma das opções abaixo</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="button outline"
          onClick={() =>
            props.goToScreen(props.history, '/patients_list', props.protocol)
          }
        >
          Paciente já cadastrado
        </button>
        <button
          className="button"
          onClick={() =>
            props.goToScreen(props.history, '/register_patient', props.protocol)
          }
        >
          Novo paciente
        </button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => {
  const { showModal, protocol } = state.MainReducer;

  return { showModal, protocol };
};

export default withRouter(
  connect(mapStateToProps, { hideModal, goToScreen })(modal)
);
