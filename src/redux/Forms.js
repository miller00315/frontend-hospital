export const patient = {
  id: '',
  name: '',
  surname: '',
  register: '',
  birth_date: '',
  genre: '',
  document: '',
  contact: {
    responsible: '',
    phone: '',
    email: '',
  },
  address: {
    city: '',
    state: '',
    street: '',
    location: '',
    complement: '',
    number: '',
  },
  observation: '',
};

export const actuationTime = {
  symptoms_start: {
    date: '',
    time: { hour: null, minute: null },
  },
  protocol_open: {
    date: '',
    time: { hour: null, minute: null },
  },
};

export const initialDiagnosis = {
  foco: '',
  cid: '',
  sirs_fr: '',
  sirs_pa: '',
  sirstcorp: '',
  sirs_leuco: '',
  qsofa_fr_up_22: '',
  qsofa_pas_less_100: '',
  qsofa_egc_less_13: '',
  sofa_snc: '',
  sofa_res: '',
  sofa_cardio: '',
  sofa_hep: '',
  sofa_renal: '',
  sofa_coag: '',
  sugestive_history_infection: '',
};

export const laboratory = {
  sepse_kit: '',
  collect: {
    type: '',
    date: '',
    time: { hour: null, minute: null },
  },
  hemo_cult_before_atb: {
    result: '',
    date: '',
    time: { hour: null, minute: null },
  },
};

export const lactate = {
  date_result_first_lactate: '',
  time_result_first_lactate: '',
  thirty_minutes: '',
  result_thirty_minutes: '',
  date_result_second_lactate: '',
  time_result_second_lactate: '',
  sixth_hour: '',
  result_sixth_hour: '',
};

export const antibiotic = {
  prescribid_atb: '',
  atb_type_1: '',
  atb_type_2: '',
  atb_type_3: '',
  atb_type_4: '',
  atb_type_5: '',
  atb_type_6: '',
  atb_type_7: '',
  atb_type_8: '',
  atb_type_9: '',
  date_first_dose: '',
  time_first_dose: '',
  previus_use_atb: '',
};

export const initialApproach = {
  volume: '',
  vasoactive_drugs: '',
  vasoactive_drugs_name: '',
  hemo_transfusion: '',
  mecanical_ventilation: '',
};

export const finalApproachOne = {
  sofa_snc: '',
  sofa_res: '',
  sofa_cardio: '',
  sofa_hep: '',
  sofa_renal: '',
  sofa_coag: '',
};

export const finalApproachTwo = {
  sofa_snc: '',
  sofa_res: '',
  sofa_cardio: '',
  sofa_hep: '',
  sofa_renal: '',
  sofa_coag: '',
};

export const finalApproachThree = {
  sofa_snc: '',
  sofa_res: '',
  sofa_cardio: '',
  sofa_hep: '',
  sofa_renal: '',
  sofa_coag: '',
};

export const outcome = {
  outcome: '',
  uti: {
    date: '',
    time: '',
    observation: '',
  },
  medical_release: {
    date: '',
    time: '',
    observation: '',
  },
  death: {
    date: '',
    time: '',
    observation: '',
  },
};

export const hpp = {
  dm: '',
  has: '',
  alcoholism: '',
  smoking: '',
  ilicit_drugs: '',
  ic: '',
  fa: '',
  renal_insufficiency: '',
  dac: '',
  bedridden: '',
  dpoc_asthma: '',
  previus_avc: '',
  cid: '',
};

export const user = {
  name: '',
  nickname: '',
  surname: '',
  genre: '',
  address: {
    city: '',
    state: '',
  },
  email: '',
  phone: '',
  password: '',
  type: '',
  id: '',
};

export const login = {
  nickname: '',
  password: '',
};
