import React, { useEffect, useState } from "react";
import { useStyles } from "./MenuPrincipalStyle";
import folderIcon from "../../../../assets/images/Folder.png";
import H1 from "../../../../components/Typography/H1";

import Button from "../../../../components/Buttons/ButtonUpload";
import Spinner from "../../../../components/Spinner/SpinVer";
import { ltoa } from "../../../../functions/help";

import { useDispatch, useSelector } from "react-redux";

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
import H2 from "../../../../components/Typography/H2";

import QRcode from "../Fichier/Popups/QRcode";
import DeleteItem from "../Fichier/Popups/DeleteItem";
import Partager from "../Fichier/Popups/Partager";
import ToFolderGroup from "../Fichier/Popups/ToFolderGroup";
import Afficher from "../Fichier/Popups/Afficher";

import Menu from "../../../../components/Menu/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import threp from "../../../../assets/svgs/icons/Groupe 17360.svg";

function MenuPrincipal() {
  const { user } = useSelector((state) => state.UserReducer);
  const css = useStyles();
  return (
    <main className={css.main}>
      <br />
      <H1>Bienvenue {`${user.first_name} ${user.last_name}`} !</H1>
      <Filedrag />

      <br />
      <H2>Derniers fichiers importés</H2>
      <FilesTable />
    </main>
  );
}

const Filedrag = () => {
  const css = useStyles();
  const [uploading, setuploading] = useState({ up: false, done: false });

  const uploadDone = () => {
    setuploading({ up: false, done: false });
  };

  const onDragEnter = (e) => {
    e.preventDefault();
    document.getElementById("dragZone").classList.add(css.dragging);
    return false;
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    document.getElementById("dragZone").classList.remove(css.dragging);
    return false;
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();

    document.getElementById("dragZone").classList.remove(css.dragging);
    // getting files from drag zone
    let files = ltoa(e.dataTransfer.files);
    setuploading({ ...uploading, up: true });

    return false;
  };

  const handleFiles = (e) => {
    setuploading({ ...uploading, up: true });
  };

  return (
    <div>
      {/* ************ FILE ZONE DRAG ****************** */}
      <div id="dragZone" className={css.filedrag}>
        {uploading.up ? (
          <Spinner
            text="Mise à jour des fichiers"
            done={uploading.done}
            doneText="Votre fichier a été téléchargé avec succès"
          />
        ) : (
          <>
            {/* !************ ZONE DRAG ******************! */}
            <div
              className="drag-zone"
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              onDragOver={onDragOver}
              onDrop={onDrop}
            />
            {/* !************ ZONE DRAG ******************! */}

            <div className="container">
              <img src={folderIcon} alt="upload" />
              <p>
                Faites glisser vos documents ici pour commencer le
                téléchargement.
              </p>
              <span className={css.devider}>
                <hr />
                <p className="devider-content">OU</p>
              </span>

              <Button handleFiles={handleFiles}>Parcourir les fichiers</Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

function FilesTable() {
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
            return <OneDoc key={key} item={item} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

const OneDoc = ({ item }) => {
  const { id, selected, type, folder, created, document } = item;
  const { title, size, qr_code, file } = document;
  let folder_name = folder ? folder.name : "aucun";
  const css = useStyles();

  // the menu items of rename and delete ************************
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // the menu items of rename and delete ************************

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
    openDial("qrcode", null);
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
  // the popup state to open and close **************************

  return (
    <>
      <Tr>
        <Td>
          <div className={"folder-name"}>
            <span>{title}</span>
            <span className="space50" />
          </div>
        </Td>
        <Td>
          <div className={"folder-name"}>
            <span>{type ? type : "Générée"}</span>
            <span className="space50" />
          </div>
        </Td>
        <Td>
          <div className={"folder-name green-underlined"}>
            <span>{folder_name}</span>
            <span className="space50" />
          </div>
        </Td>
        <Td>
          <span className="folder-name">
            {new Date(created).toDateString()} <span className="space50" />
          </span>
        </Td>
        <Td>
          <span className="folder-name">
            {Math.floor(size / 1024)} ko <span className="space50" />
          </span>
        </Td>
        <Td>
          <span className="folder-name">
            {type ? type : "GENEREE"} <span className="space50" />
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
                {/* <Divider />
                <MenuItem>
                  <TabButtonGf onClick={openRename}>Renommer</TabButtonGf>
                </MenuItem> */}
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
        {dialog.type === "share" ? (
          <Partager dialog={dialog} handleClose={closeDial} />
        ) : (
          <></>
        )}
        {dialog.type === "to_folder" ? (
          <ToFolderGroup dialog={dialog} handleClose={closeDial} />
        ) : (
          <></>
        )}

        {/************************  POPUPS ************************/}
      </Tr>
      <br />
    </>
  );
};

export default MenuPrincipal;
