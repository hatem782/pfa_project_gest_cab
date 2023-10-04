import React from "react";
import Select from "react-select";
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
    [theme.breakpoints.down("xl")]: {
      fontSize: "16px",
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

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    fontSize: "20px",
    backgroundColor: "#FCFCFC",
    border: "solid 2px #95989A66",
    border: state.isSelected ? "solid 2px #95989A66" : "solid 2px #95989A66",
    boxShadow: "none",
    borderRadius: "6px",
    padding: "5px",
    margin: "10px 0px",
    width: "100%",
    outline: "none",
    "&:hover": {
      border: "solid 2px #95989A",
    },
    "&:focus": {
      border: "solid 2px #95989A",
    },
  }),
  // Add more style rules as needed
};

function MultiSelect(props) {
  const css = useStyles();
  const {
    label,
    name,
    value,
    onChange,
    error = false,
    errorMs = "",
    items = [],
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
      <Select
        onChange={onChange}
        value={value}
        name={name}
        isMulti
        options={items.map((item) => ({
          value: item.value,
          label: item.name,
        }))}
        styles={customStyles}
      />
    </div>
  );
}

export default MultiSelect;
