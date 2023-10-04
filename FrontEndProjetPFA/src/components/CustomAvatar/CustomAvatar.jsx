import React from "react";
import { Avatar, Tooltip } from "@mui/material";
import { colors, caracters } from "../../constants/avatar_colors";

const GetColor = (text) => {
  return colors[caracters.indexOf(text.charAt(0).toLocaleLowerCase())];
};

const AvatarC = (props) => {
  const { text, type = "circular" } = props;
  return (
    <Tooltip title={text} placement="top">
      <Avatar
        style={{ backgroundColor: GetColor(text) }}
        variant={type}
        className="avatar"
      >
        {text.split(" ").map((word) => {
          return word.charAt(0);
        })}
      </Avatar>
    </Tooltip>
  );
};

export default AvatarC;
