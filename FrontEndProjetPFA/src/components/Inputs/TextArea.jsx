import React from "react";

import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  labels: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  label: {
    color: "#95989A",
    fontSize: "18px",
    display: "flex",
    [theme.breakpoints.down("xl")]: {
      fontSize: "16px",
    },

    "& span": {
      color: "red",
    },
  },

  error: {
    color: "#FF2200",
  },

  input: {
    fontSize: "20px",
    backgroundColor: "#FCFCFC",
    border: "solid 2px #95989A66",
    borderRadius: "5px",
    padding: "15px",
    margin: "10px 0px",
    width: "100%",
    outline: "none",
    "&:focus": {
      border: "solid 2px #95989A",
    },

    [theme.breakpoints.down("xl")]: {
      fontSize: "14px",
      padding: "10px",
      margin: "5px 0px",
    },
  },
  input_error: {
    border: "solid 2px #FF2200",
  },
}));
function TextArea(props) {
  const css = useStyles();
  const {
    label,
    placeholder = "",
    name,
    type = "text",
    value,
    onChange,
    error = false,
    errorMs = "",
    disabled = false,
    required = false,
    rows = 4,
  } = props;
  return (
    <div className={css.inputContainer + " edited-input"}>
      <div className={css.labels}>
        <label className={css.label + " " + (error ? css.error : "")}>
          {label}
        </label>
        {error ? (
          <label className={`${css.label} ${css.error}`}>{errorMs}</label>
        ) : (
          ""
        )}
      </div>
      <textarea
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        name={name}
        disabled={disabled}
        className={css.input + " " + (error ? css.input_error : "")}
        rows={rows}
      />
    </div>
  );
}

export default TextArea;
