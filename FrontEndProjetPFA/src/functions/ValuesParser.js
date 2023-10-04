export const sexParser = (sex) => {
  const sexses = {
    MEN: "Homme",
    WOMEN: "Femme",
  };
  return sexses[sex];
};

export const GetOnly = (fields = [], data) => {
  let new_data = {};
  fields.forEach((field) => {
    new_data = { ...new_data, [field]: data[field] };
  });
  return new_data;
};
