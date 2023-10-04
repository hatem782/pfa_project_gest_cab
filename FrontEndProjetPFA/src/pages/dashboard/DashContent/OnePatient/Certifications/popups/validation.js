import Joi from "joi";
import { toast } from "react-hot-toast";

const create = Joi.object({
  consultation: Joi.string()
    .required()
    .messages({ "any.required": `Libelle est obligatoire` }),
  fullname_med: Joi.string()
    .required()
    .messages({ "any.required": `Libelle est obligatoire` }),

  quality: Joi.string()
    .required()
    .messages({ "any.required": `Libelle est obligatoire` }),

  speciality: Joi.string()
    .required()
    .messages({ "any.required": `Libelle est obligatoire` }),

  fullname_pat: Joi.string()
    .required()
    .messages({ "any.required": `Libelle est obligatoire` }),

  date: Joi.date()
    .required()
    .messages({ "any.required": `Code acte est obligatoire` }),

  description: Joi.string()
    .required()
    .messages({ "any.required": `Description est obligatoire` }),

  medic: Joi.array()
    .required()
    .messages({ "any.required": `Libelle est obligatoire` }),
});

export const validation = (data) => {
  const validation = create.validate(data);
  if (validation.error) {
    toast.error(validation.error.details[0].message);
    return false;
  }
  if (data.medic.length === 0) {
    toast.error("insert at least 1 medicament");
  }
  return true;
};
