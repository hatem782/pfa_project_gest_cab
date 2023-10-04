import keys from "./user.keys";
import { toast } from "react-hot-toast";
// import { useSelector } from "react-redux";
import axios from "../../custom/axios";
import { InitialState } from "./user.reducer";
import { isAdmin, isSec, isDoc } from "../../custom/roles";

const ActionLogin = (data) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      // to get response from back
      const response = await axios.post(`/auth/login`, {
        ...data,
      });
      const { user, token } = response.data.data;
      // that user is not an admin or super admin
      if (!isAdmin(user) && !isSec(user) && !isDoc(user)) {
        toast.error(`Unauthorized`);
        return false;
      }
      // to set the token and reftoken in storage
      localStorage.setItem("token", token);
      toast.success(`Bonjour ${user.firstName} ${user.lastName}`);
      // every thing is ok here
      dispatch({
        type: keys.all,
        value: {
          payload: false,
          is_connected: true,
          user: user,
        },
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
      console.log(error.response);
      // toast.error(error?.response?.data?.message);
    }
  };
};

const GetUserByToken = (callback) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: keys.payload,
        value: true,
      });
      // to get response from back
      const response = await axios.get(`/auth/get_user_by_token`);
      const { user, token } = response.data.data;
      // that user is not an admin or super admin
      if (!isAdmin(user) && !isSec(user) && !isDoc(user)) {
        toast.error(`Unauthorized`);
        return false;
      }
      // to set the token and reftoken in storage
      localStorage.setItem("token", token);
      toast.success(`Bonjour ${user.firstName} ${user.lastName}`);
      // every thing is ok here
      dispatch({
        type: keys.all,
        value: {
          payload: false,
          is_connected: true,
          user: user,
        },
      });
    } catch (error) {
      dispatch({
        type: keys.payload,
        value: false,
      });
      console.log(error.response);
      // toast.error(error?.response?.data?.message);
    }
  };
};

const Disconnect = () => {
  return (dispatch) => {
    localStorage.removeItem("token");
    dispatch({
      type: keys.all,
      value: {
        ...InitialState,
      },
    });
  };
};

export { ActionLogin, Disconnect, GetUserByToken };
