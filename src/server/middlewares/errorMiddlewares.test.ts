import { type Request, type Response } from "express";
import CustomError from "../../CustomError/CustomError.js";
import { notFoundError } from "./errorMiddlewares.js";

describe("Given an notFoundError function", () => {
  describe("When it receives a next function", () => {
    test("Then it should call it with a custom error with status code 404 and message 'Endpoint not found'", () => {
      const req = {};
      const res = {};

      const next = jest.fn();

      const customError = new CustomError(404, "Endpoint Not found");

      notFoundError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(customError);
    });
  });
});
