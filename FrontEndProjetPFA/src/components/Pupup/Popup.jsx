import React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { makeStyles } from "@mui/styles";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Popup = (props) => {
  const { handleClose, children, width = "650px" } = props;

  const classes = makeStyles((theme) => ({
    paper: {
      minWidth: width,
    },
  }))();

  return (
    <div>
      <Dialog
        classes={{ paper: classes.paper }}
        open={true}
        TransitionComponent={Transition}
        onClose={handleClose}
        scroll={"paper"}
      >
        {children}
      </Dialog>
    </div>
  );
};

export default Popup;
