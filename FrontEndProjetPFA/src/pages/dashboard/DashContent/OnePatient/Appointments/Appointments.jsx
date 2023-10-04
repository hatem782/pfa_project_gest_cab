import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Button from "@mui/material/Button";
import { Table, Th, Td, Thr, Tr } from "../../../../../components/Table/Table";

import { useDispatch, useSelector } from "react-redux";
import { GetAllRdvs } from "../../../../../redux/Appointements/Appoints.actions";

import { Grid, Paper, TextField } from "@mui/material";

import MoreTimeIcon from "@mui/icons-material/MoreTime";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// dialogs
import usePopup from "../../../../../hooks/UsePopup";
import PopCalendar from "./popups/PopCalendar";
import AddApoint from "./popups/AddApoint/AddApoint";
import DeletePopup from "./DeletePopup/DeletePopup";
import { DateInput, TimeInput } from "../../../../../functions/DateParse";

import UpdtApoint from "./popups/AddApoint/UpdtApoint";
import { useParams } from "react-router-dom";

function Appointements() {
  const css = useStyles();
  const rdvs = useSelector((state) => state.AppintementReducer.rdvs);
  const patient = useSelector((state) => state.patientsReducer.patient);
  const [my_rdvs, setmy_rdvs] = useState([]);
  const [add, openAdd, closeAdd] = usePopup();
  const [openCalend, h_openCalend, h_closeCalend] = usePopup();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllRdvs());
  }, []);

  useEffect(() => {
    setmy_rdvs(rdvs.filter((rdv) => rdv.cin === patient.cin));
  }, [rdvs, patient]);

  return (
    <main className={css.main}>
      <div>
        <div className="dialogues"></div>

        <div className={css.filter}>
          <div className="part1">
            <h4>Page de gestion des rondez-vouz</h4>
          </div>

          <div className="part2">
            <Button
              variant="contained"
              onClick={h_openCalend}
              startIcon={<CalendarMonthIcon />}
            >
              Calend
            </Button>
            <Button
              variant="contained"
              onClick={openAdd}
              startIcon={<MoreTimeIcon />}
            >
              AJ RDV
            </Button>
          </div>
        </div>
      </div>
      <DataTableView data={my_rdvs} />
      {openCalend && <PopCalendar handleClose={h_closeCalend} />}
      {add && <AddApoint handleClose={closeAdd} />}
    </main>
  );
}

function DataTableView({ data }) {
  const css = useStyles();
  const [list, setList] = useState([...data]);
  const [til, setTil] = useState("asc");
  const [Nam, setNam] = useState("asc");
  const [datedir, setDatedir] = useState("asc");

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

  const TriName = () => {
    if (Nam === "asc") {
      setList(Tri([...data], "firstName"));
      setNam("desc");
    } else {
      setList(Tri([...data], "firstName").reverse());
      setNam("asc");
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
                Libelle
              </Th>
              <Th>Jour</Th>
              <Th>Temp</Th>
              <Th sortable={true} direction={Nam === "asc"} onClick={TriName}>
                Patient
              </Th>
              <Th>Num Tel</Th>
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
  const [UptR, openUptR, closeUptR] = usePopup();
  const [UptV, openUptV, closeUptV] = usePopup();

  return (
    <Tr>
      <Td>{index + 1 < 10 ? "0" + (index + 1) : index + 1}</Td>
      <Td>{data.title}</Td>
      <Td>{DateInput(data.start)}</Td>
      <Td>
        {TimeInput(data.start)} à {TimeInput(data.end)}
      </Td>
      <Td>
        {data.firstName} {data.lastName}
      </Td>
      <Td>{data.phone}</Td>
      <Td>
        <div className="tab-buttons">
          <Edit onClick={openUptR} />
          <Delete onClick={openDel} />
        </div>
      </Td>
      {Del && <DeletePopup handleClose={closeDel} value={data} />}
      {UptR && <UpdtApoint handleClose={closeUptR} value={data} />}
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

export default Appointements;
