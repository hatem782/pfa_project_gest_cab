import React from "react";

import Button from "../../../../../../components/Buttons/SubmitBtn";

import { useStyles } from "./styles";
import Popup from "../../../../../../components/Pupup/Popup";

import { useDispatch } from "react-redux";
import { DeleteActe } from "../../../../../../redux/Actes/Actes.actions";

const DeletePopup = (props) => {
  const { handleClose, value } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handle_Submit = () => {
    dispatch(DeleteActe(value, handleClose));
  };

  return (
    <Popup handleClose={handleClose} width="600px">
      <div className={classes.main}>
        <h3>Supprimer Acte "{value.title}"</h3>

        <h4>Etes-vous sûr de supprimer l'Acte "{value.title}" ?</h4>

        <div className="buttons_group">
          <Button onClick={handle_Submit}>Annuler</Button>
          <Button onClick={handle_Submit}>Update Acte</Button>
        </div>
      </div>
    </Popup>
  );
};

export default DeletePopup;
