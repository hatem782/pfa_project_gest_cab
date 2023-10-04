import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GetOnePatient } from "../../../../redux/Patients/patitents.actions";
import { GetOneByDoc } from "../../../../redux/Consultations/Consultations.actions";
import styles from "./styles.module.scss";

import CustomAvatar from "../../../../components/CustomAvatar/CustomAvatar";
import { GetAge } from "../../../../functions/DateParse";
import { sexParser } from "../../../../functions/ValuesParser";

import GestConsultations from "./GestConsultations/GestConsultations";
import Appointments from "./Appointments/Appointments";
import GestRecettes from "./Recette/GestRecettes";
import GestOrdenances from "./Ordenances/GestOrdenances";
import GestCertifications from "./Certifications/GestCertifications";
import GestAntecedents from "./Antecedents/GestAntecedents";

import { Button } from "@mui/material";

const selections = [
  { title: "Consultations", Component: <GestConsultations /> },
  { title: "Rendez-vous", Component: <Appointments /> },
  { title: "Recettes", Component: <GestRecettes /> },
  { title: "Ordonnances", Component: <GestOrdenances /> },
  { title: "Antecedents", Component: <GestAntecedents /> },
  { title: "Certeficats", Component: <GestCertifications /> },
  { title: "CNAM", Component: <h1></h1> },
];

function OnePatient() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patientsReducer.patient);

  const [selected, setselected] = useState("Consultations");

  useEffect(() => {
    dispatch(GetOnePatient(id));
    document.body.style.backgroundColor = "#f5f7f8";
    return () => {
      document.body.style.backgroundColor = "#fff";
    };
  }, [id]);

  useEffect(() => {
    if (patient.id_dossier) {
      dispatch(GetOneByDoc(patient.id_dossier));
    }
  }, [patient]);

  return (
    <div className={styles["main"]}>
      <h2>
        Fiche Patient : {patient.firstName} {patient.lastName}
      </h2>
      <div className={styles["container"]}>
        <div className={styles["left"]}>
          <div className={styles["card1"]}>
            <div className={styles["avatar"]}>
              <CustomAvatar
                type="rounded"
                text={`${patient.firstName} ${patient.lastName}`}
              />
            </div>
            <h2>
              {patient.firstName} {patient.lastName}
            </h2>
            <h2 className={styles["text1"]}>
              Age : {GetAge(patient.birthDate)}
            </h2>
          </div>

          <div className={styles["card2"]}>
            <h2>Information :</h2>

            <h2 className={styles["text2"]}>CIN : {patient.cin}</h2>

            <h2 className={styles["text2"]}>Code APCI : {patient.code_apci}</h2>

            <h2 className={styles["text2"]}>
              Genre : {sexParser(patient.sex)}
            </h2>

            <h2 className={styles["text2"]}>
              Etat-civil : {patient.etat_civil}
            </h2>

            <h2 className={styles["text2"]}>
              Profession : {patient.profession}
            </h2>

            <h2 className={styles["text2"]}>
              Numéro téléphone : {patient.phone}
            </h2>

            <h2 className={styles["text2"]}>Email : {patient.email}</h2>

            <h2 className={styles["text2"]}>Adresse : {patient.adress}</h2>
          </div>
        </div>
        <div className={styles["right"]}>
          <div className={styles["buttons"]}>
            {selections.map((item, key) => {
              return (
                <Button
                  key={key}
                  variant={item.title === selected ? "contained" : "text"}
                  onClick={() => {
                    setselected(item.title);
                  }}
                >
                  {item.title}
                </Button>
              );
            })}
          </div>

          <div className={styles["section"]}>
            {
              selections.find((item) => {
                return item.title === selected;
              }).Component
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnePatient;
