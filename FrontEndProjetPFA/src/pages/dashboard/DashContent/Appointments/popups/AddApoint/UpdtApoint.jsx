import React, { useEffect, useState } from "react";

import Input from "../../../../../../components/Inputs/Input2";
import TextArea from "../../../../../../components/Inputs/TextArea";
import Button from "../../../../../../components/Buttons/TabButtonGf";
import Popup from "../../../../../../components/Pupup/Popup";
import PopCalendar from "../PopCalendar";

import { useStyles } from "./styles";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import {
  CombineDateTime,
  DateInput,
  TimeInput,
  subtractOneHour,
} from "../../../../../../functions/DateParse";

import { useDispatch } from "react-redux";
import { UpdateDateAction } from "../../../../../../redux/Appointements/Appoints.actions";
import { validationRDV } from "./validation";
import usePopup from "../../../../../../hooks/UsePopup";

const UpdtApoint = (props) => {
  const { handleClose, value } = props;
  const [open, set_open, set_close] = usePopup();

  const dispatch = useDispatch();
  const classes = useStyles();
  const [form, setForm] = useState({
    title: "",
    description: "",
    start: TimeInput(new Date()),
    end: TimeInput(new Date()),
    // for pat
    cin: "",
    firstName: "",
    lastName: "",
    phone: "",
    // temp
    jour: new Date(),
  });

  useEffect(() => {
    setForm({
      ...value,
      start: TimeInput(value.start),
      end: TimeInput(value.end),
      jour: value.start,
    });
  }, [value]);

  const handle_change = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handle_Submit = () => {
    let new_from = fix_values(form);
    if (validationRDV(new_from)) {
      new_from.start = subtractOneHour(CombineDateTime(form.jour, form.start));
      new_from.end = subtractOneHour(CombineDateTime(form.jour, form.end));
      delete new_from.jour;
      console.log(new_from);
      dispatch(UpdateDateAction(value._id, new_from, handleClose));
    }
  };

  return (
    <Popup handleClose={handleClose} width="900px">
      <div className={classes.main}>
        <div className="between">
          <h3>Modifier Rendez-Vous</h3>
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

          <Grid item xs={12}>
            <p>Jour de RDV</p>
            <Input
              onChange={handle_change}
              name="jour"
              type="date"
              value={DateInput(form.jour)}
              placeholder="Entrer jour"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Date Deb</p>
            <Input
              onChange={handle_change}
              name="start"
              type="time"
              value={form.start}
            />
          </Grid>

          <Grid item xs={6}>
            <p>Date Fin</p>
            <Input
              onChange={handle_change}
              name="end"
              type="time"
              value={form.end}
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

          <Grid item xs={12}>
            <p>Pat Cin</p>
            <Input
              onChange={handle_change}
              name="cin"
              value={form.cin}
              placeholder="Entrer patient cin"
            />
          </Grid>

          <Grid item xs={12}>
            <p>Pat Phone</p>
            <Input
              onChange={handle_change}
              name="phone"
              value={form.phone}
              placeholder="Entrer patient phone"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Pat Nom</p>
            <Input
              onChange={handle_change}
              name="firstName"
              value={form.firstName}
              placeholder="Entrer patient Nom"
            />
          </Grid>

          <Grid item xs={6}>
            <p>Pat Prénom</p>
            <Input
              onChange={handle_change}
              name="lastName"
              value={form.lastName}
              placeholder="Entrer patient Prénom"
            />
          </Grid>
        </Grid>

        <div className="buttons_group">
          <Button type="outlined" onClick={handle_Submit}>
            Annuler
          </Button>
          <Button onClick={handle_Submit}>Modifier Rendez-vous</Button>
        </div>
      </div>
      {open && <PopCalendar handleClose={set_close} />}
    </Popup>
  );
};

export default UpdtApoint;

const fix_values = (data) => {
  let new_data = { ...data };
  delete new_data._id;
  delete new_data.backgroundColor;
  delete new_data.borderColor;
  delete new_data.textColor;
  delete new_data.editable;
  delete new_data.presence;
  delete new_data.appoint_type;
  delete new_data.createdAt;
  delete new_data.updatedAt;
  delete new_data.__v;

  return new_data;
};
