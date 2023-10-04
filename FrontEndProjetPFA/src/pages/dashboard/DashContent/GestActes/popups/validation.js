import Joi from "joi";
import { toast } from "react-hot-toast";

const create = Joi.object({
  title: Joi.string()
    .required()
    .messages({ "any.required": `Libelle est obligatoire` }),

  Code_acte: Joi.string()
    .required()
    .messages({ "any.required": `Code acte est obligatoire` }),

  prix: Joi.number()
    .required()
    .messages({ "any.required": `Code acte est obligatoire` }),

  description: Joi.string()
    .required()
    .messages({ "any.required": `Description est obligatoire` }),
});

export const validation = (data) => {
  const validation = create.validate(data);
  if (validation.error) {
    toast.error(validation.error.details[0].message);
    return false;
  }
  return true;
};
