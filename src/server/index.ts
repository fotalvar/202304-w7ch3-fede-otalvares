import cors from "cors";
import express from "express";
import morgan from "morgan";
import { generalError, notFoundError } from "./middlewares/errorMiddlewares.js";
import userRouter from "./routers/users/usersRouter/usersRouter.js";

const allowedOrigins = ["http://localhost:5173"];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

app.use(cors(corsOptions));

app.use(morgan("dev"));

app.use(express.json());

app.use("/user", userRouter);

app.use(notFoundError);

app.use(generalError);

export default app;
