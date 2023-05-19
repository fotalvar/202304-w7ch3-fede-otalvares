import { type Request } from "express";

export interface UserLoginStructure {
  username: string;
  password: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

export type UserCredentialsRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  UserCredentials
>;
