import { Router } from "express";
import { loginUser } from "../../../usersControllers/usersControllers.js";

const userRouter = Router();

userRouter.post("/login", loginUser);

export default userRouter;
