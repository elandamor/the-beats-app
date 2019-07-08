import { Context } from "../../typings";
import * as service from "./Track.service";

/**
 * Resolvers for Track
 */

export default {
  Mutation: {
    createTrack: (_, { input }, context: Context) =>
      service.createTrack(input, context)
  },
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
