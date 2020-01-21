import * as ACTIONS from '../actions/InitialDiagnosisTypes';

const INITIAL_STATE = {
  foco: [],
  sirsFr: [],
  sirsPa: [],
  sirtcorp: [],
  sirsLeuco: [],
  qsofaFrUp22: [],
  qsofaPasLess100: [],
  qsofaEgcLess13: [],
  sofaSnc: [],
  sofaRes: [],
  sofaCardio: [],
  sofaHep: [],
  sofaRenal: [],
  sofaCoag: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTIONS.FETCH_DATA_SUCCESS:
      return { ...state, ...action.payload };
    default:
      return { ...state };
  }
};
