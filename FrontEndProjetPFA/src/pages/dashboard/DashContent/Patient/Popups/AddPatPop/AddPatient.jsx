import React, { useState } from "react";

import Input from "../../../../../../components/Inputs/Input2";
import Button from "../../../../../../components/Buttons/TabButtonGf";

import { useStyles } from "./styles";
import Popup from "../../../../../../components/Pupup/Popup";
import { Grid } from "@mui/material";
import Select from "../../../../../../components/Inputs/Select";

import { DateInput } from "../../../../../../functions/DateParse";
import { Genres, EtatCivils } from "../../../../../../constants/SelectsValues";

import { validation } from "./validation";
import { useDispatch } from "react-redux";
import { CreatePatient } from "../../../../../../redux/Patients/patitents.actions";

const AddPatient = (props) => {
  const { handleClose } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    cin: "13021370",
    firstName: "hazem",
    lastName: "manssouri",
    birthDate: new Date(),
    birthPlace: "tunis",
    adress: "26 rue 4700 tunis",
    phone: "55883322",
    email: "hazemmanssouri@gmail.com",
    sex: "MEN",

    profession: "dev",
    code_apci: "5588",
    etat_civil: "Célibataire",

    code_cnam: "",
    date_expire: new Date(),
  });

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_Submit = () => {
    if (validation(form)) {
      console.log(form);
      dispatch(CreatePatient(form, handleClose));
    }
  };

  return (
    <Popup handleClose={handleClose} width="1000px">
      <div className={classes.main}>
        <h3>Ajouter un nouveau patient</h3>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <p>Numéro CIN </p>
            <Input
              onChange={handle_change}
              name="cin"
              value={form.cin}
              placeholder="Entrer le cin du patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Numéro téléphone</p>
            <Input
              onChange={handle_change}
              name="phone"
              value={form.phone}
              placeholder="Entrer le Numéro téléphone du patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Nom </p>
            <Input
              onChange={handle_change}
              name="firstName"
              value={form.firstName}
              placeholder="Entrer le nom du Patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Prénom </p>
            <Input
              onChange={handle_change}
              name="lastName"
              value={form.lastName}
              placeholder="Entrer le prénom du Patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Date de naissance</p>
            <Input
              onChange={handle_change}
              name="birthDate"
              value={DateInput(form.birthDate)}
              type="date"
              placeholder="Entrer le date de naissance du patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Lieu de naissance</p>
            <Input
              onChange={handle_change}
              name="birthPlace"
              value={form.birthPlace}
              placeholder="Entrer l'emplacement de naissance du patient"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Adresse</p>
            <Input
              onChange={handle_change}
              name="adress"
              value={form.adress}
              placeholder="Entrer l'adresse du patient"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Email</p>
            <Input
              onChange={handle_change}
              name="email"
              value={form.email}
              placeholder="Entrer l'email du patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Genre</p>
            <Select
              onChange={handle_change}
              name="sex"
              value={form.sex}
              items={Genres}
            />
          </Grid>

          <Grid item xs={6}>
            <p>Etat civil</p>
            <Select
              onChange={handle_change}
              name="etat_civil"
              value={form.etat_civil}
              items={EtatCivils}
            />
          </Grid>

          <Grid item xs={6}>
            <p>Profession</p>
            <Input
              onChange={handle_change}
              name="profession"
              value={form.profession}
              placeholder="Entrer la profession du patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Code APCI</p>
            <Input
              onChange={handle_change}
              name="code_apci"
              value={form.code_apci}
              placeholder="Entrer le code APCI du patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Code CNAM</p>
            <Input
              onChange={handle_change}
              name="code_cnam"
              value={form.code_cnam}
              placeholder="Entrer le code du cnam"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Date d'éxpiration</p>
            <Input
              onChange={handle_change}
              name="date_expire"
              value={DateInput(form.date_expire)}
              type="date"
              placeholder="Entrer le date de naissance du patient"
            />
          </Grid>
        </Grid>

        <div className="buttons_group">
          <Button type="outlined" onClick={handle_Submit}>
            Annuler
          </Button>
          <Button onClick={handle_Submit}>Ajouter patient</Button>
        </div>
      </div>
    </Popup>
  );
};

export default AddPatient;
