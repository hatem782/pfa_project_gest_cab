import React from "react";

import Button from "../../../../../../components/Buttons/SubmitBtn";

import { useStyles } from "./styles";
import Popup from "../../../../../../components/Pupup/Popup";

import { useDispatch } from "react-redux";
import { DeleteCert } from "../../../../../../redux/Certifs/Certifs.actions";

const DeletePopup = (props) => {
  const { handleClose, value } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const handle_Submit = () => {
    dispatch(DeleteCert(value, handleClose));
  };

  return (
    <Popup handleClose={handleClose} width="700px">
      <div className={classes.main}>
        <h3>Supprimer Certificat </h3>

        <h4>Etes-vous sûr de supprimer cet Certificat ?</h4>

        <div className="buttons_group">
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handle_Submit}>Supprimer</Button>
        </div>
      </div>
    </Popup>
  );
};

export default DeletePopup;
