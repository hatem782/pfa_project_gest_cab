import React, { useState, useEffect } from "react";

import { useStyles } from "./ProfileStyles";

import noImg from "../../../../assets/images/noImg.png";
import nosign from "../../../../assets/images/signCont.png";

import GreenButton from "../../../../components/Buttons/TabButtonGf";
import RedButton from "../../../../components/Buttons/TabButtonRo";
import { useSelector } from "react-redux";
import SimpleEditedFieldData from "./SubComps/SimpleEditedFieldData";
import EditedFieldData from "./SubComps/EditedFieldData";
import EditedInputForPass from "./SubComps/EditedInputForPass";
import Uploader from "../../../../components/Outils/Uploader";
import Disactivation from "./SubComps/Disactivation";

const profile_links = ["Profil", "Sécurité", "Signature"];
const { REACT_APP_API_HOST } = process.env;

function Profile() {
  const css = useStyles();
  const { user } = useSelector((state) => state.UserReducer);
  const [selected, setSelected] = useState("Profil");

  const [dialog, setdialog] = useState({
    active: false,
    type: "", // disactivate
    value: null,
  });
  const openDial = (type, value) => {
    setdialog({ active: true, type: type, value: value });
  };

  const closeDial = () => {
    setdialog({ active: false, type: "", value: null });
  };
  const oepnDesactivation = () => {
    openDial("disactivate", null);
  };

  const UpdateImg = (e) => {
    console.log(e.target.files);
    // dispatch(UploadProfileImage(e.target.files));
  };

  const DeleteImg = async () => {
    const resp = await fetch(noImg);
    const data = await resp.blob();
    console.log(data);
    const file = new File([data], "noimg", { type: "image/jpeg" });
    console.log(file);
    // dispatch(UploadProfileImage([file]));
  };

  const UpdateSignature = (e) => {
    console.log(e.target.files);
    // dispatch(UploadSignatureImage(e.target.files));
  };

  return (
    <div className={css.main}>
      <div className="paper">
        <div className="params">
          <h4>Paramètres</h4>
          <p className="grey-p">Gérer les paramètres de votre profil</p>
          <br />
          <ul className="list">
            {profile_links.map((elem, key) => {
              return (
                <li
                  key={key}
                  onClick={() => {
                    setSelected(elem);
                  }}
                  className={selected === elem ? "selected" : ""}
                >
                  {elem}
                </li>
              );
            })}
          </ul>
        </div>

        <div className="content">
          <div>
            <Header UpdateImg={UpdateImg} deleteImg={DeleteImg} user={user} />
            {selected === "Profil" && (
              <>
                <EditProfileData user={user} />
              </>
            )}

            {selected === "Sécurité" && (
              <>
                <EditSecurityData user={user} />
              </>
            )}

            {selected === "Signature" && (
              <>
                <Signature user={user} UpdateImg={UpdateSignature} />
              </>
            )}
            <Footer disact={oepnDesactivation} />
          </div>
        </div>
      </div>

      {dialog.type === "disactivate" ? (
        <Disactivation dialog={dialog} handleClose={closeDial} />
      ) : (
        <></>
      )}
    </div>
  );
}

const Header = ({ user, UpdateImg, deleteImg }) => {
  const css = useStyles();
  const { id, photo } = user;
  return (
    <div className={css.header}>
      <h4>Votre photo de profil</h4>
      <div className="container">
        <Uploader handleFiles={UpdateImg}>
          <div
            className="img"
            style={{
              backgroundImage: `url(${
                photo ? REACT_APP_API_HOST + photo : noImg
              })`,
            }}
          />
        </Uploader>
        <div className="group-buttons">
          <GreenButton>
            <Uploader handleFiles={UpdateImg}> Changer de photo </Uploader>
          </GreenButton>
          <RedButton onClick={deleteImg}>Supprimer</RedButton>
        </div>
      </div>
      <h4 className="ID">ID : {id}</h4>
    </div>
  );
};

const Footer = ({ disact }) => {
  const css = useStyles();
  return (
    <div className={css.hint}>
      <h4>
        il est possible de{" "}
        <span className="red" onClick={disact}>
          désactiver temporairement votre compte
        </span>
        , mais c'est irréversible. Assurez-vous que vous souhaitez le faire.
      </h4>
    </div>
  );
};

const EditProfileData = ({ user }) => {
  return (
    <div>
      <SimpleEditedFieldData label="Nom" user={user} field="first_name" />
      <SimpleEditedFieldData label="Prénom" user={user} field="last_name" />
      <EditedFieldData label="Email" user={user} field="email" />
    </div>
  );
};

const EditSecurityData = ({ user }) => {
  const css = useStyles();
  return (
    <div>
      <EditedFieldData
        label="Numéro de téléphone"
        user={user}
        field="phone_number"
      />
      <EditedInputForPass
        label="Mot de passe"
        value="Alexandre"
        type="password"
      />
    </div>
  );
};

const Signature = ({ user, UpdateImg }) => {
  const css = useStyles();
  const { user_signature } = user;

  return (
    <div className={css.signature}>
      <br />
      <GreenButton>
        <Uploader handleFiles={UpdateImg}> Changer de Signature </Uploader>
      </GreenButton>
      <br />
      <Uploader handleFiles={UpdateImg}>
        <img src={user_signature ? user_signature : nosign} />
      </Uploader>
    </div>
  );
};

export default Profile;
