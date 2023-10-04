import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/lab/LoadingButton";

export const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontSize: "20px !important",
    fontWeight: "600 !important",
    padding: "8px 14px !important",
    outline: "none",
    border: "none",
    borderRadius: "12px !important",
    "&:hover": {
      cursor: "pointer",
      //transform: "scale(1.05)",
    },
  },
  center: {
    display: "block",
    margin: "auto",
  },
}));

function GreenButton(props) {
  const css = useStyles();
  const { children, center = false, loading = false, handleFiles } = props;
  return (
    <Button
      variant="contained"
      loading={loading}
      className={`${css.button} ${center ? css.center : ""}`}
    >
      <label
        onClick={() => {
          console.log("hey");
        }}
      >
        {children}

        <input
          style={{ display: "none" }}
          accept="*"
          id="contained-button-file"
          multiple
          onChange={handleFiles}
          type="file"
        />
      </label>
    </Button>
  );
}

export default GreenButton;
