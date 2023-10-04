import keys from "./Exames.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { Mquery } from "../../functions/MakeQuery";

const GetAllExams = (id, query = {}) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.get(
        `/examen/get_by_consult/${id}`,
        Mquery(query)
      );
      dispatch({
        type: keys.set_exams,
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

const CreateExamen = (data, callback) => {
  let dest = "create_full";
  if (data.type === "simple") {
    dest = "create_simple";
  }
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.post(`/examen/${dest}`, { ...data });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllExams());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const UpdateExam = (data, callback) => {
  let dest = "update_complet";
  if (data.type === "simple") {
    dest = "update_simple";
  }
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.put(`/examen/${dest}/${data._id}`, {
        ...data,
      });
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      dispatch(GetAllExams());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

const DeleteExam = (acte, callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      const response = await axios.delete(`/examen/delete/${acte._id}`);
      console.log(response);
      dispatch({
        type: keys.payload,
        value: false,
      });
      toast.success(`Examen Deleted Successfully`);
      dispatch(GetAllExams());
      callback();
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
    }
  };
};

export { GetAllExams, DeleteExam, CreateExamen, UpdateExam };
