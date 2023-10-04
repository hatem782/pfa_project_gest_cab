import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Disconnect } from "../../../redux/user/user.actions";

function DisconnectComponent() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(Disconnect());
  }, []);
  return <div></div>;
}

export default DisconnectComponent;
