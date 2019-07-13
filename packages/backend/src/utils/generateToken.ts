import * as jwt from "jsonwebtoken";
import { APP_SECRET, JWT_EXPIRES_IN } from "../constants";
import { User } from "../generated/prisma-client";

/**
 * Generates JWT token from user object
 */
export const generateToken = (user: User) => {
  const payload = {
    userId: user.id,
    isAdmin: user.isAdmin
  };

  return jwt.sign(payload, APP_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
};
