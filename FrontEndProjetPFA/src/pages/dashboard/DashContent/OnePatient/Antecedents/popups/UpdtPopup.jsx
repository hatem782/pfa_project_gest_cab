import React, { useEffect, useState } from "react";

import Input from "../../../../../../components/Inputs/Input2";
import TextArea from "../../../../../../components/Inputs/TextArea";
import Button from "../../../../../../components/Buttons/TabButtonGf";
import Popup from "../../../../../../components/Pupup/Popup";

import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";

import { useDispatch } from "react-redux";
import { UpdateAnteced } from "../../../../../../redux/Antecedents/Antecedents.actions";
import { validation } from "./validation";
import { DateInput } from "../../../../../../functions/DateParse";
import UploadFile2 from "../../../../../../components/Buttons/UploadFile2";

const AddPopup = (props) => {
  const { handleClose, value } = props;

  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setForm] = useState({
    ...value,
  });

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_Submit = () => {
    dispatch(UpdateAnteced(form, handleClose));
  };

  useEffect(() => {
    setForm({ ...value });
  }, [value]);

  return (
    <Popup handleClose={handleClose} width="900px">
      <div className={classes.main}>
        <div className="between">
          <h3>Modifier Antecedent</h3>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Libelle</p>
            <Input
              onChange={handle_change}
              name="title"
              value={form.title}
              placeholder="Entrer le titre de l'antecedent"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Date de l'antecedent</p>
            <Input
              onChange={handle_change}
              name="date"
              value={DateInput(form.date)}
              type="date"
              placeholder="Entrer le date de l'antecedent"
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

          <Grid item xs={12}>
            <UploadFile2
              folder="general"
              name="images"
              onChange={handle_change}
              value={form.images}
            />
          </Grid>
        </Grid>

        <div className="buttons_group">
          <Button type="outlined" onClick={handle_Submit}>
            Annuler
          </Button>
          <Button onClick={handle_Submit}>Modifier Antecedent</Button>
        </div>
      </div>
    </Popup>
  );
};

export default AddPopup;
