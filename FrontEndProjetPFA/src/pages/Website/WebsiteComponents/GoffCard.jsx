import React from "react";

import { makeStyles } from "@mui/styles";
import check from "../../../assets/images/website/check.png";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  main: {
    width: "40%",
    height: "100%",
    backgroundColor: theme.palette.primary.main,
    borderRadius: "50px",
    boxShadow: "0px 0px 20px #00000022",
    padding: "40px",

    color: "white",
    "& h2,h3,h4,h5": {
      margin: "0px",
    },

    "& h2": {
      fontSize: "40px",
    },

    "& h3": {
      fontSize: "30px",
      fontWeight: "600",
    },

    "& h5": {
      fontSize: "18px",
      fontWeight: "400",
      margin: "10px 0px",
    },

    "& .offre": {
      margin: "50px 0px",
      display: "flex",
      alignItems: "center",

      "& span": {
        fontSize: "20px",
        padding: "0px 0px 0px 10px",
      },
    },

    "& .footer": {
      width: "100%",
      marginTop: "110px",
      "& button": {
        padding: "10px 25px ",
        color: "white",
        border: "solid 3px white",
        borderRadius: "500px",
        backgroundColor: "transparent",
        fontSize: "20px",
        fontWeight: "500",
        outline: "none",
        display: "block",
        margin: "10px auto",
        cursor: "pointer",
      },
      "& p": {
        textAlign: "center",
        fontSize: "20px",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
  },
}));

function OffCard() {
  const navig = useNavigate();

  const css = useStyles();
  return (
    <div className={css.main}>
      <h2>Gratuit</h2>
      <h5>Aucun paiement nécessaire</h5>
      <h3>Le forfait comprend :</h3>

      <div className="offre">
        <img src={check} /> <span> Stockage de fichiers jusqu'à 5Go</span>
      </div>

      <div className="offre">
        <img src={check} /> <span> Plus de 5 templates gratuits</span>
      </div>

      <div className="offre">
        <img src={check} />{" "}
        <span> Prévisualisation des fichiers (images, vidéos & audio)</span>
      </div>

      <div className="offre">
        <img src={check} /> <span> Gestion des envois</span>
      </div>

      <div className="offre">
        <img src={check} />{" "}
        <span> Le compte peut être utilisé par 1 utilisateur.</span>
      </div>

      <div className="footer">
        <button
          onClick={() => {
            navig("/registration");
          }}
        >
          Commencer
        </button>
        <p>Voir tous les inclus</p>
      </div>
    </div>
  );
}

export default OffCard;
