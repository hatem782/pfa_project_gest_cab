import keys from "./user.keys";

export const InitialState = {
  payload: false,
  is_connected: false,
  user: {
    cin: "", //
    firstName: "", //
    lastName: "", //
    birthDate: new Date(), //
    birthPlace: "", //
    adress: "",
    phone: "", //
    email: "",
    sex: "MEN",
    role: "PATIENT",

    id_dossier: "",
    profession: "",
    code_apci: "",
    etat_civil: "Célibataire",

    login: "",
    password: "",

    speciality: "",
    createdAt: new Date(),
  },
};

export const UserReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.update_user:
      return { ...state, user: action.value };
    case keys.payload:
      return { ...state, payload: action.value };
    case keys.connect:
      return { ...state, connect: action.value };
    default:
      return state;
  }
};
