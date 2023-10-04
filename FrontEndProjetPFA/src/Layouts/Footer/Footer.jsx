import React from "react";
import { useStyles } from "./FooterStyle";
import Input from "../../components/Inputs/Input2";
import Button from "../../components/Buttons/SubmitBtn";
import logo from "../../assets/images/website/logo.png";

import f from "../../assets/images/website/f.png";
import t from "../../assets/images/website/t.png";
import i from "../../assets/images/website/i.png";
import l from "../../assets/images/website/l.png";

import google from "../../assets/images/website/googleplay.png";
import apple from "../../assets/images/website/appstore.png";

function Footer() {
  const css = useStyles();

  return (
    <div className={css.main}>
      <img src={logo} />
      <br />
      <div className="part1">
        <div className="grid1">
          <p className="title">Produits</p>
          <p className="">Particulier</p>
          <p className="">Entreprise</p>
          <p className="">Télécharger</p>
          <p className="">Sécurité</p>
          <p className="">Fonctionnalités</p>
        </div>
        <div className="grid1">
          <p className="title">Ressources</p>
          <p className="">Blog PBird</p>
        </div>
        <div className="grid1">
          <p className="title">Ressources</p>
          <p className="">Comment ça fonctionne ?</p>
          <p className="">Guide</p>
          <p className="">Nous contacter</p>
          <p className="">À propos de nous</p>
        </div>
        <div className="grid1">
          <p className="title">Contact</p>
          <p className="">contact@pbird-france.fr</p>
          <p className="">Ligne d'assistance: +33 6 67 79 45 43</p>
        </div>
        <div className="grid2">
          <p className="title">NEWSLETTER</p>
          <p className="">Abonnez-vous à notre newsletter</p>
          <div className="form">
            <Input placeholder="Name@company.com" />
            <Button> Subscribe </Button>
          </div>
          <img className="rx" src={f} />
          <img className="rx" src={t} />
          <img className="rx" src={i} />
          <img className="rx" src={l} />
        </div>
      </div>

      <hr />

      <div className="part2">
        <p className="title">Politique de confidentialité</p>
        <p className="title">Termes et conditions</p>
        <p className="title">Contact</p>
        <p className="title">Politique de confidentialité</p>

        <img src={google} />
        <img src={apple} />
      </div>
    </div>
  );
}

export default Footer;
