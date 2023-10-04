import React, { useState } from "react";

import Input from "../../../../../components/Inputs/Input2";
import TextArea from "../../../../../components/Inputs/TextArea";
import Button from "../../../../../components/Buttons/TabButtonGf";
import Popup from "../../../../../components/Pupup/Popup";

import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";

import { useDispatch } from "react-redux";
import { CreateActe } from "../../../../../redux/Actes/Actes.actions";
import { validation } from "./validation";

const AddPopup = (props) => {
  const { handleClose } = props;

  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setForm] = useState({
    title: "",
    description: "",
    Code_acte: "",
    prix: "",
  });

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_Submit = () => {
    if (validation(form)) {
      dispatch(CreateActe(form, handleClose));
    }
  };

  return (
    <Popup handleClose={handleClose} width="900px">
      <div className={classes.main}>
        <div className="between">
          <h3>Ajouter un nouvel acte</h3>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Libelle</p>
            <Input
              onChange={handle_change}
              name="title"
              value={form.title}
              placeholder="Entrer le titre de l'acte"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Code acte</p>
            <Input
              onChange={handle_change}
              name="Code_acte"
              value={form.Code_acte}
              placeholder="Entrer le code de l'acte"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Prix</p>
            <Input
              onChange={handle_change}
              name="prix"
              value={form.prix}
              placeholder="Entrer prix"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Description</p>
            <TextArea
              onChange={handle_change}
              name="description"
              value={form.description}
              placeholder="Entrer description"
              multiline
              maxRows={4}
            />
          </Grid>
        </Grid>

        <div className="buttons_group">
          <Button type="outlined" onClick={handle_Submit}>
            Annuler
          </Button>
          <Button onClick={handle_Submit}>Ajouter Acte</Button>
        </div>
      </div>
    </Popup>
  );
};

export default AddPopup;
