import { Context } from "../../utils";

/**
 * Resolvers for Track
 */

export default {
  Query: {
    track: (_, { id }, { prisma }: Context) => prisma.track({ id }),
    tracks: (_, __, { prisma }: Context) =>
      prisma.tracksConnection({ orderBy: "name_ASC" })
  },
  Track: {
    album: ({ id }: any, _, { prisma }: Context) => {
      return prisma.track({ id }).album();
    },
    artists: ({ id }: any, _, { prisma }: Context) => {
      return prisma.track({ id }).artists();
    },
    featuring: ({ id }: any, _, { prisma }: Context) => {
      return prisma.track({ id }).featuring();
    }
  },
  Node: {
    __resolveType() {
      return null;
    }
  }
};
