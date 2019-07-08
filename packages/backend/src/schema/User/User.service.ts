import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { Context } from "../../typings";
import { UserCreateInput } from "../../generated/prisma-client";
import { UnknownError } from "../../utils/errors";
import { APP_SECRET } from "../../constants";

/**
 * Creates an user
 * @param user - Object of user to create
 * @param context - Exposes prisma
 */
export const createUser = async (user, { prisma }: Context) => {
  const { email, password } = user;

  const userExists = await prisma.$exists.user({ email });

  if (userExists) {
    throw new Error("An account with this email already exists!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const payload: UserCreateInput = {
    email,
    password: hashedPassword
  };

  try {
    const user = await prisma.createUser({ ...payload });

    return {
      token: jwt.sign({ userId: user.id }, APP_SECRET),
      user
    };
  } catch (error) {
    throw new UnknownError({
      message: error.message
    });
  }
};
