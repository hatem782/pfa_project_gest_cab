import React from "react";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    fontSize: "20px",
    padding: "20px 150px",
    outline: "none",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.1s",

    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
      padding: "10px 120px",
    },
  },
  center: {
    display: "block",
    margin: "auto",
  },
}));

function SubmitBtn(props) {
  const css = useStyles();
  const {
    children,
    center = false,
    onClick,
    className = "",
    type = "primary",
  } = props;
  const types = {
    primary: "#003366",
    success: "#003366",
    secondary: "#FECD54",
    error: "#d32f2f",
    warning: "#FFD950",
  };
  return (
    <button
      className={`${css.button} ${center ? css.center : ""} ${className} `}
      onClick={onClick}
      style={{ backgroundColor: types[type] }}
    >
      {children}
    </button>
  );
}

export default SubmitBtn;
