import React, { useEffect, useState } from "react";
import { useStyles } from "./LoginStyles";
import { Grid } from "@mui/material";
import img from "../../../assets/images/website/log.jpg";

import logo from "../../../assets/images/website/Logo2.png";
import Input2 from "../../../components/Inputs/Input2";
import SubmitBtn from "../../../components/Buttons/SubmitBtn";
import NavLinkEdited from "../../../components/NavLink/NavLink";

import { ActionLogin } from "../../../redux/user/user.actions";
import { LoginMV } from "./validation";
import { useDispatch } from "react-redux";

function SignIn() {
  const css = useStyles();
  const dispatch = useDispatch();

  const [form, setform] = useState({
    login: "hatem780",
    password: "123456789",
  });

  const handle_change = (e) => {
    const { name, value } = e.target;
    setform({ ...form, [name]: value });
  };

  const submit = (e) => {
    e.preventDefault();
    if (LoginMV(form)) {
      dispatch(ActionLogin(form));
    }
  };

  return (
    <main className={css.main}>
      <Grid container spacing={0}>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <div
            className="images"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        </Grid>
        <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
          <div className="login">
            <div>
              <img src={logo} alt="PBird" className="logo"   />

              <div className="title">
                <h1>Bienvenue sur <strong>Dental Care</strong> </h1>
                <p>
                  Votre Plateforme pour la gestion de votre cabinet dentaire
                  <span className="main-color"> </span>
                </p>
              </div>

              <form>
                <Input2
                  label="Login"
                  type="text"
                  name="login"
                  value={form.login}
                  onChange={handle_change}
                />
                <br></br>
                
                <Input2
                  label="Mot de passe"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handle_change}
                />
                <div className="check-forget">
                  <NavLinkEdited to={"/reset_pass"}>
                    Mot de passe oublié ?
                  </NavLinkEdited>
                </div>
                <SubmitBtn onClick={submit}> Connexion </SubmitBtn>
              </form>
            </div>

            <h6>
              En vous inscrivant, vous acceptez <span> les Conditions </span> et
              <span> la Politique de confidentialité.</span>
            </h6>
          </div>
        </Grid>
      </Grid>
    </main>
  );
}

export default SignIn;
