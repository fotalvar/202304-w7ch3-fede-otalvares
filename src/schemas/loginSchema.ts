import { Joi } from "express-validation";
import { type UserLoginStructure } from "../types.js";

const loginSchema = {
  body: Joi.object<UserLoginStructure>({
    username: Joi.string().required(),
    password: Joi.string().required(),
  }),
};

export default loginSchema;
