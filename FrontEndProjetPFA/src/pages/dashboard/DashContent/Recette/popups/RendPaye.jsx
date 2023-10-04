import React, { useEffect, useState } from "react";

import Input from "../../../../../components/Inputs/Input2";
import Select from "../../../../../components/Inputs/Select";
import Button from "../../../../../components/Buttons/TabButtonGf";
import Popup from "../../../../../components/Pupup/Popup";

import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import { UpdateRecette } from "../../../../../redux/Recettes/Recettes.actions";
import { GetOnePatient } from "../../../../../redux/Patients/patitents.actions";
import { useParams } from "react-router";
import { DateInput } from "../../../../../functions/DateParse";
import UploadFile2 from "../../../../../components/Buttons/UploadFile2";

const UpdatePopup = (props) => {
  const { handleClose, value } = props;
  const patient = useSelector((state) => state.patientsReducer.patient);
  const { id } = useParams();

  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setForm] = useState({ ...value });

  const items = useSelector(
    (state) => state.ConsultationsReducer.consultations
  );

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_Submit = () => {
    dispatch(UpdateRecette(form, handleClose));
  };

  useEffect(() => {
    setForm({ ...value });
  }, []);

  useEffect(() => {
    dispatch(GetOnePatient(id));
  }, [id]);

  useEffect(() => {
    setForm({
      ...form,
      nom_prenom_patient: `${patient.firstName} ${patient.lastName}`,
    });
  }, [patient]);

  return (
    <Popup handleClose={handleClose} width="900px">
      <div className={classes.main}>
        <div className="between">
          <h3>Modifier Impayé</h3>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Nom et prénom du patient </p>
            <Input
              onChange={handle_change}
              name="nom_prenom_patient"
              value={form.nom_prenom_patient}
              placeholder="Entrer Nom et prénom du patient"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Consultation</p>
            <Select
              onChange={handle_change}
              name="consultation"
              value={form.consultation}
              items={items.map((consult) => {
                return {
                  name: `${consult.type} le ${DateInput(consult.jour)}-${
                    consult.temp_deb
                  }`,
                  value: consult._id,
                };
              })}
            />
          </Grid>

          <Grid item xs={12}>
            <p>Est payé ou non</p>
            <Select
              onChange={handle_change}
              name="estPaye"
              value={form.estPaye}
              items={[
                { name: "Payé", value: true },
                { name: "Impayé", value: false },
              ]}
            />
          </Grid>

          {!form.estPaye && (
            <Grid item xs={12}>
              <p>Date Echeance</p>
              <Input
                onChange={handle_change}
                name="dateEcheance"
                value={DateInput(form.dateEcheance)}
                type="date"
                placeholder="Entrer le date d'echeance"
              />
            </Grid>
          )}

          {form.estPaye && (
            <Grid item xs={12}>
              <p>Mode de paiement</p>
              <Select
                onChange={handle_change}
                name="modePaiement"
                value={form.modePaiement}
                items={[
                  { name: "Espèces", value: "Espèces" },
                  { name: "Carte bancaire", value: "Carte bancaire" },
                ]}
              />
            </Grid>
          )}

          <Grid item xs={12}>
            <p>Tarif de consultation</p>
            <Input
              onChange={handle_change}
              name="tarif_consultation"
              value={form.tarif_consultation}
              type="number"
              placeholder="Entrer le code de l'acte"
            />
          </Grid>

          {form.estPaye && (
            <Grid item xs={12}>
              <UploadFile2
                folder="recettes"
                name="images"
                onChange={handle_change}
                value={form.images}
              />
            </Grid>
          )}
        </Grid>

        <div className="buttons_group">
          <Button type="outlined" onClick={handle_Submit}>
            Annuler
          </Button>
          <Button onClick={handle_Submit}>Modifier Impayé</Button>
        </div>
      </div>
    </Popup>
  );
};

export default UpdatePopup;
