import React from 'react';
import { connect } from 'react-redux';
import { Modal, ListGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

import { hideModal, goToScreen } from '../../actions/PatientListActions';

const renderProtocols = props =>
  props.protocols.map(item => (
    <ListGroup.Item
      key={item.id}
      action
      onClick={() =>
        props.goToScreen(props.history, '/medical_records', item, props.patient)
      }
    >
      <b>{item.title}</b>
    </ListGroup.Item>
  ));

const modal = props => {
  return (
    <Modal show={props.showModal} onHide={props.hideModal}>
      <Modal.Header closeButton>
        <Modal.Title>
          Protocolo para {props.patient ? props.patient.name : false}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="container">
          <div className="col-12">
            <ListGroup variant="flush">{renderProtocols(props)}</ListGroup>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
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

const mapStateToProps = state => ({
  protocols: state.PatientListReducer.protocols,
  showModal: state.PatientListReducer.showModal,
  protocol: state.PatientListReducer.protocol,
  patient: state.PatientListReducer.patient,
});
const mapDispatchesToProps = { hideModal, goToScreen };

export default withRouter(
  connect(mapStateToProps, mapDispatchesToProps)(modal)
);
