import React, { useState, useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import Input from "../../../../../components/Inputs/Input2";
import Button from "../../../../../components/Buttons/TabButtonGf";

import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import Slide from "@mui/material/Slide";
import { useStyles } from "./styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Partager = (props) => {
  const [type, settype] = useState(""); // type is : email - mobile
  const [dests, setdests] = useState({ value0: "" });
  const { dialog, handleClose } = props;
  const { active, value } = dialog;
  const [disable, setDisable] = useState(false);

  const classes = useStyles();

  const shareWithEmail = () => {
    settype("email");
  };

  const shareWithMobile = () => {
    settype("mobile");
  };

  const inputHandler = (e) => {
    setdests({
      ...dests,
      [e.target.name]: e.target.value,
    });
  };

  const addPerso = () => {
    let num = Object.keys(dests).length;
    let key = "value" + num;
    setdests({ ...dests, [key]: "" });
  };

  useEffect(() => {
    console.log(dests);
  }, [dests]);

  const errorCallBack = () => {
    setDisable(false);
  };

  const handleSubmit = () => {
    setDisable(true);
    let users = Object.keys(dests)
      .map((item) => {
        return type === "mobile"
          ? { phone_number: dests[item] }
          : { email: dests[item] };
      })
      .filter((item) => {
        return (
          (type === "mobile" && item.phone_number) ||
          (!type === "mobile" && item.email)
        );
      });
  };

  return (
    <div>
      <Dialog
        classes={{ paper: classes.paper }}
        open={active}
        TransitionComponent={Transition}
        onClose={handleClose}
        scroll={"paper"}
      >
        <div className={classes.main}>
          <h3>Partager votre Fichier</h3>
          {type === "" ? (
            <div className="choix">
              <div className="option" onClick={shareWithMobile}>
                <div className="border">
                  <ContactPhoneIcon className="icon" />
                </div>
                <p>Numéro de téléphone</p>
              </div>
              <div className="option" onClick={shareWithEmail}>
                <div className="border">
                  <ContactMailIcon className="icon" />
                </div>

                <p>Adresse email</p>
              </div>
            </div>
          ) : null}
          {type === "mobile" ? (
            <div>
              <p>Entrer le numéro de téléphone</p>
              {Object.keys(dests).map((item, key) => {
                return (
                  <Input
                    key={key}
                    name={item}
                    onChange={inputHandler}
                    value={dests[item]}
                    placeholder="+ - -   - - -   - - -"
                  />
                );
              })}
              <h4 onClick={addPerso}>Ajouter un autre numéro</h4>
              <Button loading={disable} onClick={handleSubmit}>
                Partager
              </Button>
            </div>
          ) : null}
          {type === "email" ? (
            <div>
              <p>Entrer l'email</p>

              {Object.keys(dests).map((item, key) => {
                return (
                  <Input
                    key={key}
                    onChange={inputHandler}
                    name={item}
                    value={dests[item]}
                    placeholder="email"
                  />
                );
              })}
              <h4 onClick={addPerso}>Ajouter un autre email</h4>
              <Button loading={disable}>Partager</Button>
            </div>
          ) : null}
        </div>
      </Dialog>
    </div>
  );
};

export default Partager;
