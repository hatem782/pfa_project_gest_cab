import React, { useEffect, useState, useRef } from "react";

import Input from "../../../../../../components/Inputs/Input2";
import Select from "../../../../../../components/Inputs/Select";
import MultiSelect from "../../../../../../components/Inputs/MultiSelect";
import TextArea from "../../../../../../components/Inputs/TextArea";
import Button from "../../../../../../components/Buttons/TabButtonGf";
import Popup from "../../../../../../components/Pupup/Popup";

import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import {
  UpdateConsult,
  GetAllConsults,
} from "../../../../../../redux/Consultations/Consultations.actions";
import { GetAllActes } from "../../../../../../redux/Actes/Actes.actions";

import { ConsultTypes } from "../../../../../../constants/SelectsValues";
import { DateInput } from "../../../../../../functions/DateParse";
import UploadFile2 from "../../../../../../components/Buttons/UploadFile2";

const UpdatePopup = (props) => {
  const { handleClose, value } = props;
  const patient = useSelector((state) => state.patientsReducer.patient);
  const actes = useSelector((state) => state.ActesReducer.actes);

  // add actes to backend
  const dispatch = useDispatch();
  const classes = useStyles();

  const [form, setForm] = useState({
    dossier: "", //
    jour: new Date(), //
    temp_deb: "", //
    duree: 0, //
    type: "Consultation de routine", //
    description: "", //
    images: [],
    actes: [],
  });

  // affecter num dossier to consultation
  useEffect(() => {
    if (patient.id_dossier) {
      setForm({ ...form, dossier: patient.id_dossier });
    }
  }, [patient]);

  useEffect(() => {
    dispatch(GetAllActes());
    dispatch(GetAllConsults());
  }, []);

  useEffect(() => {
    let selected_actes = actes
      .filter((act) => value.actes.indexOf(act._id) !== -1)
      .map((act) => ({ label: act.title, value: act._id }));
    setForm({ ...value, actes: selected_actes });
  }, [value]);

  useEffect(() => {
    console.log(form);
  }, [form]);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_Submit = () => {
    let new_form = { ...form };
    new_form.actes = form.actes.map((item) => item.value);
    dispatch(UpdateConsult(new_form, handleClose));
  };

  return (
    <Popup handleClose={handleClose} width="900px">
      <div className={classes.main}>
        <div className="between">
          <h3>Modifier Consultation</h3>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Type Consultation</p>
            <Select
              onChange={handle_change}
              name="type"
              value={form.type}
              items={ConsultTypes}
            />
          </Grid>

          <Grid item xs={12}>
            <p>Jour de RDV</p>
            <Input
              onChange={handle_change}
              name="jour"
              type="date"
              value={DateInput(form.jour)}
              placeholder="Entrer jour"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Date Deb</p>
            <Input
              onChange={handle_change}
              name="temp_deb"
              type="time"
              value={form.temp_deb}
            />
          </Grid>

          <Grid item xs={6}>
            <p>Durée en minutes</p>
            <Input
              onChange={handle_change}
              name="duree"
              type="number"
              value={form.duree}
            />
          </Grid>

          <Grid item xs={12}>
            <p>Actes dones</p>
            <MultiSelect
              onChange={(data) => {
                setForm({ ...form, actes: data });
              }}
              name="type"
              value={form.actes}
              items={actes.map((act) => {
                return { name: act.title, value: act._id };
              })}
            />
          </Grid>

          <Grid item xs={12}>
            <UploadFile2
              folder="consultation"
              name="images"
              onChange={handle_change}
              value={form.images}
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
          <Button onClick={handle_Submit}>Modifier Consultation</Button>
        </div>
      </div>
    </Popup>
  );
};

export default UpdatePopup;
