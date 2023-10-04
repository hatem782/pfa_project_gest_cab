import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    fontSize: "20px",
    padding: "20px 150px",
    outline: "none",
    border: "none",
    borderRadius: "500px",
    transition: "all 0.1s",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
    },
  },
  center: {
    display: "block",
    margin: "auto",
  },
}));

function Button(props) {
  const css = useStyles();
  const { children, center = false, type = "primary" } = props;
  const types = {
    primary: "#17e6c8",
    success: "#17e6c8",
    secondary: "#FECD54",
    error: "#d32f2f",
    warning: "#FFD950",
  };
  return (
    <button
      className={`${css.button} ${center ? css.center : ""}`}
      style={{ backgroundColor: types[type] }}
    >
      {children}
    </button>
  );
}

export default Button;
