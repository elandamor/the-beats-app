import { Context } from "../../typings";
import * as service from "./User.service";

/**
 * Resolvers for User
 */

export default {
  Mutation: {
    createUser: (_, { input }, context: Context) =>
      service.createUser(input, context),
    login: (_, { input }, context: Context) => service.login(input, context)
  },
  Query: {
    user: (_, { id }, { prisma }: Context) => prisma.user({ id }),
    users: (_, __, { prisma }: Context) =>
      prisma.usersConnection({ orderBy: "name_ASC" })
  },
  User: {
    playlists: ({ id }, _, { prisma }: Context) => {
      return prisma.user({ id }).playlists();
    }
  },
  Node: {
    __resolveType() {
      return null;
    }
  }
};
