import keys from "./Consultations.keys";

export const InitialState = {
  payload: false,
  consultations: [],
  consultation: {
    _id: "",
    dossier: "", //
    jour: new Date(), //
    temp_deb: "", //
    duree: 0, //
    type: "Consultation de routine", //
    description: "", //
    images: [],
    actes: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

export const ConsultationsReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.set_consultations:
      return { ...state, consultations: action.value, payload: false };
    case keys.set_consultation:
      return { ...state, consultation: action.value, payload: false };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
