import { Request } from "express";
import * as jwt from "jsonwebtoken";
import { APP_SECRET } from "../constants";

/**
 * Get userId of logged in account from context
 */
export const getUserId = (request: Request) => {
  const authorization = request.headers.authorization;

  if (!authorization) {
    throw new Error("Authentication required!");
  }

  const token = authorization.replace("Bearer ", "");
  const decoded = jwt.verify(token, APP_SECRET);

  // @ts-ignore - (decoded) Property 'userId' does not exist on type 'string | object'
  return decoded.userId;
};
