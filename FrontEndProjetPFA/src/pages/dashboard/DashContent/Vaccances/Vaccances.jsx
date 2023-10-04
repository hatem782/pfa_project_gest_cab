import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Button from "@mui/material/Button";
import { Table, Th, Td, Thr, Tr } from "../../../../components/Table/Table";

import { useDispatch, useSelector } from "react-redux";
import {
  GetAllRdvs,
  GetAllVccs,
} from "../../../../redux/Appointements/Appoints.actions";

import { Grid, Paper, TextField } from "@mui/material";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import EventBusyIcon from "@mui/icons-material/EventBusy";

// dialogs
import usePopup from "../../../../hooks/UsePopup";
import PopCalendar from "./popups/PopCalendar";
import AddIndisp from "./popups/AddApoint/AddIndisp";
import DeletePopup from "./DeletePopup/DeletePopup";
import { DateInput, TimeInput } from "../../../../functions/DateParse";

import UpdtIndisp from "./popups/AddApoint/UpdtIndisp";

function Vaccances() {
  const css = useStyles();
  const vccs = useSelector((state) => state.AppintementReducer.vccs);
  const [add, openAdd, closeAdd] = usePopup();
  const [add2, openAdd2, closeAdd2] = usePopup();
  const [openCalend, h_openCalend, h_closeCalend] = usePopup();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllVccs());
  }, []);

  return (
    <main className={css.main}>
      <h4>Gestion des congés et des périodes d'indisponibilité</h4>

      <div>
        <div className="dialogues"></div>

        <div className={css.filter}>
          <div className="part1">
            {/* <h4>Filtrage</h4>
            <Grid container spacing={2} className="fields">
              <Grid item lg={4}>
                <TextField label="Cin" />
              </Grid>
              <Grid item lg={4}>
                <TextField label="Nom & Prénom" />
              </Grid>
              <Grid item lg={4}>
                <TextField label="Num Tel" />
              </Grid>
            </Grid> */}
          </div>

          <div className="part2">
            <Button
              variant="contained"
              onClick={h_openCalend}
              startIcon={<CalendarMonthIcon />}
            >
              Calendrier
            </Button>
            <Button
              variant="contained"
              onClick={openAdd2}
              startIcon={<EventBusyIcon />}
            >
              Ajouter Vacance
            </Button>
          </div>
        </div>
      </div>
      <DataTableView data={vccs} />
      {openCalend && <PopCalendar handleClose={h_closeCalend} />}
      {add2 && <AddIndisp handleClose={closeAdd2} />}
    </main>
  );
}

function DataTableView({ data }) {
  const css = useStyles();
  const [list, setList] = useState([...data]);
  const [til, setTil] = useState("asc");

  useEffect(() => {
    setList([...data]);
  }, [data]);

  const Tri = (tab, att) => {
    return tab.sort((a, b) => a[att].localeCompare(b[att]));
  };

  const TriTitle = () => {
    if (til === "asc") {
      setList(Tri([...data], "title"));
      setTil("desc");
    } else {
      setList(Tri([...data], "title").reverse());
      setTil("asc");
    }
  };

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <div className={css.prestab}>
        <h3>Liste des Rendez-Vous</h3>
        <Table>
          <thead>
            <Thr>
              <Th>N°</Th>
              <Th sortable={true} direction={til === "asc"} onClick={TriTitle}>
                Libellé
              </Th>
              <Th>Jour Début</Th>
              <Th>Temp Deb</Th>
              <Th>Jour Fin</Th>
              <Th>Temp Fin</Th>
              <Th>Description</Th>

              <Th right={true}>Editer</Th>
            </Thr>
          </thead>
          <tbody>
            {list.map((item, key) => {
              return <OneItem data={item} key={key} index={key} />;
            })}
          </tbody>
        </Table>
      </div>
    </Paper>
  );
}

const OneItem = ({ index, data }) => {
  const [Del, openDel, closeDel] = usePopup();
  const [UptV, openUptV, closeUptV] = usePopup();

  return (
    <Tr>
      <Td>{index + 1 < 10 ? "0" + (index + 1) : index + 1}</Td>
      <Td>{data.title}</Td>
      <Td>{DateInput(data.start)}</Td>
      <Td>{TimeInput(data.start)}</Td>

      <Td>{DateInput(data.end)}</Td>
      <Td>{TimeInput(data.end)}</Td>

      <Td>{data.description}</Td>

      <Td>
        <div className="tab-buttons">
          <Edit onClick={openUptV} />
          <Delete onClick={openDel} />
        </div>
      </Td>
      {Del && <DeletePopup handleClose={closeDel} value={data} />}
      {UptV && <UpdtIndisp handleClose={closeUptV} value={data} />}
    </Tr>
  );
};

const Edit = (props) => {
  const { onClick } = props;
  return <BorderColorIcon onClick={onClick} className="edit" />;
};

const Delete = (props) => {
  const { onClick } = props;
  return <DeleteIcon onClick={onClick} className="delete" />;
};

export default Vaccances;
