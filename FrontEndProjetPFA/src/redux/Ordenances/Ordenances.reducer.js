import keys from "./Ordenances.keys";

export const InitialState = {
  payload: false,
  ordenances: [],
};

export const OrdenancesReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.set_ordenances:
      return { ...state, ordenances: action.value, payload: false };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
