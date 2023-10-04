import React from "react";

function Uploader({ children, handleFiles }) {
  return (
    <label style={{ cursor: "pointer" }}>
      {children}

      <input
        style={{ display: "none" }}
        accept="*"
        id="contained-button-file"
        multiple
        onChange={handleFiles}
        type="file"
      />
    </label>
  );
}

export default Uploader;
