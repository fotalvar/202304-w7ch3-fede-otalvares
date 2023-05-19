import bcrypt from "bcryptjs";
import { type Response, type NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import CustomError from "../../CustomError/CustomError.js";
import User from "../../database/models/users/user.js";
import { type UserCredentialsRequest } from "../../types.js";

export const loginUser = async (
  req: UserCredentialsRequest,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      const authError = new CustomError(401, "Incorrect username or password");
      throw authError;
    }

    const tokenPayload: JwtPayload = {
      sub: user._id.toString(),
      name: user.username,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};
