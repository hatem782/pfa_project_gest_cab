import React from "react";
import Dash from "../../WebsiteComponents/Dash";
import { useStyles } from "./Section1Styles";

function Section1() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <div className="section">
        <div className="content">
          <Dash />
          <br />
          <h2>La meilleure solution </h2>
          <h2>écologique pour vous</h2>
          <p>
            La plateforme permet l'accès à tous types d'utilisateurs pour
            effectuer des échanges en réduisant le risque de perte de documents
            et en assurant une traçabilité optimale grâce à un système
            d'archivage numérique qui réduit la surface requise de vos fichiers
            et les frais généraux associés.
          </p>
          <h3>À propos de nous {"   "} ➜</h3>
        </div>
        <div className="steps">
          {steps.map((item, key) => {
            return <Step end={key === steps.length - 1} {...item} key={key} />;
          })}
        </div>
      </div>
    </div>
  );
}

const steps = [
  {
    num: 1,
    title: "Expérience géniale",
    txt: `Vous pouvez importer vos documents depuis votre appareil et voir vos documents reçus sur votre espace ainsi que la possibilité de créer des modèles personnalisés de votre choix et de les utiliser lorsque vous partagez et créez un fichier qui contribue à le rendre unique.`,
  },
  {
    num: 2,
    title: "Sécurisé Multi Utilisable",
    txt: `Grâce au système Cloud, vous avez la possibilité de conserver vos documents en toute sécurité et pourra être partagée des milliers de fois avec plusieurs personnes via des outils innovantes et sécurisés.`,
  },
  {
    num: 3,
    title: "Echange rapide",
    txt: `La plateforme permet un échange facile et utile en simplifiant toutes les démarches grâce au QR code.`,
  },
];

const Step = ({ num, title, txt, end = false }) => {
  const css = useStyles();
  return (
    <div className={css.step}>
      <div className="num-part">
        <p className="num">{num}</p>
        {<span className="traject" />}
      </div>
      <div className="txt-part">
        <h3>{title}</h3>
        <p>{txt}</p>
      </div>
    </div>
  );
};

export default Section1;
