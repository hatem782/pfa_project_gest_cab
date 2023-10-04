import React, { useEffect, useState } from "react";

import Input from "../../../../../../components/Inputs/Input2";
import TextArea from "../../../../../../components/Inputs/TextArea";
import Button from "../../../../../../components/Buttons/TabButtonGf";
import Popup from "../../../../../../components/Pupup/Popup";
import Select from "../../../../../../components/Inputs/Select";

import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";

import { useDispatch } from "react-redux";
import { CreateExamen } from "../../../../../../redux/Exames/Exames.actions";

import { useParams } from "react-router-dom";
import UploadFile2 from "../../../../../../components/Buttons/UploadFile2";

const AddPopup = (props) => {
  const { handleClose } = props;
  const { id_consult } = useParams();

  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setForm] = useState({
    consultation: id_consult,
    description: "",

    taille_pat: 0,
    poid_pat: 0,
    tens_pat: 0,
    perim_pat: 0,
    temp_pat: 0,

    type: "simple",

    images: [],
    files: [],
  });

  useEffect(() => {
    if (id_consult) {
      setForm({ ...form, consultation: id_consult });
    }
  }, [id_consult]);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_Submit = () => {
    dispatch(CreateExamen(form, handleClose));
  };

  return (
    <Popup handleClose={handleClose} width="900px">
      <div className={classes.main}>
        <div className="between">
          <h3>Ajouter Un Nouveau Examen</h3>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Type Examen</p>
            <Select
              onChange={handle_change}
              name="type"
              value={form.type}
              items={[
                { name: "Simple", value: "simple" },
                { name: "Complet", value: "complet" },
              ]}
            />
          </Grid>

          <Grid item xs={4}>
            <p>Taille patient</p>
            <Input
              onChange={handle_change}
              name="taille_pat"
              value={form.taille_pat}
              type="number"
            />
          </Grid>

          <Grid item xs={4}>
            <p>Poid patient</p>
            <Input
              onChange={handle_change}
              name="poid_pat"
              value={form.poid_pat}
              type="number"
            />
          </Grid>

          <Grid item xs={4}>
            <p>Perimetre du patient </p>
            <Input
              onChange={handle_change}
              name="perim_pat"
              value={form.perim_pat}
              type="number"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Tension du patient </p>
            <Input
              onChange={handle_change}
              name="tens_pat"
              value={form.tens_pat}
              type="number"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Temperature du patient </p>
            <Input
              onChange={handle_change}
              name="temp_pat"
              value={form.temp_pat}
              type="number"
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

          {form.type === "complet" && (
            <>
              <Grid item xs={12}>
                <UploadFile2
                  folder="general"
                  name="images"
                  onChange={handle_change}
                  value={form.images}
                  label="Ajouter des images"
                />
              </Grid>

              <Grid item xs={12}>
                <UploadFile2
                  folder="general"
                  name="files"
                  files
                  onChange={handle_change}
                  value={form.files}
                  label="Ajouter des fichiers"
                />
              </Grid>
            </>
          )}
        </Grid>

        <div className="buttons_group">
          <Button type="outlined" onClick={handle_Submit}>
            Annuler
          </Button>
          <Button onClick={handle_Submit}>Ajouter Examen</Button>
        </div>
      </div>
    </Popup>
  );
};

export default AddPopup;
