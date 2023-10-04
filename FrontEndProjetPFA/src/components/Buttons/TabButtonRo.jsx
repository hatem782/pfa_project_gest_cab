import React from "react";
import Button from "@mui/lab/LoadingButton";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: "5px",

    padding: "0px 20px",
    lineHeight: "1.5 !important",
    margin: "0px 10px ",

    color: `white`,
    fontStyle: "myriad",
    fontSize: "16px",
    fontWeight: "600",

    display: "flex !important",
    alignItems: "center !important",
    justifyContent: "center !important",

    transition: "all 0.1s",
    cursor: "pointer",

    [theme.breakpoints.down("xl")]: {
      fontSize: "16px",
      padding: "7px 50px",
    },
  },
  iconBtn: {
    padding: "5px 15px",
  },
}));

// RED OUTLINED
function TabButtonRo(props) {
  const css = useStyles();
  const types = {
    primary: "#17e6c8",
    success: "#17e6c8",
    secondary: "#FECD54",
    error: "#d32f2f",
    warning: "#FFD950",
  };
  const {
    onClick,
    children,
    isIcon = false,
    className,
    loading = false,
    type = "primary",
  } = props;
  return (
    <Button
      variant="contained"
      loading={loading}
      className={`${css.btn} ${isIcon ? css.iconBtn : ""} ${className} `}
      style={{ backgroundColor: types[type] }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

export default TabButtonRo;
