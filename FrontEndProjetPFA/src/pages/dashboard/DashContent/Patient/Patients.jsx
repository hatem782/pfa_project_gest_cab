import React, { useEffect, useState } from "react";
import { useStyles } from "./Styles";
import threp from "../../../../assets/svgs/icons/Groupe 17360.svg";
import Calendar from "../../../../components/Inputs/Calendar";
import Button from "../../../../components/Buttons/SubmitBtn";
import addimg from "../../../../assets/svgs/icons/Groupe 17437.svg";
import Menu from "../../../../components/Menu/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  Table,
  Th,
  Td,
  Thr,
  Tr,
} from "../../../../components/Table/TableFolder";
import TabButtonGf from "../../../../components/Buttons/TabButtonGf";
import TabButtonGo from "../../../../components/Buttons/TabButtonGo";
import TabButtonRo from "../../../../components/Buttons/TabButtonRo";
import EditedSelect from "../../../../components/Inputs/EditedSelect";
import RechInput from "../../../../components/Inputs/RechInput2";
import CustomAvatar from "../../../../components/CustomAvatar/CustomAvatar";
// dialogs
import usePopup from "../../../../hooks/UsePopup";
import AddPatient from "./Popups/AddPatPop/AddPatient";
import UpdatePatient from "./Popups/UpdatePatient/UpdatePatient";
import DeletePopup from "./Popups/DeletePopup/DeletePopup";

import { Genres } from "../../../../constants/SelectsValues";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPatients } from "../../../../redux/Patients/patitents.actions";
import { GetAge } from "../../../../functions/DateParse";
import { sexParser } from "../../../../functions/ValuesParser";
import { NavLink } from "react-router-dom";

const GenreTypes = [
  {
    name: "Tout",
    value: "",
  },
  ...Genres,
];

function Patients() {
  const css = useStyles();
  const patients = useSelector((state) => state.patientsReducer.patients);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPatients());
  }, []);

  return (
    <main className={css.main}>
      <h4>Fiches patients</h4>
      <br></br>
      <br></br>
      <h5>Filtrage / Création </h5>
      <TopPageData />
      <DataTableView data={patients} />
    </main>
  );
}

const TopPageData = () => {
  const css = useStyles();
  const [add, openAdd, closeAdd] = usePopup();

  return (
    <div>
      <div className="dialogues">
        {add && <AddPatient handleClose={closeAdd} />}
      </div>
      <div className={css.filter}>
        <div className="part1">
          <h4>Filtrage</h4>
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
            <Button onClick={openAdd}>
              <img style={{ transform: "translateY(2px)" }} src={addimg} />{" "}
              Nouveau Patient
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

function DataTableView({ data = [] }) {
  const css = useStyles();
  return (
    <div className={css.foldes}>
      <Table>
        <thead>
          <Thr>
            {/* <Th>Numero Fichet</Th> */}
            <Th>Fiche Patient</Th>
            <Th>Numéro téléphone</Th>
            <Th>Age</Th>
            <Th>Sex</Th>
            <Th>Email</Th>
            <Th>Code Apci</Th>
          </Thr>
        </thead>
        <tbody>
          {data.map((item, key) => {
            return <OneItem key={key} index={key} item={item} />;
          })}
        </tbody>
      </Table>
    </div>
  );
}

const OneItem = ({ item, index }) => {
  const {
    _id,
    cin,
    firstName,
    sex,
    lastName,
    phone,
    email,
    code_apci,
    birthDate,
  } = item;
  const css = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const [upd, openUpdt, closeUpdt] = usePopup();
  const [del, openDel, closeDel] = usePopup();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const MainTD = () => {
    return (
      <div className={`${css.main_td} folder-name`}>
        <CustomAvatar type="rounded" text={`${firstName} ${lastName}`} />
        <div className="infos">
          <span>
            {firstName} {lastName}
          </span>
          <span>cin : {cin}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="popups">
        {upd && <UpdatePatient handleClose={closeUpdt} value={item} />}
        {del && <DeletePopup handleClose={closeDel} value={item} />}
      </div>
      <Tr>
        <Td>
          <MainTD />
        </Td>
        <Td>
          <span className="folder-name">{phone}</span>
        </Td>
        <Td>
          <span className="folder-name">{GetAge(birthDate)}</span>
        </Td>
        <Td>
          <span className="folder-name">{sexParser(sex)}</span>
        </Td>
        <Td>
          <span className="folder-name">{email}</span>
        </Td>
        <Td>
          <span className="folder-name">{code_apci}</span>
        </Td>
        <Td className="buttons-group">
          <NavLink to={`/dashboard/one_patient/${_id}`}>
            <TabButtonGf onClick={() => {}}>Afficher</TabButtonGf>
          </NavLink>

          <TabButtonGo onClick={openUpdt}>Modifier</TabButtonGo>

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
                  <TabButtonRo onClick={openDel} type="error">
                    Supprimer
                  </TabButtonRo>
                </MenuItem>
              </div>
            </Menu>
          </div>
        </Td>
      </Tr>
      <br />
    </>
  );
};

export default Patients;
