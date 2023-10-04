import keys from "./patitents.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { Mquery } from "../../functions/MakeQuery";
import { brut_pat } from "../../pages/dashboard/DashContent/Patient/Popups/UpdatePatient/validation";

const CreatePatient = (data, callback) => {
  console.log(data);
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/patient/create`, {
        ...data,
      });
      toast.success("patient created successfully");
      callback();
      dispatch(GetAllPatients());
      console.log(response);
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const GetAllPatients = (query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/patient/get_all`, Mquery(query));
      dispatch({
        type: keys.set_patients,
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

const UpdatePatientAction = (data, callback) => {
  let allowed_data = brut_pat(data);
  console.log(allowed_data);
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });

      const response = await axios.put(
        `/patient/update/${data._id}`,
        allowed_data
      );
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`Patient Updated Successfully`);
      dispatch(GetAllPatients());
      callback();
      console.log("here4");
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const DeletePatient = (data, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.delete(`/patient/delete/${data._id}`);
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`Patient Deleted Successfully`);
      dispatch(GetAllPatients());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const GetOnePatient = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(`/patient/get_one/${id}`);
      dispatch({
        type: keys.set_patient,
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

export {
  CreatePatient,
  GetAllPatients,
  GetOnePatient,
  UpdatePatientAction,
  DeletePatient,
};
