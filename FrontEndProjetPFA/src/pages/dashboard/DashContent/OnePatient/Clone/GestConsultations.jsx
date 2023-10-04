import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Button from "@mui/material/Button";
import { Table, Th, Td, Thr, Tr } from "../../../../../components/Table/Table";

import { useDispatch, useSelector } from "react-redux";
import { GetAllActes } from "../../../../../redux/Actes/Actes.actions";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// dialogs
import usePopup from "../../../../../hooks/UsePopup";
import AddItem from "./popups/AddPopup";
import UpdateItem from "./popups/UpdtPopup";
import DeletePopup from "./popups/DeletePopup";

function GestConsultations() {
  const css = useStyles();
  const items = useSelector((state) => state.ActesReducer.actes);
  const [add, openAdd, closeAdd] = usePopup();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllActes());
  }, []);

  return (
    <main className={css.main}>
      <div>
        <div className="dialogues"></div>

        <div className={css.filter}>
          <div className="part1">
            <h4>Gestion des Consultations</h4>
          </div>

          <div className="part2">
            <Button
              variant="contained"
              onClick={openAdd}
              startIcon={<AddCircleOutlineIcon />}
            >
              Ajouter Consultation
            </Button>
          </div>
        </div>
      </div>
      <DataTableView data={items} />
      {add && <AddItem handleClose={closeAdd} />}
    </main>
  );
}

function DataTableView({ data }) {
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
              Libelle
            </Th>
            <Th>Code Acte</Th>
            <Th>Prix</Th>
            {/* <Th>Jour</Th>
              <Th>Temp</Th>
              <Th sortable={true} direction={Nam === "asc"} onClick={TriName}>
                Patient
              </Th>
              <Th>Num Tel</Th> */}
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
  );
}

const OneItem = ({ index, data }) => {
  const [Del, openDel, closeDel] = usePopup();
  const [Upt, openUpt, closeUpt] = usePopup();

  return (
    <Tr>
      <Td>{index + 1 < 10 ? "0" + (index + 1) : index + 1}</Td>
      <Td>{data.title}</Td>
      <Td>{data.Code_acte}</Td>
      <Td>{data.prix}DT</Td>
      <Td>
        <div className="tab-buttons">
          <Edit onClick={openUpt} />
          <Delete onClick={openDel} />
        </div>
      </Td>
      {Del && <DeletePopup handleClose={closeDel} value={data} />}
      {Upt && <UpdateItem handleClose={closeUpt} value={data} />}
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

export default GestConsultations;
