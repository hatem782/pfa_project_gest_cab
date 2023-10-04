import React from "react";
import Navbar from "../../Layouts/Navbar/Navbar";
import Accueil from "./Accueil/Accueil";
import { useStyles } from "./WebsiteStyles";

function Website() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <Navbar />
      <Accueil />
    </div>
  );
}

export default Website;
