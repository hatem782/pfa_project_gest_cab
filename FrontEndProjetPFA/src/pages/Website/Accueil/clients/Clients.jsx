import React from "react";
import { useStyles } from "./ClientsStyles";
import p1 from "../../../../assets/images/website/p1.png";
import p2 from "../../../../assets/images/website/p2.png";
import p3 from "../../../../assets/images/website/p3.png";

function Clients() {
  const css = useStyles();

  return (
    <div className={css.main}>
      <h3>Ce que disent les clients</h3>
      <div className="clients">
        {clients.map((client, key) => {
          return <Client key={key} {...client} />;
        })}
      </div>
    </div>
  );
}

const clients = [
  {
    img: p1,
    name: "Andrew Thompson",
    pos: "NAGA",
    review: `"Cette application est incroyable, je ne peux pas imaginer comment
        partager autant de fichiers de manière aussi sûre et rapide"`,
  },
  {
    img: p2,
    name: "Michele Smith",
    pos: "Clevertech France",
    review: `"Cette application est incroyable, je ne peux pas imaginer comment
        partager autant de fichiers de manière aussi sûre et rapide"`,
  },
  {
    img: p3,
    name: "William Dubois",
    pos: "Citroën",
    review: `"Cette application est incroyable, je ne peux pas imaginer comment
        partager autant de fichiers de manière aussi sûre et rapide"`,
  },
];

const Client = ({ img, name, pos, review }) => {
  const css = useStyles();
  return (
    <div className={css.client}>
      <p>{review}</p>
      <div className="person">
        <img src={img} />
        <div className="info">
          <h4>{name}</h4>
          <p className="position">{pos}</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;
