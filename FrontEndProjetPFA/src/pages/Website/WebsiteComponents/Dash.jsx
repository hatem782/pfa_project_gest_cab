import React from "react";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "block",
    width: "100px",
    height: "5px",
    borderRadius: "500px",
    backgroundColor: theme.palette.primary.main,
  },
}));

function Dash({ color = "#17e6c8" }) {
  const css = useStyles();
  return <span style={{ backgroundColor: color }} className={css.main}></span>;
}

export default Dash;
