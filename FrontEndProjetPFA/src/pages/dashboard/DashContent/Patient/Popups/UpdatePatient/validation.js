import Joi from "joi";
import { toast } from "react-hot-toast";
import { GetOnly } from "../../../../../../functions/ValuesParser";

const createPatV = Joi.object({
  cin: Joi.alternatives()
    .try(
      Joi.string().regex(/^\d{8}$/),
      Joi.number().min(10000000).max(99999999)
    )
    .required()
    .messages({ "any.required": `Cin est obligatoire` }),
  firstName: Joi.string()
    .required()
    .messages({ "any.required": `Nom est obligatoire` }),
  lastName: Joi.string()
    .required()
    .messages({ "any.required": `Prénom est obligatoire` }),
  birthDate: Joi.date()
    .required()
    .messages({ "any.required": `Date De naissance est obligatoire` }),
  birthPlace: Joi.string()
    .required()
    .messages({ "any.required": `birth Place est obligatoire` }),
  adress: Joi.string()
    .required()
    .messages({ "any.required": `Adress est obligatoire` }),
  phone: Joi.string()
    .regex(/^\d{8}$/)
    .required()
    .messages({ "any.required": `Numero de telephone est obligatoire` }),
  email: Joi.string().email({ tlds: { allow: false } }),
  sex: Joi.string()
    .valid("MEN", "WOMEN")
    .required()
    .messages({ "any.required": `Genre est obligatoire` }),
  profession: Joi.string()
    .required()
    .messages({ "any.required": `Profession est obligatoire` }),
  code_apci: Joi.string(),
  etat_civil: Joi.string()
    .valid("Célibataire", "Marié", "Divorcé")
    .required()
    .messages({ "any.required": `Etat civil est obligatoire` }),
  code_cnam: Joi.string().messages({
    "any.required": `code cnam est obligatoire`,
  }),
  date_expire: Joi.date().messages({
    "any.required": `Date D'expire est obligatoire`,
  }),
});

export const validation = (data) => {
  const validation = createPatV.validate(brut_pat(data));
  if (validation.error) {
    toast.error(validation.error.details[0].message);
    return false;
  }
  return true;
};

export const brut_pat = (pat) => {
  let allowed_data = GetOnly(
    [
      "cin",
      "firstName",
      "lastName",
      "birthDate",
      "birthPlace",
      "adress",
      "phone",
      "email",
      "sex",
      "profession",
      "code_apci",
      "etat_civil",
      "date_expire",
      "code_cnam",
    ],
    pat
  );
  return allowed_data;
};
