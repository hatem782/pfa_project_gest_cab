const Joi = require("joi");

// ############################ Create User ############################

const createUserV = Joi.object({
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
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": `Email est obligatoire` }),
  sex: Joi.string()
    .valid("MEN", "WOMEN")
    .required()
    .messages({ "any.required": `Genre est obligatoire` }),
  login: Joi.string()
    .required()
    .messages({ "any.required": `Login est obligatoire` }),
  password: Joi.string()
    .required()
    .messages({ "any.required": `M-D-P est obligatoire` }),
});

const createUserMV = (req, res, next) => {
  const validation = createUserV.validate(req.body);
  if (validation.error)
    return res
      .status(400)
      .json({ Message: validation.error.details[0].message, Success: false });

  next();
};

// ############################ Create Doc ############################

const createDocV = Joi.object({
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
  email: Joi.string()
    .email()
    .required()
    .messages({ "any.required": `Email est obligatoire` }),
  sex: Joi.string()
    .valid("MEN", "WOMEN")
    .required()
    .messages({ "any.required": `Genre est obligatoire` }),
  speciality: Joi.string()
    .required()
    .messages({ "any.required": `Specialité est obligatoire` }),
  login: Joi.string()
    .required()
    .messages({ "any.required": `Login est obligatoire` }),
  password: Joi.string()
    .required()
    .messages({ "any.required": `M-D-P est obligatoire` }),
});

const createDocMV = (req, res, next) => {
  const validation = createDocV.validate(req.body);
  if (validation.error)
    return res
      .status(400)
      .json({ Message: validation.error.details[0].message, Success: false });

  next();
};

// ############################ Login ############################

const loginV = Joi.object({
  login: Joi.string()
    .required()
    .messages({ "any.required": `Login est obligatoire` }),
  password: Joi.string()
    .required()
    .messages({ "any.required": `M-D-P est obligatoire` }),
});

const LoginMV = (req, res, next) => {
  const validation = loginV.validate(req.body);
  if (validation.error)
    return res
      .status(400)
      .json({ Message: validation.error.details[0].message, Success: false });

  next();
};

module.exports = { createUserMV, createDocMV, LoginMV };
