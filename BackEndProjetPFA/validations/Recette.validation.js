const Joi = require("joi");

const createRecetteSchema = Joi.object({
  date: Joi.date().required(),
  tarif_consultation: Joi.number().required(),
  modePaiement: Joi.string().required(),
  consultation: Joi.string().required(),
  nom_prenom_patient: Joi.string().required(),
  images: Joi.array().items(Joi.string()).required(),
});

const updateRecetteSchema = Joi.object({
  date: Joi.date(),
  tarif_consultation: Joi.number(),
  modePaiement: Joi.string(),
  consultation: Joi.string(),
  nom_prenom_patient: Joi.string(),
  images: Joi.array().items(Joi.string()).required(),
});

exports.validateCreateRecette = (req, res, next) => {
  const { error } = createRecetteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

exports.validateUpdateRecette = (req, res, next) => {
  const { error } = updateRecetteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
