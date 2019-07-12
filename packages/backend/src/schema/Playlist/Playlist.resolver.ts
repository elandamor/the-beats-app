import { Context } from "../../typings";
import * as service from "./Playlist.service";

/**
 * Resolvers for Playlist
 */

export default {
  Mutation: {
    createPlaylist: (_, { input }, context: Context) =>
      service.createPlaylist(input, context),
    addToPlaylist: (_, { input }, context: Context) =>
      service.addToPlaylist(input, context)
  },
  Query: {
    playlist: (_, { id }, { prisma }: Context) => prisma.playlist({ id }),
    playlists: (_, __, { prisma }: Context) =>
      prisma.playlistsConnection({ orderBy: "name_ASC" })
  },
  Playlist: {
    creator: ({ id }: any, _, { prisma }: Context) => {
      return prisma.playlist({ id }).creator();
    },
    artwork: ({ id }: any, _, { prisma }: Context) => {
      return prisma.playlist({ id }).artwork();
    },
    tracks: ({ id }: any, { orderBy }, { prisma }: Context) => {
      return prisma
        .playlist({ id })
        .tracks({ orderBy: orderBy || "addedAt_ASC" });
    }
  },
  PlaylistTrack: {
    addedBy: ({ id }: any, _, { prisma }: Context) => {
      return prisma.playlistTrack({ id }).addedBy();
    },
    track: ({ id }: any, _, { prisma }: Context) => {
      return prisma.playlistTrack({ id }).track();
    }
  },
  Node: {
    __resolveType() {
      return null;
    }
  }
};
