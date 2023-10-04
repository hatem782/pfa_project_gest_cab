import keys from "./Certifs.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { Mquery } from "../../functions/MakeQuery";

const GetAllCertifs = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/certeficat/get_by_consult/${id}`);
      console.log(response.data);
      dispatch({
        type: keys.set_certifs,
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

const GetAllCertifsByPat = (id, query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(
        `/certeficat/get_all_bypat/${id}`,
        Mquery(query)
      );
      dispatch({
        type: keys.set_certifs,
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

const CreateCert = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      let dest = data.type === "apti" ? "create_apti" : "create_dispense";
      const response = await axios.post(`/certeficat/${dest}`, { ...data });
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

const UpdateCert = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      let dest = data.type === "apti" ? "update_apti" : "update_dispense";
      const response = await axios.put(`/certeficat/${dest}/${data._id}`, {
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

const DeleteCert = (certificat, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.delete(
        `/certeficat/delete/${certificat._id}`
      );
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`certificat Deleted Successfully`);
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
  GetAllCertifs,
  DeleteCert,
  CreateCert,
  UpdateCert,
  GetAllCertifsByPat,
};
