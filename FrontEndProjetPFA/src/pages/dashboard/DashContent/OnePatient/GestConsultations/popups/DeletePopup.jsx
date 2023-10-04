import React from "react";

import Button from "../../../../../../components/Buttons/SubmitBtn";

import { useStyles } from "./styles";
import Popup from "../../../../../../components/Pupup/Popup";

import { useDispatch } from "react-redux";
import { DeleteConsult } from "../../../../../../redux/Consultations/Consultations.actions";

const DeletePopup = (props) => {
  const { handleClose, value } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handle_Submit = () => {
    dispatch(DeleteConsult(value, handleClose));
  };

  return (
    <Popup handleClose={handleClose} width="700px">
      <div className={classes.main}>
        <h3>Supprimer Consultation "{value.type}"</h3>

        <h4>Etes-vous sûr de supprimer la Consultation "{value.type}" ?</h4>

        <div className="buttons_group">
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handle_Submit}>Supprimer</Button>
        </div>
      </div>
    </Popup>
  );
};

export default DeletePopup;
