import React, { useState, useEffect } from "react";
import { useStyles } from "./CorbeilleStyle";
import Calendar from "../../../../components/Inputs/Calendar";
import Button from "../../../../components/Buttons/SubmitBtn";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  Table,
  Th,
  Td,
  Thr,
  Tr,
} from "../../../../components/Table/TableFolder";
import Radio from "@mui/material/Radio";
import TabButtonGf from "../../../../components/Buttons/TabButtonGf";
import TabButtonGo from "../../../../components/Buttons/TabButtonGo";
import TabButtonRo from "../../../../components/Buttons/TabButtonRo";
import EditedSelect from "../../../../components/Inputs/EditedSelect";
import RechInput from "../../../../components/Inputs/RechInput2";
// dialogs
import DeleteItem from "./Popups/DeleteItem";
import DeleteGroup from "./Popups/DeleteGroup";
import RestoreGroup from "./Popups/RestoreGroup";
import Restoretem from "./Popups/Restoretem";
import Afficher from "./Popups/Afficher";

const SourceList = [
  {
    title: "Dossier",
    value: "Dossier",
  },
  {
    title: "Document",
    value: "Document",
  },
  {
    title: "Tout",
    value: "all",
  },
];

function Corbeille() {
  const css = useStyles();
  const [nbSelect, set_nbSelect] = useState(0);
  const [selected, set_selected] = useState([]);
  const navig = useNavigate();
  // FILTER SECTION

  const [filter, setFilter] = useState({
    name: "",
    source: "",
    date: { start: "", end: "" },
  });

  const setFilterName = (e) => {
    setFilter({ ...filter, name: e.target.value });
  };

  const setFiltersource = (val) => {
    setFilter({ ...filter, source: val });
  };

  const setFilterdate = (val) => {
    setFilter({ ...filter, date: val });
  };

  // POPUP FOR DELETE-UPDATE ALL
  const [dialog, setdialog] = useState({
    active: false,
    type: "", // delete_all / restore_all
    value: null,
  });
  const openDial = (type, value) => {
    setdialog({ active: true, type: type, value: value });
  };

  const closeDial = () => {
    setdialog({ active: false, type: "", value: null });
  };
  const openDelAll = () => {
    openDial("delete_all", selected);
  };
  const restaurerTout = () => {
    openDial("restore_all", selected);
  };

  return (
    <main className={css.main}>
      <br />
      <h4>Corbeille</h4>
      <div className={css.filter}>
        <div className="part1">
          <div className="claned-filter">
            <Calendar onChange={setFilterdate} />
          </div>
          <div className="source-filter">
            <EditedSelect
              items={SourceList}
              initial={2}
              onChange={setFiltersource}
            />
          </div>
          <div className="rech-filter">
            <RechInput onChange={setFilterName} value={filter.name} />
          </div>
        </div>
        <div className="part2">
          {nbSelect === 0 ? (
            <div className="add"></div>
          ) : (
            <div className="group">
              <Button onClick={restaurerTout} className="yello-btn">
                Restaurer tous
              </Button>
              <Button onClick={openDelAll} className="red-btn">
                Supprimer tous
              </Button>
            </div>
          )}
        </div>
      </div>
      <br />
      <FilesTable
        nbSelect={nbSelect}
        set_nbSelect={set_nbSelect}
        set_selected={set_selected}
        filter={filter}
      />
      {dialog.type === "delete_all" ? (
        <DeleteGroup dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}
      {dialog.type === "restore_all" ? (
        <RestoreGroup dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}
    </main>
  );
}

function FilesTable({ nbSelect, set_nbSelect, set_selected, filter }) {
  const data = [];
  const [selData, setSelData] = useState([...data]);

  useEffect(() => {}, []);

  useEffect(() => {
    setSelData(data);
  }, [data]);

  useEffect(() => {
    let { name, source, date } = filter;
    setSelData(
      data.filter((item) => {
        return (
          (item.type === source || source === "all") &&
          (item.title.indexOf(name) !== -1 || name === "") &&
          ((new Date(item.deleted) >= date.start &&
            new Date(item.deleted) <= date.end) ||
            (date.start === "" && date.end === ""))
        );
      })
    );
  }, [filter]);

  useEffect(() => {
    set_selected(
      selData.filter((item) => {
        return item.selected;
      })
    );
  }, [selData]);

  const handleSelect = (id) => {
    let newTab = [...selData];
    let index = newTab.findIndex((item) => item.id === id);
    newTab[index].selected = !newTab[index].selected;
    if (newTab[index].selected) {
      set_nbSelect(nbSelect + 1);
    } else if (nbSelect > 0) {
      set_nbSelect(nbSelect - 1);
    }
    setSelData(newTab);
  };

  const css = useStyles();
  return (
    <div className={css.foldes}>
      <Table>
        <thead>
          <Thr>
            <Th></Th>
            <Th>Nom</Th>
            <Th>Type</Th>
            <Th>Taille</Th>
            <Th>Date De Suppression</Th>
          </Thr>
        </thead>
        <tbody>
          {selData.map((item, key) => {
            return <OneDoc key={key} item={item} handleSelect={handleSelect} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

const OneDoc = ({ item, handleSelect }) => {
  const { id, selected, type, title, deleted, size, file } = item;
  // the state for checkbox *************************************
  const click = () => {
    handleSelect(id);
  };
  // the state for checkbox *************************************

  // the popup state to open and close **************************
  const [dialog, setdialog] = useState({
    active: false,
    type: "", // show / delete / restore
    value: null,
  });
  const openDial = (type, value) => {
    setdialog({ active: true, type: type, value: value });
  };

  const closeDial = () => {
    setdialog({ active: false, type: "", value: null });
  };
  const openShow = () => {
    openDial("show", file);
  };
  const openRestore = () => {
    openDial("restore", [item]);
  };
  const openDelete = () => {
    openDial("delete", [item]);
  };
  // the popup state to open and close **************************

  return (
    <>
      <Tr>
        <Td>
          <span className="space20" />
          <Radio onClick={click} checked={selected} />
        </Td>
        <Td>
          <div className={"folder-name"}>
            <span>{title}</span>
            <span className="space50" />
          </div>
        </Td>
        <Td>
          <div className={"folder-name"}>
            <span>{type}</span>
            <span className="space50" />
          </div>
        </Td>
        <Td>
          <span className="folder-name">
            {Math.floor(size / 1024)} ko <span className="space50" />
          </span>
        </Td>
        <Td>
          <span className="folder-name">
            {new Date(deleted).toDateString()} <span className="space50" />
          </span>
        </Td>
        <Td className="buttons-group">
          {/* {file && <TabButtonGf onClick={openShow}>Afficher</TabButtonGf>} */}
          <TabButtonGo onClick={openRestore}>Restaurer</TabButtonGo>
          <TabButtonRo onClick={openDelete}>Supprimer</TabButtonRo>
        </Td>
        {/************************  POPUPS ************************/}
        {dialog.type === "show" ? (
          <Afficher dialog={dialog} handleClose={closeDial} />
        ) : (
          <></>
        )}
        {dialog.type === "delete" ? (
          <DeleteItem dialog={dialog} handleClose={closeDial} />
        ) : (
          <></>
        )}
        {dialog.type === "restore" ? (
          <Restoretem dialog={dialog} handleClose={closeDial} />
        ) : (
          <></>
        )}

        {/************************  POPUPS ************************/}
      </Tr>
      <br />
    </>
  );
};

export default Corbeille;
