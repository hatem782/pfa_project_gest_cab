import keys from "./Consultations.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { Mquery } from "../../functions/MakeQuery";

const GetAllConsults = (query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/consult/get_all`, Mquery(query));
      dispatch({
        type: keys.set_consultations,
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

const GetOneConsult = (_id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/consult/get_one/${_id}`);
      dispatch({
        type: keys.set_consultation,
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

const GetOneByDoc = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/consult/get_by_doc/${id}`);
      dispatch({
        type: keys.set_consultations,
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

const CreateConsult = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/consult/create`, { ...data });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllConsults());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const UpdateConsult = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.put(`/consult/update/${data._id}`, {
        ...data,
      });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllConsults());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const DeleteConsult = (acte, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.delete(`/consult/delete/${acte._id}`);
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`consult Deleted Successfully`);
      dispatch(GetAllConsults());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

export {
  GetOneByDoc,
  GetAllConsults,
  GetOneConsult,
  DeleteConsult,
  CreateConsult,
  UpdateConsult,
};
