import React, { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";
import Input from "../../../../../components/Inputs/Input2";
import Button from "../../../../../components/Buttons/TabButtonGf";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: "650px",
    padding: "60px 40px",
  },
  main: {
    Width: "650px",

    "& h4": {
      color: "red",
      fontSize: "22px",
      margin: "0px",
      fontWeight: "500",
    },

    "& button": {
      height: "50px !important",
      margin: "auto !important",
    },
  },
}));

const Afficher = (props) => {
  const { dialog, handleClose } = props;
  const { active, value } = dialog;
  const classes = useStyles();

  const [form, setform] = useState({
    phone_number: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    console.log(form);
  }, [form]);

  const inputHandler = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Dialog
        classes={{ paper: classes.paper }}
        open={active}
        TransitionComponent={Transition}
        onClose={handleClose}
        scroll={"body"}
      >
        <div className={classes.main}>
          <h4>Désactiver votre compte</h4>

          <Input
            label="Entrer le numéro de téléphone"
            placeholder="Entrer le numéro de téléphone"
            type="text"
            name="phone_number"
            value={form.phone_number}
            onChange={inputHandler}
          />

          <Input
            label="Entrer votre mot de passe"
            placeholder="Entrer votre mot de passe"
            type="password"
            name="password"
            value={form.password}
            onChange={inputHandler}
          />

          <Input
            label="Confirmer votre mot de passe"
            placeholder="Confirmer votre mot de passe"
            type="password"
            name="password2"
            value={form.password2}
            onChange={inputHandler}
          />
          <br />
          <br />
          <Button>Désactiver mon compte</Button>
        </div>
      </Dialog>
    </div>
  );
};

export default Afficher;
