import keys from "./Recettes.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { Mquery } from "../../functions/MakeQuery";

const GetAllRecettes = (query = {}) => {
  return async (dispatch, getState) => {
    try {
      let id = getState().patientsReducer.patient._id;
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/recette/get_all/${id}`, Mquery(query));
      dispatch({
        type: keys.set_recettes,
        value: response.data,
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const CreateRecette = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/recette/create`, { ...data });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllRecettes());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const UpdateRecette = (data, callback) => {
  const {
    _id,
    consultation,
    date,
    tarif_consultation,
    modePaiement,
    nom_prenom_patient,
    images,
    estPaye,
    dateEcheance,
  } = data;

  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.put(`/recette/update/${_id}`, {
        consultation,
        date,
        tarif_consultation,
        modePaiement,
        nom_prenom_patient,
        images,
        estPaye,
        dateEcheance,
      });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllRecettes());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const DeleteRecette = (acte, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.delete(`/recette/delete/${acte._id}`);
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`Recette Deleted Successfully`);
      dispatch(GetAllRecettes());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

export { GetAllRecettes, DeleteRecette, CreateRecette, UpdateRecette };
