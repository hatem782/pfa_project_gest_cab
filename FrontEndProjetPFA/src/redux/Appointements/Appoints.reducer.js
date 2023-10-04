import keys from "./Appoints.keys";

export const InitialState = {
  payload: false,
  rdvs: [],
  vccs: [],
  calendar: [],
};

export const AppintementReducer = (state = { ...InitialState }, action) => {
  switch (action.type) {
    case keys.all:
      return { ...action.value };
    case keys.set_calendar:
      return { ...state, calendar: action.value, payload: false };
    case keys.set_rdvs:
      return { ...state, rdvs: action.value, payload: false };
    case keys.set_vccs:
      return { ...state, vccs: action.value, payload: false };
    case keys.payload:
      return { ...state, payload: action.value };
    default:
      return state;
  }
};
