import React, { useRef, useState } from "react";
import Button from "./TabButtonGf";
import { FilesUpload } from "../../services/FileUpload";
import styles from "./styles.module.scss";
import { openFullscreenImage } from "../../functions/Images";

function UploadFile2({
  name = "",
  folder = "general",
  onChange = () => {},
  value = [],
  label = "Télécharger Fichiers",
  files = false,
}) {
  const fileInputRef = useRef();
  const [uploading, setuploading] = useState(false);

  const handle_img_change = (e) => {
    setuploading(true);
    FilesUpload(e.target.files, folder)
      .then((resp) => {
        onChange({ target: { name: name, value: resp.data } });
        setuploading(false);
      })
      .catch((error) => {
        console.log(error);
        setuploading(false);
      });
  };

  return (
    <div style={{ width: "100%", margin: "10px 0px" }}>
      <Button
        style={{ width: "100%", margin: "0px 0px" }}
        onClick={() => fileInputRef.current.click()}
      >
        {uploading ? "Téléchargement des fichiers..." : label}
      </Button>
      <input
        onChange={handle_img_change}
        type="file"
        multiple
        accept=".pdf, image/*"
        ref={fileInputRef}
        style={{ display: "none" }}
        name={name}
      />
      <div className={styles["upload"]}>
        {value.map((img, key) => {
          return !files ? (
            <img
              src={img}
              key={key}
              onClick={() => {
                openFullscreenImage(img);
              }}
            />
          ) : (
            <span>
              <a href={img} target="_blank">
                {" "}
                -Fichier{`${key + 1}`}
              </a>{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default UploadFile2;
