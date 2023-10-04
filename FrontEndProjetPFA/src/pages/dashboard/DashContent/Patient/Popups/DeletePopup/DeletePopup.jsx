import React, { useState } from "react";

import Input from "../../../../../../components/Inputs/Input2";
import Button from "../../../../../../components/Buttons/SubmitBtn";

import { useStyles } from "./styles";
import Popup from "../../../../../../components/Pupup/Popup";
import { Grid } from "@mui/material";

import { useDispatch } from "react-redux";
import { DeletePatient } from "../../../../../../redux/Patients/patitents.actions";
import { toast } from "react-hot-toast";

const DeletePopup = (props) => {
  const { handleClose, value } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  const [cin, setCin] = useState("");

  const handle_change = (event) => {
    setCin(event.target.value);
  };

  const handle_Submit = () => {
    if (cin === value.cin.toString()) {
      dispatch(DeletePatient(value, handleClose));
    } else {
      toast.error("cin not match");
    }
  };

  return (
    <Popup handleClose={handleClose} width="600px">
      <div className={classes.main}>
        <h3>
          Supprimer patient {value.firstName} {value.lastName}
        </h3>

        <h4>
          Etes-vous sûr de supprimer le patient "{value.firstName}{" "}
          {value.lastName}", Veuillez saisir à nouveau le CIN {" "}
          <span className="green"> {value.cin} </span>
          d'utilisateur pour confirmer votre action:
        </h4>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Numéro CIN </p>
            <br></br>
            <Input
              onChange={handle_change}
              name="cin"
              value={cin}
              placeholder="Entrer le cin du patient"
            />
          </Grid>
        </Grid>

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
