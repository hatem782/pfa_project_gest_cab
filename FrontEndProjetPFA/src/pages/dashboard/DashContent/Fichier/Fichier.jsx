import React, { useState, useEffect } from "react";
import { useStyles } from "./FichierStyle";
import { useNavigate } from "react-router-dom";
import threp from "../../../../assets/svgs/icons/Groupe 17360.svg";
import Calendar from "../../../../components/Inputs/Calendar";
import Button from "../../../../components/Buttons/SubmitBtn";
import addimg from "../../../../assets/svgs/icons/Groupe 17437.svg";
import Menu from "../../../../components/Menu/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import {
  Table,
  Th,
  Td,
  Thr,
  Tr,
} from "../../../../components/Table/TableFolder";
import TabButtonGf from "../../../../components/Buttons/TabButtonGf";
import TabButtonGo from "../../../../components/Buttons/TabButtonGo";
import TabButtonYf from "../../../../components/Buttons/TabButtonYf";
import TabButtonRo from "../../../../components/Buttons/TabButtonRo";
import EditedSelect from "../../../../components/Inputs/EditedSelect";
import RechInput from "../../../../components/Inputs/RechInput2";
// dialogs
import QRcode from "./Popups/QRcode";
import DeleteItem from "./Popups/DeleteItem";
import ToFolderGroup from "./Popups/ToFolderGroup";
import Afficher from "./Popups/Afficher";
import Renommer from "./Popups/Renommer";

const GenreTypes = [
  {
    title: "Tout",
    value: "all",
  },
  {
    title: "Homme",
    value: "MEN",
  },
  {
    title: "Femme",
    value: "WOMEN",
  },
];

function GestionItem() {
  const css = useStyles();

  return (
    <main className={css.main}>
      <h4>Mes fichiers</h4>
      <h5>Mes fichiers / Tous mes fichiers</h5>
      <FilterCompo />
      <DataTableView />
    </main>
  );
}

const FilterCompo = () => {
  const css = useStyles();
  const navig = useNavigate();
  return (
    <div className={css.filter}>
      <Renommer
        dialog={{
          active: true,
          type: "",
          value: "",
        }}
        handleClose={() => {}}
      />
      <div className="part1">
        <h4>Affichage</h4>
        <div className="claned-filter">
          <Calendar onChange={() => {}} />
        </div>
        <div className="source-filter">
          <EditedSelect items={GenreTypes} initial={0} onChange={() => {}} />
        </div>
        <div className="rech-filter">
          <RechInput onChange={() => {}} value="" />
        </div>
      </div>
      <div className="part2">
        <div className="add">
          <Button
            onClick={() => {
              navig("/dashboard/templates");
            }}
          >
            <img style={{ transform: "translateY(2px)" }} src={addimg} />
            Nouveau fichier
          </Button>
        </div>
      </div>
    </div>
  );
};

function DataTableView() {
  const data = [];
  const css = useStyles();
  return (
    <div className={css.foldes}>
      <Table>
        <thead>
          <Thr>
            <Th>Nom</Th>
            <Th>Source</Th>
            <Th>Dossier</Th>
            <Th>Date</Th>
            <Th>Taille</Th>
            <Th>Status</Th>
          </Thr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return <OneItem key={key} item={item} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

const OneItem = ({ item, handleSelect }) => {
  const { id, type, folder, created, document } = item;
  const { title, size, qr_code, file } = document;
  const css = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // the popup state to open and close **************************
  const [dialog, setdialog] = useState({
    active: false,
    type: "", // show / delete / rename / qrcode / share / to_folder
    value: null,
  });
  const openDial = (type, value) => {
    setdialog({ active: true, type: type, value: value });
  };

  const closeDial = () => {
    setdialog({ active: false, type: "", value: null });
  };
  const openQrcode = () => {
    openDial("qrcode", qr_code);
  };
  const openShow = () => {
    openDial("show", file);
  };
  const openDelete = () => {
    openDial("delete", [item]);
  };
  const openToFolder = () => {
    openDial("to_folder", [item]);
  };
  const openShare = () => {
    openDial("share", document.id);
  };

  return (
    <>
      <Tr>
        <Td>
          <div className={"folder-name"}>
            <span>Hatem</span>
            <span className="space50" />
          </div>
        </Td>
        <Td>
          <div className={"folder-name"}>
            <span>Ben Echikh</span>
            <span className="space50" />
          </div>
        </Td>
        <Td>
          <div className={"folder-name green-underlined"}>
            <span>58 217 529</span>
            <span className="space50" />
          </div>
        </Td>
        <Td>
          <span className="folder-name">
            {new Date().toDateString()} <span className="space50" />
          </span>
        </Td>
        <Td>
          <span className="folder-name">
            Info xyz <span className="space50" />
          </span>
        </Td>
        <Td>
          <span className="folder-name">
            Info abc <span className="space50" />
          </span>
        </Td>
        <Td className="buttons-group">
          <TabButtonGf onClick={openShow}>Afficher</TabButtonGf>
          <TabButtonGo onClick={openQrcode}>Code QR</TabButtonGo>

          <img src={threp} onClick={handleClick} />
          <div className="menu">
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              pos={5}
            >
              <div style={{ padding: "0px 10px" }} className={css.menuItems}>
                <MenuItem>
                  <TabButtonYf onClick={openShare}>Partager</TabButtonYf>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <TabButtonGf onClick={openToFolder}>Aff Dossier</TabButtonGf>
                </MenuItem>
                <Divider />
                <MenuItem>
                  <TabButtonRo onClick={openDelete}>Supprimer</TabButtonRo>
                </MenuItem>
              </div>
            </Menu>
          </div>
        </Td>
        {/************************  POPUPS ************************/}
        {dialog.type === "show" ? (
          <Afficher dialog={dialog} handleClose={closeDial} />
        ) : (
          <></>
        )}
        {dialog.type === "qrcode" ? (
          <QRcode dialog={dialog} handleClose={closeDial} />
        ) : (
          <></>
        )}
        {dialog.type === "delete" ? (
          <DeleteItem dialog={dialog} handleClose={closeDial} />
        ) : (
          <></>
        )}
        {dialog.type === "to_folder" ? (
          <ToFolderGroup dialog={dialog} handleClose={closeDial} />
        ) : (
          <></>
        )}
      </Tr>
      <br />
    </>
  );
};

export default GestionItem;
