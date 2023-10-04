import keys from "./Actes.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { Mquery } from "../../functions/MakeQuery";

const GetAllActes = (query = {}) => {
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa");
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/actes/get_all`, Mquery(query));
      dispatch({
        type: keys.set_actes,
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

const CreateActe = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/actes/create`, { ...data });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllActes());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const UpdateActe = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.put(`/actes/update/${data._id}`, {
        ...data,
      });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllActes());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const DeleteActe = (acte, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.delete(`/actes/delete/${acte._id}`);
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`acte Deleted Successfully`);
      dispatch(GetAllActes());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

export { GetAllActes, DeleteActe, CreateActe, UpdateActe };
