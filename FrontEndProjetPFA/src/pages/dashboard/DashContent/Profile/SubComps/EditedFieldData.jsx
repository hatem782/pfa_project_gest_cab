import React, { useState, useEffect } from "react";
import Input from "../../../../../components/Inputs/Input2";
import { useStyles } from "../ProfileStyles";
import InpNums from "./InpNums";

const EditedFieldData = ({ label, type, field, user }) => {
  const css = useStyles();
  const [val, setVal] = useState("");
  const [step, setStep] = useState(1);

  // ****************** OPT ******************
  const [valNumb, setvalNumb] = useState("");
  const [match, setMatch] = useState(0); // 0:not verified yet / 1 : match / -1 : not equal
  const btntxt = ["Editer", "Modifier", "Confirmer"];

  useEffect(() => {
    setVal(user[field]);
  }, [user]);

  const reset = () => {
    setStep(1);
  };

  const inputHandler = (e) => {
    setVal(e.target.value);
  };

  const handleClick = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else if (step === 3) {
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
      {step === 3 && (
        <div className="opt-field-container">
          <p className="opt-txt">
            Entrer le code secret envoyé par SMS sur votre téléphone portable
          </p>
          <InpNums valNumb={valNumb} setvalNumb={setvalNumb} match={match} />
        </div>
      )}
    </div>
  );
};

export default EditedFieldData;
