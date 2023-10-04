import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";

import { UserReducer } from "./user/user.reducer";
import { patientsReducer } from "./Patients/patitents.reducer";
import { AppintementReducer } from "./Appointements/Appoints.reducer";
import { ActesReducer } from "./Actes/Actes.reducer";
import { ConsultationsReducer } from "./Consultations/Consultations.reducer";
import { OrdenancesReducer } from "./Ordenances/Ordenances.reducer";
import { CertifsReducer } from "./Certifs/Certifs.reducer";
import { RecettesReducer } from "./Recettes/Recettes.reducer";
import { ExamsReducer } from "./Exames/Exames.reducer";
import { AntecedentsReducer } from "./Antecedents/Antecedents.reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  UserReducer,
  patientsReducer,
  AppintementReducer,
  ActesReducer,
  ConsultationsReducer,
  OrdenancesReducer,
  CertifsReducer,
  RecettesReducer,
  ExamsReducer,
  AntecedentsReducer,
});

const store = createStore(allReducers, composeEnhancer(applyMiddleware(thunk)));

export { store };
