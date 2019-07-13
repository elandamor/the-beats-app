import * as bcrypt from "bcrypt";

/**
 * Creates a hashed password
 * @param password string to hash
 */
export const hashPassword = (password: string) => bcrypt.hash(password, 10);
