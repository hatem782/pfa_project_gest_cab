import React from "react";

import Dialog from "@mui/material/Dialog";

import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const { REACT_APP_API_HOST } = process.env;

const useStyles = makeStyles((theme) => ({
  paper: {
    minWidth: "620px",
  },
  main: {
    Width: "620px",
    height: "800px",
    overflow: "hidden",

    "& iframe": {
      width: "100%",
      height: "100%",
    },
  },
}));

const Afficher = (props) => {
  const { dialog, handleClose } = props;
  const { active, value } = dialog;
  const classes = useStyles();

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
          <iframe src={REACT_APP_API_HOST + value}></iframe>
        </div>
      </Dialog>
    </div>
  );
};

export default Afficher;
