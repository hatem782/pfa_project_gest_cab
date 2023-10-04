import React, { useEffect, useState } from "react";

import Input from "../../../../../../components/Inputs/Input2";
import TextArea from "../../../../../../components/Inputs/TextArea";
import Button from "../../../../../../components/Buttons/TabButtonGf";
import Popup from "../../../../../../components/Pupup/Popup";
import Button2 from "@mui/material/Button";

import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import { CreateOrd } from "../../../../../../redux/Ordenances/Ordenances.actions";
import { validation } from "./validation";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import { GetOnePatient } from "../../../../../../redux/Patients/patitents.actions";

const AddPopup = (props) => {
  const { handleClose } = props;
  const { id_consult, id } = useParams();
  const patient = useSelector((state) => state.patientsReducer.patient);
  const user = useSelector((state) => state.UserReducer.user);

  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setForm] = useState({
    consultation: id_consult,
    date: new Date(),

    fullname_med: "",
    quality: "",
    speciality: "",
    fullname_pat: "",
    description: "",

    medic: [{ title: "", nb_in_day: "", nb_use_days: "" }],
  });

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
    if (validation(form)) {
      dispatch(CreateOrd(form, handleClose));
    }
  };

  const handleMedicAdd = () => {
    const newMedic = { title: "", nb_in_day: "", nb_use_days: "" };
    setForm((prevForm) => ({
      ...prevForm,
      medic: [...prevForm.medic, newMedic],
    }));
  };

  const handleMedicChange = (index, event) => {
    const { name, value } = event.target;
    setForm((prevForm) => {
      const updatedMedic = [...prevForm.medic];
      updatedMedic[index][name] = value;
      return { ...prevForm, medic: updatedMedic };
    });
  };

  const handleMedicDelete = (index) => {
    setForm((prevForm) => {
      const updatedMedic = [...prevForm.medic];
      updatedMedic.splice(index, 1);
      return { ...prevForm, medic: updatedMedic };
    });
  };

  return (
    <Popup handleClose={handleClose} width="900px">
      <div className={classes.main}>
        <div className="between">
          <h3>Ajouter Un Nouveau Ordennance</h3>
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
            <p>Qualité</p>
            <Input
              onChange={handle_change}
              name="quality"
              value={form.quality}
              placeholder="Entrer qualité de med"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Specialité</p>
            <Input
              onChange={handle_change}
              name="speciality"
              value={form.speciality}
              placeholder="Entrer specialité de med"
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
            <p
              style={{
                display: "flex",
                cursor: "pointer",
                margin: "0px 0px 20px 0px",
              }}
              onClick={handleMedicAdd}
            >
              <AddCircleIcon color="primary" /> Medicaments :
            </p>

            {form.medic.map((medic, index) => (
              <div key={index}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <p>Titre :</p>
                    <Input
                      name="title"
                      value={medic.title}
                      onChange={(event) => handleMedicChange(index, event)}
                      placeholder="Entrer titre du medicament"
                    />
                  </Grid>

                  <Grid item xs={5}>
                    <p>Posologie usuelle</p>
                    <Input
                      name="nb_in_day"
                      value={medic.nb_in_day}
                      onChange={(event) => handleMedicChange(index, event)}
                      placeholder="Nombre des fois par jour"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <p>Dosage</p>
                    <Input
                      name="nb_use_days"
                      value={medic.nb_use_days}
                      onChange={(event) => handleMedicChange(index, event)}
                      placeholder="Nombre des  jours"
                    />
                  </Grid>

                  <Grid item xs={3}>
                    <Button2
                      style={{ marginTop: "28px" }}
                      variant="contained"
                      onClick={() => handleMedicDelete(index)}
                    >
                      Delete
                    </Button2>
                  </Grid>
                </Grid>
                <Divider light={false} style={{ margin: "20px 0px" }} />
              </div>
            ))}
          </Grid>
        </Grid>

        <div className="buttons_group">
          <Button type="outlined" onClick={handle_Submit}>
            Annuler
          </Button>
          <Button onClick={handle_Submit}>Ajouter Ordennance</Button>
        </div>
      </div>
    </Popup>
  );
};

export default AddPopup;
