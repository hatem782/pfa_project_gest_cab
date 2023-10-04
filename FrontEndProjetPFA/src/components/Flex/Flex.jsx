import React from "react";
import { useStyles } from "./styles";

export function Center({ children }) {
  const css = useStyles();
  return <div className={css.center}>{children}</div>;
}

export function End({ children }) {
  const css = useStyles();
  return <div className={css.right}>{children}</div>;
}

export function Start({ children }) {
  const css = useStyles();
  return <div className={css.left}>{children}</div>;
}
