import React from "react";
// ************************** ICONS ****************************

import { EmojiPeople } from "@mui/icons-material";

// ************************** Components ****************************
//import EditPage from "../pages/dashboard/DashContent/EditProfilePage/EditProfilePage.jsx";
import MainPage from "../pages/dashboard/DashContent/MainPage/MainPage";
import Profile from "../pages/dashboard/DashContent/Profile/Profile";
import MenuPrincipal from "../pages/dashboard/DashContent/MenuPrincipal/MenuPrincipal";
import Dossier from "../pages/dashboard/DashContent/Dossier/Dossier";
import Fichier from "../pages/dashboard/DashContent/Fichier/Fichier";
import Corbeille from "../pages/dashboard/DashContent/Corbeille/Corbeille";
import AllTempsier from "../pages/dashboard/DashContent/Templats/AllTemps/AllTemps";
import CreateTemps from "../pages/dashboard/DashContent/Templats/CreateTemps/CreateTemps";
import ModifierTemps from "../pages/dashboard/DashContent/Templats/ModifierTemps/ModifierTemps";
import Disconnect from "../pages/Login/Disconnect/Disconnect";
import Vaccances from "../pages/dashboard/DashContent/Vaccances/Vaccances";
import GestActes from "../pages/dashboard/DashContent/GestActes/GestActes";
// ************************** TOP BAR *******************************

import Patients from "../pages/dashboard/DashContent/Patient/Patients";

import TopBar from "../Layouts/TopBar/TopBar";
import DossierTopBar from "../Layouts/TopBar/DossierTopBar.jsx";
import FichierTopBar from "../Layouts/TopBar/FichierTopBar";
import TopBarWithRech from "../Layouts/TopBar/TopBarWithRech";

import GroupIcon from "@mui/icons-material/Group";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FolderIcon from "@mui/icons-material/Folder";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import DeleteIcon from "@mui/icons-material/Delete";
import SettingsIcon from "@mui/icons-material/Settings";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Appointements from "../pages/dashboard/DashContent/Appointments/Appointments";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import OnePatient from "../pages/dashboard/DashContent/OnePatient/OnePatient";
import OneConsult from "../pages/dashboard/DashContent/OneConsultation/OneConsult";

export const routes = [
  {
    mainUrl: "/dashboard",
    url: "/dash",
    title: "Dashboard",
    icon: <DashboardIcon />,
    compo: (
      <>
        <TopBarWithRech />
        <MainPage />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/appointment",
    icon: <CalendarMonthIcon />,
    title: "Rendez-Vous",
    compo: (
      <>
        <TopBarWithRech />
        <Appointements />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/vacances",
    icon: <EventBusyIcon />,
    title: "Vacances",
    compo: (
      <>
        <TopBarWithRech />
        <Vaccances />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/patient",
    icon: <GroupIcon />,
    title: "Fiches Patients",
    compo: (
      <>
        <TopBarWithRech />
        <Patients />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/actes",
    icon: <VaccinesIcon />,
    title: "Gest Actes",
    compo: (
      <>
        <TopBarWithRech />
        <GestActes />
      </>
    ),
  },
];

export const routes2 = [
  {
    mainUrl: "/dashboard",
    url: "/parametres",
    title: "Paramètres",
    icon: <SettingsIcon />,
    compo: (
      <>
        <TopBarWithRech />
        <Profile />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/deconnexion",
    title: "Déconnexion",
    icon: <MeetingRoomIcon />,
    compo: (
      <>
        <Disconnect />
      </>
    ),
  },
];

// those routes are not acceccible by navbar
export const NoNavRoutes = [
  {
    mainUrl: "/dashboard",
    url: "/templates/create",
    compo: (
      <>
        <TopBarWithRech />
        <CreateTemps />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/one_patient/:id",
    icon: <EventBusyIcon />,
    title: "Vacances",
    compo: (
      <>
        <TopBarWithRech />
        <OnePatient />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/one_consult/:id/:id_consult",
    icon: <EventBusyIcon />,
    title: "Vacances",
    compo: (
      <>
        <TopBarWithRech />
        <OneConsult />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/folder",
    title: "Dossier",
    icon: <FolderIcon />,
    compo: (
      <>
        <DossierTopBar />
        <Dossier />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/fichiers",
    title: "Fichiers",
    icon: <InsertDriveFileIcon />,
    compo: (
      <>
        <FichierTopBar />
        <Fichier />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/templates",
    title: "Templates",
    icon: <SpaceDashboardIcon />,
    compo: (
      <>
        <TopBarWithRech />
        <AllTempsier />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/corbeille",
    title: "Corbeille",
    icon: <DeleteIcon />,
    compo: (
      <>
        <TopBarWithRech />
        <Corbeille />
      </>
    ),
  },
  {
    mainUrl: "/dashboard",
    url: "/templates/modifier",
    compo: (
      <>
        <TopBarWithRech />
        <ModifierTemps />
      </>
    ),
  },
];

/*

  // {
  //   mainUrl: "/dashboard",
  //   url: "/notifications",
  //   title: "Notifications",
  //   compo: <></>,
  // },
  // {
  //   mainUrl: "/dashboard",
  //   url: "/parrainage",
  //   title: "Parrainage",
  //   compo: <></>,
  // },

*/
