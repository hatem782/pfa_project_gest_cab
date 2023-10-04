import React from "react";
import { useStyles } from "./PromoStyles";
import promo_device from "../../../../assets/images/website/promo_device.png";
import promo_bg from "../../../../assets/images/website/promo_bg.png";
import Input from "../../../../components/Inputs/Input2";
import Button from "../../../../components/Buttons/SubmitBtn";

function Promo() {
  const css = useStyles();

  return (
    <div style={{ backgroundImage: `url(${promo_bg})` }} className={css.main}>
      <img src={promo_device} />
      <div className="content">
        <h1>
          Profitez d'un essai gratuit de 14 jours pour les particuliers et les
          entreprises.
        </h1>
        <p>
          Des milliers d'équipes utilisent déjà PBird et améliorent leurs
          méthodes de travail
        </p>
        <div className="form">
          <Input placeholder="Name@company.com" />
          <Button> Commencez maintenant </Button>
        </div>
      </div>
    </div>
  );
}

export default Promo;
