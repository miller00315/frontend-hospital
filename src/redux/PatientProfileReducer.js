import * as ACTIONS from '../actions/ProfilePatientTypes';

const INITIAL_STATE = {
  showModal: false,
  patient: null,
  cities: [
    { id: 1, value: 'pocos_de_caldas', label: 'Poços de Caldas' },
    { id: 2, value: 'lavras', label: 'Lavras' },
  ],
  states: [{ id: 1, value: 'MG', label: 'Minas Gerais' }],
  genres: [
    { id: 1, value: 'male', label: 'Masculino' },
    { id: 2, value: 'female', label: 'Feminino' },
  ],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_MODAL:
      return { ...state, showModal: true };
    case ACTIONS.HIDE_MODAL:
      return { ...state, showModal: false };
    default:
      return { ...state };
  }
};
