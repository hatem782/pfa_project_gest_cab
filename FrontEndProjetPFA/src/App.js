import React, { useState, useEffect } from "react";
import Toast from "./components/Toast/Toast";

// ********************** COMPONENTS ************************
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/Login/SignIn/Login";
import Register from "./pages/Login/Register/Register";
import NumValidation from "./pages/Login/NumValidation/NumValidation";
import SetPassword from "./pages/Login/SetPassword/SetPassword";
// reset password in login
import ForgetPass from "./pages/Login/Reset/ForgetPass/ForgetPass";
import NumValidResetPass from "./pages/Login/Reset/NumValidResetPass/NumValidResetPass";
import ResetPassword from "./pages/Login/Reset/ResetPassword/ResetPassword";
import Website from "./pages/Website/Website";

// ********************** COMPONENTS ************************

// ********************** User Dispatch *********************
import { useDispatch, useSelector } from "react-redux";
import { GetUserByToken } from "./redux/user/user.actions";
import Spinner from "./components/Spinner/Spinner";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Theme from "./theme/Theme";

function App() {
  const dispatch = useDispatch();
  const { user, is_connected, payload } = useSelector(
    (state) => state.UserReducer
  );
  const [spinn, setspinn] = useState(true);

  useEffect(() => {
    dispatch(GetUserByToken());
  }, []);

  return (
    <div className="App">
      <Toast />
      <Theme>
        {payload ? (
          <Spinner />
        ) : (
          <Router>
            {is_connected && !payload && <ConnectedRoutes />}
            {!is_connected && !payload && <NotConnectedRoutes />}
          </Router>
        )}
      </Theme>
    </div>
  );
}

export default App;

const NotConnectedRoutes = () => {
  return (
    <Routes>
      <Route path="/pbird/*" element={<Website />} />
      <Route path="/signin" element={<Login />} />

      <Route path="/registration" element={<Register />} />
      <Route path="/validation" element={<NumValidation />} />
      <Route path="/setpassword" element={<SetPassword />} />

      <Route path="/reset_pass" element={<ForgetPass />} />
      <Route path="/validation_reset" element={<NumValidResetPass />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/*" element={<Navigate to="/signin" />} />
    </Routes>
  );
};

const ConnectedRoutes = () => {
  return (
    <Routes>
      <Route path="/pbird/*" element={<Website />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/*" element={<Navigate to="/dashboard/patient" />} />
    </Routes>
  );
};
