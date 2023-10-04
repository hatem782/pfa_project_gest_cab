const Joi = require("joi");

// ############################ Create Pat ############################

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
  email: Joi.string().email(),
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

const createPatMV = (req, res, next) => {
  const validation = createPatV.validate(req.body);
  if (validation.error)
    return res
      .status(400)
      .json({ Message: validation.error.details[0].message, Success: false });
  next();
};

module.exports = { createPatMV };
