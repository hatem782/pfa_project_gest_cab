import React from "react";
import { useStyles } from "./OffresStyles";
import GoffCard from "../../WebsiteComponents/GoffCard";
import BoffCard from "../../WebsiteComponents/BoffCard";

function Offres() {
  const css = useStyles();
  return (
    <div className={css.main}>
      <h1>Commencez maintenant gratuitement</h1>
      <div className="offres">
        <GoffCard />
        <BoffCard />
      </div>
    </div>
  );
}

export default Offres;
