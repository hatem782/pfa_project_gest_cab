import Joi from "joi";
import { toast } from "react-hot-toast";

const loginV = Joi.object({
  login: Joi.string()
    .required()
    .messages({ "any.required": `Login est obligatoire` }),
  password: Joi.string()
    .required()
    .messages({ "any.required": `M-D-P est obligatoire` }),
});

export const LoginMV = (data) => {
  const validation = loginV.validate(data);
  if (validation.error) {
    toast.error(validation.error.details[0].message);
    return false;
  }
  return true;
};
