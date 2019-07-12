import * as jwt from "jsonwebtoken";
import { APP_SECRET, JWT_EXPIRES_IN } from "../constants";

/**
 * Generates JWT token from user id
 */
export const generateToken = (userId: string) =>
  jwt.sign({ userId }, APP_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
