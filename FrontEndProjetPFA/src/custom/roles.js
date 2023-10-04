export const isAdmin = (user) => {
  return user.role === "SUPERADMIN";
};

export const isSec = (user) => {
  return user.role === "SECRETAIRE";
};

export const isDoc = (user) => {
  return user.role === "DENTISTE";
};
