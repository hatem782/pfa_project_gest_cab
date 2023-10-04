import React, { useState, useEffect } from "react";
import Input from "../../../../../components/Inputs/Input2";
import { useStyles } from "../ProfileStyles";

const SimpleEditedFieldData = ({ label, type, field, user }) => {
  const css = useStyles();
  const [val, setVal] = useState("");
  const [step, setStep] = useState(1);
  const btntxt = ["Editer", "Modifier", "Modifier"];

  // ****************** OPT ******************

  useEffect(() => {
    setVal(user[field]);
  }, [user]);

  const inputHandler = (e) => {
    setVal(e.target.value);
  };

  const reset = () => {
    setStep(1);
  };

  const handleClick = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
    }
  };

  return (
    <div className={css.editedFieldData}>
      <div className="text-field-container">
        <div className="text-field">
          <Input
            label={label}
            onChange={inputHandler}
            type={type}
            value={val}
            disabled={step === 1}
          />
        </div>
        <div onClick={handleClick} className="button">
          {btntxt[step - 1]}
        </div>
      </div>
    </div>
  );
};

export default SimpleEditedFieldData;
