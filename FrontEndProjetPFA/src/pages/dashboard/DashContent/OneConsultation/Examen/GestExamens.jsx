import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Button from "@mui/material/Button";
import { Table, Th, Td, Thr, Tr } from "../../../../../components/Table/Table";

import { useDispatch, useSelector } from "react-redux";
import { GetAllExams } from "../../../../../redux/Exames/Exames.actions";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

// dialogs
import usePopup from "../../../../../hooks/UsePopup";
import AddItem from "./popups/AddPopup";
import UpdateItem from "./popups/UpdtPopup";
import ShowOne from "./popups/ShowOne";
import DeletePopup from "./popups/DeletePopup";
import { useParams } from "react-router-dom";

function GestExamen() {
  const css = useStyles();
  const items = useSelector((state) => state.ExamsReducer.exams);
  const [add, openAdd, closeAdd] = usePopup();
  const dispatch = useDispatch();

  const { id_consult } = useParams();

  const getConsults = () => {
    dispatch(GetAllExams(id_consult));
  };

  useEffect(() => {
    getConsults();
  }, [id_consult]);

  return (
    <main className={css.main}>
      <div>
        <div className="dialogues"></div>

        <div className={css.filter}>
          <div className="part1">
            <h4>Gestion des Examens</h4>
          </div>

          <div className="part2">
            <Button
              variant="contained"
              onClick={openAdd}
              startIcon={<AddCircleOutlineIcon />}
            >
              Ajouter Examen
            </Button>
          </div>
        </div>
      </div>
      <DataTableView data={items} clallback={getConsults} />
      {add && (
        <AddItem
          handleClose={() => {
            getConsults();
            closeAdd();
          }}
        />
      )}
    </main>
  );
}

function DataTableView({ data, clallback }) {
  const css = useStyles();
  const [list, setList] = useState([...data]);
  const [tri1, settri1] = useState("asc");

  useEffect(() => {
    setList([...data]);
  }, [data]);

  const Tri = (tab, att) => {
    return tab.sort((a, b) => a[att].localeCompare(b[att]));
  };

  const TriTitle = () => {
    if (tri1 === "asc") {
      setList(Tri([...data], "title"));
      settri1("desc");
    } else {
      setList(Tri([...data], "title").reverse());
      settri1("asc");
    }
  };

  return (
    <div className={css.prestab}>
      <Table>
        <thead>
          <Thr>
            <Th>N°</Th>
            <Th sortable={true} direction={tri1 === "asc"} onClick={TriTitle}>
              Examen
            </Th>
            <Th>Type</Th>
            <Th>Tension Patient</Th>
            <Th>Temperature Patient</Th>
            <Th right={true}>Actions</Th>
          </Thr>
        </thead>
        <tbody>
          {list.map((item, key) => {
            return (
              <OneItem
                data={item}
                key={key}
                index={key}
                clallback={clallback}
              />
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

const OneItem = ({ index, data, clallback }) => {
  const [Del, openDel, closeDel] = usePopup();
  const [Upt, openUpt, closeUpt] = usePopup();
  const [shw, openShw, closeShw] = usePopup();
  // date quality speciality fullname_pat description medic[{title,nb_in_day,nb_use_days}]
  return (
    <Tr>
      <Td>{index + 1 < 10 ? "0" + (index + 1) : index + 1}</Td>
      <Td>Examen {index + 1 < 10 ? "0" + (index + 1) : index + 1}</Td>
      <Td>{data.type}</Td>
      <Td>{data.tens_pat}</Td>
      <Td>{data.temp_pat}</Td>
      <Td>
        <div className="tab-buttons">
          {/* <Show onClick={openShw} /> */}
          <Edit onClick={openUpt} />
          <Delete onClick={openDel} />
        </div>
      </Td>
      {Del && (
        <DeletePopup
          handleClose={() => {
            clallback();
            closeDel();
          }}
          value={data}
        />
      )}
      {Upt && (
        <UpdateItem
          handleClose={() => {
            clallback();
            closeUpt();
          }}
          value={data}
        />
      )}
      {shw && <ShowOne handleClose={closeShw} value={data} />}
    </Tr>
  );
};

const Show = (props) => {
  const { onClick } = props;
  return <RemoveRedEyeIcon onClick={onClick} className="edit" />;
};

const Edit = (props) => {
  const { onClick } = props;
  return <BorderColorIcon onClick={onClick} className="edit" />;
};

const Delete = (props) => {
  const { onClick } = props;
  return <DeleteIcon onClick={onClick} className="delete" />;
};

export default GestExamen;
