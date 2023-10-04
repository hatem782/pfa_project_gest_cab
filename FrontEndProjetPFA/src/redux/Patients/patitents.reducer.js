import keys from "./patitents.keys";

export const init_patient = {
  _id: "",
  cin: "",
  firstName: "",
  lastName: "",
  birthDate: new Date(),
  birthPlace: "",
  adress: "",
  phone: "",
  email: "",
  sex: "MEN",

  id_dossier: "",

  profession: "",
  code_apci: "",
  etat_civil: "Célibataire",
  createdAt: new Date(),
};

export const InitialState = {
  payload: false,
  patients: [],
  patient: { ...init_patient },
};

export const patientsReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.set_patients:
      return { ...state, patients: action.value, payload: false };
    case keys.set_patient:
      return { ...state, patient: action.value, payload: false };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
