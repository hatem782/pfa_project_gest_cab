import keys from "./Ordenances.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { Mquery } from "../../functions/MakeQuery";

const GetAllOrdencs = (query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/ordenances/get_all`, Mquery(query));
      dispatch({
        type: keys.set_ordenances,
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

const GetAllOrdencsByPat = (id, query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(
        `/ordenances/get_all_bypat/${id}`,
        Mquery(query)
      );
      dispatch({
        type: keys.set_ordenances,
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

const CreateOrd = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/ordenances/create`, { ...data });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const UpdateOrd = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.put(`/ordenances/update/${data._id}`, {
        ...data,
      });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const DeleteOrd = (ordenance, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.delete(
        `/ordenances/delete/${ordenance._id}`
      );
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`ordenance Deleted Successfully`);
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

export { GetAllOrdencs, DeleteOrd, CreateOrd, UpdateOrd, GetAllOrdencsByPat };
