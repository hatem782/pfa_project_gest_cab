import keys from "./Recettes.keys";

export const InitialState = {
  payload: false,
  recettes: [],
};

export const RecettesReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.set_recettes:
      return { ...state, recettes: action.value, payload: false };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
