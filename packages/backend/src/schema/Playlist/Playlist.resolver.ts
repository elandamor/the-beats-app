import { Context } from "../../typings";

/**
 * Resolvers for Playlist
 */

export default {
  Query: {
    playlist: (_, { id }, { prisma }: Context) => prisma.playlist({ id }),
    playlists: (_, __, { prisma }: Context) =>
      prisma.playlistsConnection({ orderBy: "name_ASC" })
  },
  Playlist: {
    artwork: ({ id }: any, _, { prisma }: Context) => {
      return prisma.playlist({ id }).artwork();
    },
    tracks: ({ id }: any, { orderBy }, { prisma }: Context) => {
      return prisma
        .playlist({ id })
        .tracks({ orderBy: orderBy || "trackNumber_ASC" });
    }
  },
  Node: {
    __resolveType() {
      return null;
    }
  }
};
