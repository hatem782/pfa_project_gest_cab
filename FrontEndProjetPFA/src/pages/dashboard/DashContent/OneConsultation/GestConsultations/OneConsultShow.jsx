import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import styles from "./styles.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { GetOneConsult } from "../../../../../redux/Consultations/Consultations.actions";

import BorderColorIcon from "@mui/icons-material/BorderColor";

// dialogs
import usePopup from "../../../../../hooks/UsePopup";
import UpdateItem from "./popups/UpdtPopup";
import { DateInput } from "../../../../../functions/DateParse";
import { GetAllActes } from "../../../../../redux/Actes/Actes.actions";

import TitleIcon from "@mui/icons-material/Title"; // type
import AirlineSeatFlatAngledIcon from "@mui/icons-material/AirlineSeatFlatAngled"; // actes
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile"; // files
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"; // date
import NotesIcon from "@mui/icons-material/Notes"; // description
import AccessTimeIcon from "@mui/icons-material/AccessTime"; // durée

function OneConsultShow() {
  const css = useStyles();
  const { id_consult } = useParams();
  const patient = useSelector((state) => state.patientsReducer.patient);
  const consult = useSelector(
    (state) => state.ConsultationsReducer.consultation
  );
  const [upd, openUpd, closeUpd] = usePopup();
  const dispatch = useDispatch();
  const items = [];

  useEffect(() => {
    if (id_consult) {
      dispatch(GetOneConsult(id_consult));
    }
  }, [id_consult]);

  return (
    <main className={css.main}>
      <div>
        <div className="dialogues"></div>

        <div className={css.filter}>
          <div className="part1">
            <h4>
              <span className="green">
                détaille consultation du patient {patient.firstName}{" "}
                {patient.lastName}
              </span>
            </h4>
          </div>

          <div className="part2">
            <Button
              variant="contained"
              onClick={openUpd}
              startIcon={<BorderColorIcon />}
            >
              Modifier Consultation
            </Button>
          </div>
        </div>
      </div>
      {upd && <UpdateItem handleClose={closeUpd} value={consult} />}
      {consult && <DetailleConsult data={consult} />}
    </main>
  );
}

const DetailleConsult = ({ data }) => {
  const actes = useSelector((state) => state.ActesReducer.actes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllActes());
  }, []);

  function openFullscreenImage(imageUrl) {
    const width = screen.width;
    const height = screen.height;

    const popup = window.open(
      imageUrl,
      "fullscreenImage",
      `width=${width},height=${height}`
    );
    popup.focus();
  }

  return (
    <div className={styles["main"]}>
      <div className={styles["part"]}>
        <div className={styles["icon"]}>
          <TitleIcon />
        </div>
        <h4>
          Type Consultation :{" "}
          <span className={styles["green"]}> {data.type} </span>
        </h4>
      </div>

      <div className={styles["part"]}>
        <div className={styles["icon"]}>
          <CalendarMonthIcon />
        </div>
        <h4>
          Jour du consultation :
          <span className={styles["green"]}> {DateInput(data.jour)} </span>à{" "}
          <span className={styles["green"]}>{data.temp_deb}</span>
        </h4>
      </div>

      <div className={styles["part"]}>
        <div className={styles["icon"]}>
          <AccessTimeIcon />
        </div>
        <h4>
          Durée du consultation :{" "}
          <span className={styles["green"]}> {data.duree} Minutes</span>
        </h4>
      </div>

      <div className={styles["part"]}>
        <div className={styles["icon"]}>
          <AirlineSeatFlatAngledIcon />
        </div>
        <h4>
          Les Actes Réalisés :{" "}
          <span className={styles["green"]}>
            {actes
              .filter((act) => data.actes.indexOf(act._id) !== -1)
              .map((act) => act.title)
              .join(", ")}
          </span>
        </h4>
      </div>

      <div className={styles["part"]}>
        <div className={styles["icon"]}>
          <NotesIcon />
        </div>
        <h4>Description : {data.description}</h4>
      </div>

      <div className={styles["part"]}>
        <div className={styles["icon"]}>
          <InsertDriveFileIcon />
        </div>
        <h4>Images Et Fichiers :</h4>

        <div className={styles["images"]}>
          {data.images.map((img, key) => {
            return (
              <img
                src={img}
                key={key}
                onClick={() => {
                  openFullscreenImage(img);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OneConsultShow;
