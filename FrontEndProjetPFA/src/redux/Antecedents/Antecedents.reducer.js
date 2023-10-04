import keys from "./Antecedents.keys";

export const InitialState = {
  payload: false,
  antecedents: [],
};

export const AntecedentsReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.set_antecedents:
      return { ...state, antecedents: action.value, payload: false };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
