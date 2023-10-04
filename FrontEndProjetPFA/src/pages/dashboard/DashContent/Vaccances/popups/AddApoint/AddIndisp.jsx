import React, { useState } from "react";

import Input from "../../../../../../components/Inputs/Input2";
import TextArea from "../../../../../../components/Inputs/TextArea";
import Button from "../../../../../../components/Buttons/TabButtonGf";
import Popup from "../../../../../../components/Pupup/Popup";
import PopCalendar from "../PopCalendar";

import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { DateTimeInput } from "../../../../../../functions/DateParse";

import { useDispatch } from "react-redux";
import { CreateVcct } from "../../../../../../redux/Appointements/Appoints.actions";
import { validationVcc } from "./validation";
import usePopup from "../../../../../../hooks/UsePopup";

const AddVacance = (props) => {
  const { handleClose } = props;
  const [open, set_open, set_close] = usePopup();

  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setForm] = useState({
    title: "",
    description: "",
    start: new Date(),
    end: new Date(),
  });

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_Submit = () => {
    if (validationVcc(form)) {
      dispatch(CreateVcct(form, handleClose));
    }
  };

  return (
    <Popup handleClose={handleClose} width="900px">
      <div className={classes.main}>
        <div className="between">
          <h3>Ajouter Un Date</h3>
          <IconButton
            color="primary"
            component="label"
            size="large"
            onClick={set_open}
          >
            <CalendarMonthIcon fontSize="inherit" />
          </IconButton>
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <p>Libelle</p>
            <Input
              onChange={handle_change}
              name="title"
              value={form.title}
              placeholder="Entrer le title"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Date Deb</p>
            <Input
              onChange={handle_change}
              name="start"
              type="datetime-local"
              value={DateTimeInput(form.start)}
            />
          </Grid>

          <Grid item xs={6}>
            <p>Date Fin</p>
            <Input
              onChange={handle_change}
              name="end"
              type="datetime-local"
              value={DateTimeInput(form.end)}
            />
          </Grid>

          <Grid item xs={12}>
            <p>Description</p>
            <TextArea
              onChange={handle_change}
              name="description"
              value={form.description}
              placeholder="Entrer description"
              multiline
              maxRows={4}
            />
          </Grid>
        </Grid>

        <div className="buttons_group">
          <Button type="outlined" onClick={handle_Submit}>
            Annuler
          </Button>
          <Button onClick={handle_Submit}>Ajouter Date</Button>
        </div>
      </div>
      {open && <PopCalendar handleClose={set_close} />}
    </Popup>
  );
};

export default AddVacance;
