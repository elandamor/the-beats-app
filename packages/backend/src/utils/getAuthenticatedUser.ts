import { Request } from "express";
import * as jwt from "jsonwebtoken";
import { APP_SECRET } from "../constants";

/**
 * Get authenticatedUser from JWT
 */
export const getAuthenticatedUser = (
  request: Request
): { id: string; role: string } => {
  const authorization = request.headers.authorization;

  if (!authorization) {
    throw new Error("Authentication required!");
  }

  const token = authorization.replace("Bearer ", "");
  const decoded = jwt.verify(token, APP_SECRET);

  return {
    // @ts-ignore - (decoded) Property 'userId' does not exist on type 'string | object'
    id: decoded.userId,
    // @ts-ignore - (decoded) Property 'isAdmin' does not exist on type 'string | object'
    role: decoded.isAdmin ? "ADMIN" : "SUBSCRIBER"
  };
};
