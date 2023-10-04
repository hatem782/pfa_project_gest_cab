import React, { useRef, useEffect } from "react";

import Button from "../../../../../../components/Buttons/SubmitBtn";

import { useStyles } from "./styles";
import Popup from "../../../../../../components/Pupup/Popup";

import { useDispatch, useSelector } from "react-redux";
import { GetOnePatient } from "../../../../../../redux/Patients/patitents.actions";

import styles from "./styles.module.scss";
import { AddDays, DateInput } from "../../../../../../functions/DateParse";
import { sexParser } from "../../../../../../functions/ValuesParser";
import { useParams } from "react-router-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DeletePopup = (props) => {
  const { handleClose, value } = props;
  const classes = useStyles();

  const user = useSelector((state) => state.UserReducer.user);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(GetOnePatient(id));
    }
  }, [id]);

  const divRef = useRef(null);

  const handleDownloadPDF = () => {
    const divToPrint = divRef.current;

    html2canvas(divToPrint).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 20, 20);
      pdf.save("document.pdf");
    });
  };

  return (
    <Popup handleClose={handleClose} width="700px">
      <div className={classes.main}>
        <div className={styles["ordenance"]} ref={divRef}>
          <div className={styles["image"]}></div>
          <div className={styles["head"]}>
            <div className={styles["part-1"]}>
              <p style={{ color: "#17e6c8" }} className={styles["size-1"]}>
                D.{value.fullname_med}
              </p>

              <span className={styles["sep-20"]} />

              <p style={{ color: "#17e6c8" }} className={styles["size-1"]}>
                Rue 4700 Manouba
              </p>
              <p style={{ color: "#17e6c8" }} className={styles["size-1"]}>
                Tel : {user.phone}
              </p>
            </div>
            <div className={styles["part-2"]}>
              <p className={styles["size-1"]}>Date de rédaction</p>
              <p className={styles["size-1"]}>{DateInput(value.createdAt)}</p>
            </div>
          </div>

          {value.type === "apti" && <DispenseTravaille value={value} />}
          {value.type !== "apti" && <DispensePhysique value={value} />}

          <div className={styles["footer-container"]}>
            <div className={styles["footer"]}>
              <p>
                Le
                <span className={styles["green"]}>
                  {` ${DateInput(value.createdAt)} `}
                </span>
                , Tunis
              </p>
              <p>Signature ici</p>
              <br />
              <p>...</p>
            </div>
          </div>
        </div>

        <div className="buttons_group">
          <Button onClick={handleDownloadPDF}>Imprimer</Button>
        </div>
      </div>
    </Popup>
  );
};

const DispenseTravaille = ({ value }) => {
  return (
    <div className={styles["body"]}>
      <h3>Certificat de repos</h3>

      <p>
        Je Soussigné Docteur
        <span className={styles["green"]}>
          {` ${value.fullname_med.toUpperCase()} `}
        </span>
      </p>
      <p>
        Certifie que l'état de santé de M/MA{" "}
        <span className={styles["green"]}>
          {value.fullname_pat.toUpperCase()}
        </span>
      </p>
      <p>
        Nécessite un traitement avec arret de travail de {value.nb_jour_disp}{" "}
        Jours <br /> De
        <span className={styles["green"]}>
          {` ${DateInput(value.date_deb_disp)} `}
        </span>
        au
        <span className={styles["green"]}>
          {` ${AddDays(value.date_deb_disp, value.nb_jour_disp)} `}
        </span>
      </p>

      <p>
        Lui permet de reprendre son travaille en date du{" "}
        <span className={styles["green"]}>
          {` ${AddDays(value.date_deb_disp, value.nb_jour_disp + 1)} `}
        </span>
      </p>
    </div>
  );
};

const DispensePhysique = ({ value }) => {
  const patient = useSelector((state) => state.patientsReducer.patient);
  return (
    <div className={styles["body"]}>
      <h3>Certificat d'aptitude physique</h3>

      <p>
        Je Soussigné Docteur
        <span className={styles["green"]}>
          {` ${value.fullname_med.toUpperCase()} `}
        </span>
      </p>
      <p>
        Certifié avoir examiné ce jour M/MA
        <span className={styles["green"]}>
          {` ${value.fullname_pat.toUpperCase()} `}
        </span>
      </p>

      <p>
        Né(e) le : {DateInput(patient.birthDate)}{" "}
        {patient.birthPlace.toUpperCase()} ; CIN n° : {patient.cin}
      </p>

      <p>
        Et atteste que l'état de santé de l'intéresse (e) le rend{" "}
        <span className={styles["green"]}> inapte </span> pour exercer les
        activiés physiques et sportives
      </p>
      <p>
        De <span className={styles["green"]}> {value.nb_jour_disp} </span> Jours{" "}
        de
        <span className={styles["green"]}>
          {" "}
          {DateInput(value.date_deb_disp)}
        </span>{" "}
        au{" "}
        <span className={styles["green"]}>
          {" "}
          {AddDays(value.date_deb_disp, value.nb_jour_disp)}
        </span>{" "}
      </p>
    </div>
  );
};

export default DeletePopup;
