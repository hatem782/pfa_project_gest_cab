import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";

import { useStyles } from "./styles";
import Popup from "../../../../../components/Pupup/Popup";

import { useDispatch, useSelector } from "react-redux";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

import { GetAllDates } from "../../../../../redux/Appointements/Appoints.actions";

const PopCalendar = (props) => {
  const { handleClose } = props;
  const classes = useStyles();
  const dispatch = useDispatch();
  const events = useSelector((state) => state.AppintementReducer.calendar);

  useEffect(() => {
    dispatch(GetAllDates());
  }, []);

  useEffect(() => {
    console.log(events);
  }, [events]);

  const handleEventClick = (info) => {
    console.log("Location: ", info.event.extendedProps._id);
  };

  function handleEventResize(event) {
    console.log("Event resized:", event);
  }

  function handleEventDrop(event) {
    console.log("Event dropped:", event);
  }

  return (
    <Popup handleClose={handleClose} width="1000px">
      <div className={classes.main}>
        <h3>Liste des rendez-vous</h3>
        <FullCalendar
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          initialView="dayGridMonth" // timeGridDay - timeGridWeek - dayGridMonth - listWeek
          editable={true}
          events={events}
          //timeZone="Africa/Tunis"
          eventClick={handleEventClick}
          eventResize={handleEventResize}
          eventDrop={handleEventDrop}
          headerToolbar={{
            start: "today,prev,next",
            center: "title",
            end: "timeGridDay,timeGridWeek,dayGridMonth,listWeek",
          }}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: false,
            hour12: false,
            timeFormat: "HH:mm",
          }}
          buttonText={{
            today: "Today",
            month: "Month",
            week: "Week",
            day: "Day",
            list: "List",
          }}
        />
      </div>
    </Popup>
  );
};

export default PopCalendar;
