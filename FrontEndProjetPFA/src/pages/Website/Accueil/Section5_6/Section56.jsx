import React, { useState } from "react";
import { useStyles } from "./Section56Styles";
import comp1 from "../../../../assets/images/website/company1.png";
import comp2 from "../../../../assets/images/website/company2.svg";
import comp3 from "../../../../assets/images/website/company3.png";
import comp4 from "../../../../assets/images/website/company4.png";
import comp5 from "../../../../assets/images/website/company5.png";

import googleplay from "../../../../assets/images/website/googleplay.png";
import appstore from "../../../../assets/images/website/appstore.png";

const companys = [
  {
    logo: comp3,
    txt: `" At vero eos et accusam et justo duo dolores et ea
    rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
    ipsum dolor sit amet.
  "`,
  },
  {
    logo: comp4,
    txt: `" Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
  "`,
  },
  {
    logo: comp1,
    txt: `" La plupart des membres de l'équipe connaissaient PBird et l'ont
  trouvé très intuitif, facile à utiliser et accessible de n'importe où.
  "`,
  },
  {
    logo: comp2,
    txt: `" At vero eos et accusam et justo duo dolores et ea
    rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
    ipsum dolor sit amet.
  "`,
  },
  {
    logo: comp5,
    txt: `" La plupart des membres de l'équipe connaissaient PBird et l'ont
  trouvé très intuitif, facile à utiliser et accessible de n'importe où.
  "`,
  },
];

function Section56() {
  const css = useStyles();
  const [num, setNum] = useState(0);

  const handleClick = (val) => {
    setNum(val);
  };

  const next = () => {
    if (companys.length - 1 > num) {
      setNum(num + 1);
    }
  };
  const prev = () => {
    if (0 < num) {
      setNum(num - 1);
    }
  };

  return (
    <div className={css.main}>
      <h1>
        Des dizaines d'entreprises utilisent déjà PBird et ont déjà des
        réussites avec le produit.
      </h1>
      <div className="carossel">
        <h4 className="left" onClick={prev}>
          {"<"}
        </h4>
        <div className="carossel-content">
          <img src={companys[num].logo} />
          <p>{companys[num].txt}</p>
          <div className="puces">
            {companys.map((comp, key) => {
              return (
                <span
                  key={key}
                  onClick={() => {
                    handleClick(key);
                  }}
                  className={`puce ${key === num ? "selected" : ""} `}
                />
              );
            })}
          </div>
        </div>
        <h4 className="right" onClick={next}>
          {">"}
        </h4>
      </div>
      <h1>Profitez des fonctionnalités de PBird sur n'importe quel appareil</h1>
      <p className="txt2">
        PBird fonctionne sur les principales plates-formes et vous permet ainsi
        de travailler facilement depuis votre navigateur, votre appareil mobile
        ou bien votre tablette.
      </p>
      <div className="download">
        <img src={appstore} />
        <img src={googleplay} />
      </div>
      <p className="link">Commencez maintenant gratuitement</p>
    </div>
  );
}

export default Section56;
