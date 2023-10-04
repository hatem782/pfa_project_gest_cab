import React, { useEffect, useState } from "react";

import Input from "../../../../../../components/Inputs/Input2";
import TextArea from "../../../../../../components/Inputs/TextArea";
import Button from "../../../../../../components/Buttons/TabButtonGf";
import Popup from "../../../../../../components/Pupup/Popup";
import Select from "../../../../../../components/Inputs/Select";
import Button2 from "@mui/material/Button";

import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import { UpdateCert } from "../../../../../../redux/Certifs/Certifs.actions";
import { validation } from "./validation";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { GetOnePatient } from "../../../../../../redux/Patients/patitents.actions";
import { DateInput } from "../../../../../../functions/DateParse";

const UpdatePopup = (props) => {
  const { handleClose, value } = props;
  const { id_consult, id } = useParams();
  const patient = useSelector((state) => state.patientsReducer.patient);
  const user = useSelector((state) => state.UserReducer.user);

  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setForm] = useState({ ...value });

  useEffect(() => {
    setForm({ ...value });
  }, [value]);

  useEffect(() => {
    if (id) {
      dispatch(GetOnePatient(id));
    }
  }, [id]);

  useEffect(() => {
    if (id_consult) {
      setForm({ ...form, consultation: id_consult });
    }
  }, [id_consult]);

  useEffect(() => {
    if (patient) {
      setForm({
        ...form,
        fullname_pat: `${patient.firstName} ${patient.lastName}`,
        cin_pat: patient.cin,
        nais_date_pat: patient.birthDate,
        nais_place_pat: patient.birthPlace,
        prof_pat: patient.profession,
      });
    }
  }, [patient]);

  useEffect(() => {
    if (user) {
      setForm({
        ...form,
        fullname_med: `${user.firstName} ${user.lastName}`,
      });
    }
  }, [user]);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_Submit = () => {
    dispatch(UpdateCert(form, handleClose));
  };

  return (
    <Popup handleClose={handleClose} width="900px">
      <div className={classes.main}>
        <div className="between">
          <h3>Modifier Certificat</h3>
        </div>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Nom et prénom du dentise</p>
            <Input
              onChange={handle_change}
              name="fullname_med"
              value={form.fullname_med}
              placeholder="Entrer le Nom et prénom du dentise"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Nom et prénom du patient </p>
            <Input
              onChange={handle_change}
              name="fullname_pat"
              value={form.fullname_pat}
              placeholder="Entrer Nom et prénom du patient"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Cin du patient </p>
            <Input
              onChange={handle_change}
              name="cin_pat"
              value={form.cin_pat}
              placeholder="Entrer Cin du patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Date de naissance</p>
            <Input
              onChange={handle_change}
              name="nais_date_pat"
              value={DateInput(form.nais_date_pat)}
              type="date"
              placeholder="Entrer le date de naissance du patient"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Emplacement de naissance</p>
            <Input
              onChange={handle_change}
              name="nais_place_pat"
              value={form.nais_place_pat}
              placeholder="Entrer l'emplacement de naissance du patient"
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
            <p>Type Certificat</p>
            <Select
              onChange={handle_change}
              name="type"
              value={form.type}
              items={[
                { name: "Certificat d'aptitude physique", value: "dispense" },
                { name: "Certificat de repos", value: "apti" },
              ]}
            />
          </Grid>

          <>
            <Grid item xs={6}>
              <p>Date de début de dispense</p>
              <Input
                onChange={handle_change}
                name="date_deb_disp"
                value={DateInput(form.date_deb_disp)}
                type="date"
                placeholder="Entrer date de début de dispense"
              />
            </Grid>

            <Grid item xs={6}>
              <p>Nombre des jours de dispense</p>
              <Input
                onChange={handle_change}
                name="nb_jour_disp"
                value={form.nb_jour_disp}
                placeholder="Entrer nombre des jours"
              />
            </Grid>
          </>

          {form.type === "apti" && (
            <>
              <Grid item xs={12}>
                <p>Profession</p>
                <Input
                  onChange={handle_change}
                  name="profession"
                  value={form.profession}
                  placeholder="Entrer la profession du patient"
                />
              </Grid>
            </>
          )}
        </Grid>

        <div className="buttons_group">
          <Button type="outlined" onClick={handle_Submit}>
            Annuler
          </Button>
          <Button onClick={handle_Submit}>Modifier Certificat</Button>
        </div>
      </div>
    </Popup>
  );
};

export default UpdatePopup;
