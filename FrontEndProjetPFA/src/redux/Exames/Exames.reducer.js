import keys from "./Exames.keys";

export const InitialState = {
  payload: false,
  exams: [],
};

export const ExamsReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.set_exams:
      return { ...state, exams: action.value, payload: false };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
