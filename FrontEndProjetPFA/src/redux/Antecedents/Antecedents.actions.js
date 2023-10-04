import keys from "./Antecedents.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { Mquery } from "../../functions/MakeQuery";

const GetAllAnteced = (query = {}) => {
  return async (dispatch, getState) => {
    let id = getState().patientsReducer.patient._id;
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(
        `/antecedent/get_all_by_pat/${id}`,
        Mquery(query)
      );
      dispatch({
        type: keys.set_antecedents,
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

const CreateAnteced = (data, callback) => {
  return async (dispatch, getState) => {
    try {
      let id = getState().patientsReducer.patient._id;
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/antecedent/create`, {
        ...data,
        patient: id,
      });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllAnteced());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const UpdateAnteced = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.put(`/antecedent/update/${data._id}`, {
        ...data,
      });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllAnteced());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const DeleteAnteced = (acte, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.delete(`/antecedent/delete/${acte._id}`);
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`acte Deleted Successfully`);
      dispatch(GetAllAnteced());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

export { GetAllAnteced, DeleteAnteced, CreateAnteced, UpdateAnteced };
