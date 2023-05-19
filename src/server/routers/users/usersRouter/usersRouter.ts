import { Router } from "express";
import { loginUser } from "../../../usersControllers/usersControllers.js";
import { validate } from "express-validation";
import loginSchema from "../../../../schemas/loginSchema.js";

const userRouter = Router();

userRouter.post("/login", validate(loginSchema, {}, {}), loginUser);

export default userRouter;
