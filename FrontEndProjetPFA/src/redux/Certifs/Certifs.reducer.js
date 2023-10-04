import keys from "./Certifs.keys";

export const InitialState = {
  payload: false,
  certifs: [],
};

export const CertifsReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.set_certifs:
      return { ...state, certifs: action.value, payload: false };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
