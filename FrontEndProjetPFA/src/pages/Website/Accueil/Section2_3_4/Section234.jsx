import React from "react";
import { useStyles } from "./Section234Styles";
import Dash from "../../WebsiteComponents/Dash";
import sect2 from "../../../../assets/images/website/sec2.png";
import sect3 from "../../../../assets/images/website/sec3.png";
import sect4 from "../../../../assets/images/website/sec4.png";

function Section234() {
  const css = useStyles();

  return (
    <div className={css.main}>
      {sections.map((item, key) => {
        return <Section {...item} key={key} reverse={key % 2 !== 0} />;
      })}
    </div>
  );
}

const sections = [
  {
    img: sect2,
    title1: "Invitez vos amis et créez votre",
    title2: "propre équipe sur la plateforme.",
    txt: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet`,
    color: "#FAE69A",
  },
  {
    img: sect3,
    title1: "Profitez de la fonction de messagerie ",
    title2: "lorsque vous recevez un fichier.",
    txt: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet`,
    color: "#4791FF",
  },
  {
    img: sect4,
    title1: "Profitez des fonctionnalités de",
    title2: "PBird sur n'importe quel appareil",
    txt: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet`,
    color: "#17e6c8",
  },
];

const Section = ({ img, title1, title2, txt, color, reverse }) => {
  const css = useStyles();
  return (
    <div
      className={css.section}
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <img src={img} />
      <div className="content">
        <Dash color={color} />
        <br />
        <h2>{title1} </h2>
        <h2>{title2} </h2>
        <p>{txt}</p>
      </div>
    </div>
  );
};

export default Section234;
