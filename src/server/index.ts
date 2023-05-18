import cors from "cors";
import express from "express";
import morgan from "morgan";

const allowedOrigins = ["http://localhost:5173"];

const corsOptions: cors.CorsOptions = {
  origin: allowedOrigins,
};

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.disable("x-powered-by");

app.use(morgan("dev"));

export default app;
