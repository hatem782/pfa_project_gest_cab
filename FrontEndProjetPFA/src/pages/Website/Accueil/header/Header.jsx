import React from "react";
import { useStyles } from "./HeaderStyles";
import header from "../../../../assets/images/website/header.png";
import dash_exp1 from "../../../../assets/images/website/dash_exp1.png";
import Input from "../../../../components/Inputs/Input2";
import Button from "../../../../components/Buttons/SubmitBtn";

function Header() {
  const css = useStyles();

  return (
    <div className={css.main}>
      <img className="background" src={header} />
      <div className="main-content">
        <div className="content">
          <h1>Faites confiance à l'expérience.</h1>
          <h1>Faites confiance à la technologie.</h1>
          <h1>Faites confiance à PBird.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
            veritatis esse quo dolores doloribus iusto! Rem commodi asperiores
            amet beatae ad cumque illum sed repudiandae ipsum? Iusto ea qui
            nobis.
          </p>
          <div className="form">
            <Input placeholder="Name@company.com" />
            <Button> Commencez maintenant </Button>
          </div>
        </div>
        <div className="dash">
          <img src={dash_exp1} />
        </div>
      </div>
    </div>
  );
}

export default Header;
