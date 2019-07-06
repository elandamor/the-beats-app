import { Context } from "../../utils";

/**
 * Resolvers for Album
 */

export default {
  Query: {
    album: (_, { id }, { prisma }: Context) => prisma.album({ id }),
    albums: (_, __, { prisma }: Context) =>
      prisma.albumsConnection({ orderBy: "name_ASC" })
  },
  Album: {
    artists: ({ id }: any, _, { prisma }: Context) => {
      return prisma.album({ id }).artists();
    },
    artwork: ({ id }: any, _, { prisma }: Context) => {
      return prisma.album({ id }).artwork();
    },
    tracks: ({ id }: any, { orderBy }, { prisma }: Context) => {
      return prisma
        .album({ id })
        .tracks({ orderBy: orderBy || "trackNumber_ASC" });
    }
  },
  Node: {
    __resolveType() {
      return null;
    }
  }
};
