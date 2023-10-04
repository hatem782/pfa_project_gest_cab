import { useState } from "react";

const usePopupV = (value) => {
  const [open, setOpen] = useState(null);

  const handle_open = () => {
    setOpen(value);
  };

  const handle_close = () => {
    setOpen(null);
  };

  return [open, handle_open, handle_close];
};

export default usePopupV;
