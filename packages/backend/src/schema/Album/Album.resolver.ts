import { Context } from "../../typings";
import * as service from "./Album.service";

/**
 * Resolvers for Album
 */

export default {
  Mutation: {
    createAlbum: (_, { input }, context: Context) =>
      service.createAlbum(input, context),
    deleteAlbum: (_, { id }, { prisma }: Context) => prisma.deleteAlbum({ id })
  },
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
