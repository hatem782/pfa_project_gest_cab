import keys from "./Actes.keys";

export const InitialState = {
  payload: false,
  actes: [],
};

export const ActesReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.set_actes:
      return { ...state, actes: action.value, payload: false };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
