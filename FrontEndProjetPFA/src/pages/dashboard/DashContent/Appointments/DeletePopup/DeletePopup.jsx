import React from "react";

import Button from "../../../../../components/Buttons/SubmitBtn";

import { useStyles } from "./styles";
import Popup from "../../../../../components/Pupup/Popup";

import { useDispatch } from "react-redux";
import { DeleteDate } from "../../../../../redux/Appointements/Appoints.actions";
import { DateInput, TimeInput } from "../../../../../functions/DateParse";

const DeletePopup = (props) => {
  const { handleClose, value } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handle_Submit = () => {
    dispatch(DeleteDate(value, handleClose));
  };

  return (
    <Popup handleClose={handleClose} width="600px">
      <div className={classes.main}>
        <h3>Supprimer Rendez-vous "{value.title}"</h3>

        <h4>
          Etes-vous sûr de supprimer le rendez-vous "{value.title}" du patient "
          {value.firstName} {value.lastName}" de {TimeInput(value.start)} à{" "}
          {TimeInput(value.end)} le jour {DateInput(value.start)} ?
        </h4>

        <div className="buttons_group">
          <Button onClick={handleClose}>Annuler</Button>
          <Button type="outlined" onClick={handle_Submit}>
            Supprimer
          </Button>
        </div>
      </div>
    </Popup>
  );
};

export default DeletePopup;
