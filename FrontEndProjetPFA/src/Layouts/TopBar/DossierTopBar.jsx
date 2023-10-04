import React, { useState } from "react";
import TopBarWithRech from "./TopBarWithRech";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  list: {
    display: "flex",
    justifyContent: "space-between",
    flexGrow: "1",
    margin: "0px 30px 0px 0px",
    backgroundColor: "#FFFFFF",
    boxShadow: "0px 0px 10px #00000033",
    borderRadius: "5px",
    padding: "0px 40px",
  },
  item: {
    width: "170px",
    textAlign: "center",
    padding: "10px 0px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#A2A2A2",
    borderBottom: `solid 4px transparent`,
    cursor: "pointer",
    transition: "all 0.2s",
    "&:hover": {
      borderBottom: `solid 4px #A2A2A2`,
    },
  },
  selected: {
    color: theme.palette.primary.main,
    borderBottom: `solid 4px ${theme.palette.primary.main} !important`,
  },
}));

function DossierTopBar() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <ListItems />
      <TopBarWithRech />
    </div>
  );
}

export default DossierTopBar;

const ListItems = () => {
  const [selected, setselected] = useState("Tous mes dossiers");

  const items = ["Tous mes dossiers", "Dossiers reçus", "Dossiers créés"];

  const GetSpecificFolder = (item) => {
    setselected(item);
    switch (item) {
      case "Tous mes dossiers":
        break;

      case "Dossiers reçus":
        break;

      case "Dossiers créés":
        break;

      default:
        break;
    }
  };

  const css = useStyles();
  return (
    <div className={css.list}>
      {items.map((item, key) => {
        return (
          <div
            onClick={() => {
              GetSpecificFolder(item);
            }}
            key={key}
            className={`${css.item} ${selected === item && css.selected}`}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
};
