import React, { useState, useEffect } from "react";
import Input from "../../../../../components/Inputs/Input2";
import { useStyles } from "../ProfileStyles";
import InpNums from "./InpNums";

const EditedFieldData = ({ label, value, type }) => {
  const css = useStyles();
  const [val, setVal] = useState("");
  const [oldPass, setoldPass] = useState("");

  // ****************** OPT ******************
  const [valNumb, setvalNumb] = useState("");
  const [match, setMatch] = useState(0); // 0:not verified yet / 1 : match / -1 : not equal
  const [step, setStep] = useState(1);

  const btntxt = ["Editer", "Modifier", "Confirmer"];

  useEffect(() => {
    setVal(value);
  }, [value]);

  const inputHandler = (e) => {
    setVal(e.target.value);
  };

  const inputHandlerOldPass = (e) => {
    setoldPass(e.target.value);
  };

  const reset = () => {
    setStep(1);
  };

  const handleClick = () => {
    if (step === 1) {
      setVal("");
      setStep(2);
    } else if (step === 2) {
    }
  };

  return (
    <div className={css.editedFieldData}>
      <div className="text-field-container">
        <div className="text-field">
          <Input
            label={step === 1 ? label : "Nouveau Mot de passe"}
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

      {step === 2 && (
        <div className="text-field-container">
          <div className="text-field">
            <Input
              label={"Ancient Mot de passe"}
              onChange={inputHandlerOldPass}
              type={type}
              value={oldPass}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default EditedFieldData;
