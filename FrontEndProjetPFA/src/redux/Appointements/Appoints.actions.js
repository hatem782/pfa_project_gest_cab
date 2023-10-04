import keys from "./Appoints.keys";
import { toast } from "react-hot-toast";
import axios from "../../custom/axios";
import { Mquery } from "../../functions/MakeQuery";
// import { brut_pat } from "../../pages/dashboard/DashContent/Patient/Popups/UpdatePatient/validation";

const GetAllRdvs = (query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/appoint/get_Rdvs`, Mquery(query));
      dispatch({
        type: keys.set_rdvs,
        value: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const GetAllVccs = (query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/appoint/get_vccs`, Mquery(query));
      dispatch({
        type: keys.set_vccs,
        value: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const GetAllDates = (query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/appoint/get_all`, Mquery(query));
      dispatch({
        type: keys.set_calendar,
        value: response.data.data,
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const CreateRdv = (data, callback) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/appoint/create_rdv`, {
        ...data,
      });
      toast.success("RDV created successfully");
      callback();
      dispatch(GetAllRdvs());
      console.log(response);
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const CreateVcct = (data, callback) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/appoint/create_vcc`, {
        ...data,
      });
      toast.success("Vacance created successfully");
      callback();
      dispatch(GetAllDates());
      console.log(response);
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const DeleteDate = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.delete(`/appoint/delete/${data._id}`);
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`Date Deleted Successfully`);
      dispatch(GetAllDates());
      dispatch(GetAllRdvs());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const UpdateDateAction = (_id, data, callback) => {
  let new_data = { ...data };

  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.put(`/appoint/update/${_id}`, new_data);
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`Date Updated Successfully`);
      dispatch(GetAllDates());
      dispatch(GetAllRdvs());
      dispatch(GetAllVccs());
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
  GetAllRdvs,
  GetAllDates,
  CreateRdv,
  GetAllVccs,
  CreateVcct,
  UpdateDateAction,
  DeleteDate,
};
