import Joi from "joi";
import { toast } from "react-hot-toast";

const createRdv = Joi.object({
  title: Joi.string()
    .required()
    .messages({ "any.required": `Libelle est obligatoire` }),

  jour: Joi.date()
    .required()
    .messages({ "any.required": `Jour est obligatoire` }),

  start: Joi.string()
    .required()
    .messages({ "any.required": `Date deb est obligatoire` }),

  end: Joi.string()
    .required()
    .messages({ "any.required": `Date fin est obligatoire` }),

  description: Joi.string()
    .required()
    .messages({ "any.required": `Description est obligatoire` }),

  cin: Joi.alternatives()
    .try(
      Joi.string().regex(/^\d{8}$/),
      Joi.number().min(10000000).max(99999999)
    )
    .required()
    .messages({ "any.required": `Cin est obligatoire` }),

  phone: Joi.string()
    .regex(/^\d{8}$/)
    .required()
    .messages({ "any.required": `Numero de telephone est obligatoire` }),

  firstName: Joi.string()
    .required()
    .messages({ "any.required": `Nom est obligatoire` }),

  lastName: Joi.string()
    .required()
    .messages({ "any.required": `Prénom est obligatoire` }),
});

export const validationRDV = (data) => {
  const validation = createRdv.validate(data);
  if (validation.error) {
    toast.error(validation.error.details[0].message);
    return false;
  }
  return true;
};

const createVcc = Joi.object({
  title: Joi.string()
    .required()
    .messages({ "any.required": `Libelle est obligatoire` }),

  description: Joi.string()
    .required()
    .messages({ "any.required": `Description est obligatoire` }),

  start: Joi.string()
    .required()
    .messages({ "any.required": `Date deb est obligatoire` }),

  end: Joi.string()
    .required()
    .messages({ "any.required": `Date fin est obligatoire` }),
});

export const validationVcc = (data) => {
  const validation = createVcc.validate(data);
  if (validation.error) {
    toast.error(validation.error.details[0].message);
    return false;
  }
  return true;
};
