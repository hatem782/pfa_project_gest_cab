import React, { useRef, useEffect } from "react";

import Button from "../../../../../../components/Buttons/SubmitBtn";

import { useStyles } from "./styles";
import Popup from "../../../../../../components/Pupup/Popup";

import { useDispatch, useSelector } from "react-redux";
import { GetOnePatient } from "../../../../../../redux/Patients/patitents.actions";

import styles from "./styles.module.scss";
import { DateInput } from "../../../../../../functions/DateParse";
import { sexParser } from "../../../../../../functions/ValuesParser";
import { useParams } from "react-router-dom";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DeletePopup = (props) => {
  const { handleClose, value } = props;
  const classes = useStyles();
  const patient = useSelector((state) => state.patientsReducer.patient);
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
              <p style={{ color: "#17e6c8" }} className={styles["size-1"]}>
                {value.quality} / {value.speciality}
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
              <p className={styles["size-1"]}>{DateInput(value.date)}</p>

              <span className={styles["sep-50"]} />

              <p className={styles["size-1"]}>Pat : {value.fullname_pat}</p>
              <p className={styles["size-2"]}>S : {sexParser(patient.sex)}</p>
              <p className={styles["size-2"]}>
                DN : {DateInput(patient.birthDate)}
              </p>
            </div>
          </div>

          <div className={styles["body"]}>
            <ul>
              {value.medic.map((medic, key) => {
                return (
                  <li key={key}>
                    {medic.title} :{" "}
                    <span className={styles["green"]}>
                      {medic.nb_in_day}
                      /Jour
                    </span>{" "}
                    pendant{" "}
                    <span className={styles["green"]}>
                      {medic.nb_use_days}-Jour
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={styles["footer-container"]}>
            <div className={styles["footer"]}>
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

export default DeletePopup;
