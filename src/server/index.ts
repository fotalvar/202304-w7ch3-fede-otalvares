import cors from "cors";
import express from "express";
import morgan from "morgan";
import {
  generalError,
  notFoundError,
} from "../middlewares/errorMiddlewares.js";

const allowedOrigins = ["http://localhost:5173"];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

app.use(morgan("dev"));

app.use(cors(corsOptions));

app.use("/error", generalError);

app.use(express.json());

app.use(notFoundError);

app.use(generalError);

export default app;
