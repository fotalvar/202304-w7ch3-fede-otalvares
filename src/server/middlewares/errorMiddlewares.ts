import createDebug from "debug";
import { type NextFunction, type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError.js";

const debug = createDebug("items-api:server:middlewares:errorMiddleware");

export const notFoundError = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const error = new CustomError(404, "Endpoint Not found");
  next(error);
};

export const generalError = (
  error: CustomError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {
  debug(`Error: ${error.message}`);

  const statusCode = error.statusCode || 500;
  const message = error.statusCode ? error.message : "General Error";

  res.status(statusCode).json({ message });
};
