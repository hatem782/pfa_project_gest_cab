import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import Button from "@mui/material/Button";
import { Table, Th, Td, Thr, Tr } from "../../../../../components/Table/Table";

import { useDispatch, useSelector } from "react-redux";
import { GetAllRecettes } from "../../../../../redux/Recettes/Recettes.actions";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// dialogs
import usePopup from "../../../../../hooks/UsePopup";
import AddItem from "./popups/AddPopup";
import AddPopupImpaye from "./popups/AddPopupImpaye";
import UpdateItem from "./popups/UpdtPopup";
import RendPaye from "./popups/RendPaye";
import DeletePopup from "./popups/DeletePopup";
import { DateInput } from "../../../../../functions/DateParse";
import { openFullscreenImage } from "../../../../../functions/Images";
import { useParams } from "react-router";

function GestRecette() {
  const css = useStyles();
  const items = useSelector((state) => state.RecettesReducer.recettes);
  const [add, openAdd, closeAdd] = usePopup();
  const [add_Imp, openAdd_Imp, closeAdd_Imp] = usePopup();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(GetAllRecettes({}));
  }, []);

  return (
    <main className={css.main}>
      <div>
        <div className="dialogues"></div>

        <div className={css.filter}>
          <div className="part1">
            <h4>Gestion des Recette</h4>
          </div>

          <div className="part2">
            <Button
              variant="contained"
              onClick={openAdd}
              startIcon={<AddCircleOutlineIcon />}
            >
              Ajouter Recette
            </Button>

            <Button
              variant="contained"
              onClick={openAdd_Imp}
              startIcon={<AddCircleOutlineIcon />}
            >
              Ajouter Impaye
            </Button>
          </div>
        </div>
      </div>
      <DataTableView data={items} />
      {add && <AddItem handleClose={closeAdd} />}
      {add_Imp && <AddPopupImpaye handleClose={closeAdd_Imp} />}
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
              Date
            </Th>
            <Th>Type</Th>
            <Th>Mode de paiement</Th>
            <Th>Tarif</Th>
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

  const show_images = () => {
    data.images.forEach((element) => {
      openFullscreenImage(element);
    });
  };

  return (
    <Tr>
      <Td>{index + 1 < 10 ? "0" + (index + 1) : index + 1}</Td>
      <Td>{DateInput(data.date)}</Td>
      <Td>{data.estPaye ? "Payé" : "Impayé"}</Td>
      <Td>{data.modePaiement}</Td>
      <Td>{data.tarif_consultation}DT</Td>
      <Td>
        <div className="tab-buttons">
          {data.estPaye && <Show onClick={show_images} />}
          <Edit onClick={openUpt} />
          <Delete onClick={openDel} />
        </div>
      </Td>
      {Del && <DeletePopup handleClose={closeDel} value={data} />}
      {Upt && data.estPaye && (
        <UpdateItem handleClose={closeUpt} value={data} />
      )}
      {Upt && !data.estPaye && <RendPaye handleClose={closeUpt} value={data} />}
    </Tr>
  );
};

const Show = (props) => {
  const { onClick } = props;
  return <VisibilityIcon onClick={onClick} className="edit" />;
};

const Edit = (props) => {
  const { onClick } = props;
  return <BorderColorIcon onClick={onClick} className="edit" />;
};

const Delete = (props) => {
  const { onClick } = props;
  return <DeleteIcon onClick={onClick} className="delete" />;
};

export default GestRecette;
