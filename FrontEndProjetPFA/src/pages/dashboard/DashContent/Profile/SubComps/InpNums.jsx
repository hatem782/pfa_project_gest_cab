import React, { useState, useEffect } from "react";
import Input from "../../../../../components/Inputs/Input2";
import { useStyles } from "../ProfileStyles";

const InpNums = ({ valNumb, setvalNumb, match }) => {
  const [number, setNumber] = useState(["", "", "", "", "", ""]);
  const css = useStyles();

  const handlerChange = (event, key) => {
    //if (number[key].length == 0 || event.target.value === "") {
    let newNumber = [...number];
    newNumber[key] = event.target.value;
    setNumber([...newNumber]);
    if (key < 5 && event.target.value) {
      document.getElementById(`inp_${key + 1}`).focus();
    }
  };

  useEffect(() => {
    if (valNumb.length === 6) {
      setNumber(valNumb.split(""));
      document.getElementById(`inp_5`).focus();
    }
  }, []);

  useEffect(() => {
    setvalNumb(number.join(""));
  }, [number]);

  return (
    <div className={css.inputs}>
      {number.map((num, key) => {
        return (
          <input
            className={`${match === 1 ? " match " : ""} ${
              match === -1 ? " not-match " : ""
            }`}
            key={key}
            value={num}
            maxLength="1"
            onChange={(event) => {
              handlerChange(event, key);
            }}
            type="text"
            name={`inp_${key}`}
            id={`inp_${key}`}
          />
        );
      })}
    </div>
  );
};

export default InpNums;
