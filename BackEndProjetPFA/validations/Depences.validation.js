const Joi = require('joi');

const createDepenseSchema = Joi.object({
  date: Joi.date().required(),
  montant: Joi.number().min(0).required(),
  type: Joi.string().required(),
  pieceJustificative: Joi.string().required(),
});

const updateDepenseSchema = Joi.object({
  date: Joi.date(),
  montant: Joi.number().min(0),
  type: Joi.string(),
  pieceJustificative: Joi.string(),
});

const validateCreateDepence = (req, res, next) => {
  const { error } = createDepenseSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const validateUpdateDepence = (req, res, next) => {
  const { error } = updateDepenseSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

module.exports = {

  validateCreateDepence,
  validateUpdateDepence,
};
