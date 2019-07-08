import { Context } from "../../typings";
import * as service from "./Artist.service";

/**
 * Resolvers for Artist
 */

export default {
  Mutation: {
    createArtist: (_, { input }, context: Context) =>
      service.createArtist(input, context)
  },
  Query: {
    artist: (_, { id }, { prisma }: Context) => prisma.artist({ id }),
    artists: (_, __, { prisma }: Context) =>
      prisma.artistsConnection({ orderBy: "name_ASC" })
  },
  Artist: {
    albums: ({ id }, _, { prisma }: Context) => {
      return prisma.artist({ id }).albums();
    },
    avatar: ({ id }, _, { prisma }: Context) => {
      return prisma.artist({ id }).avatar();
    },
    featuresIn: ({ id }, _, { prisma }: Context) => {
      return prisma.artist({ id }).featuresIn();
    },
    tracks: ({ id }, _, { prisma }: Context) => {
      return prisma.artist({ id }).tracks();
    }
  },
  Node: {
    __resolveType() {
      return null;
    }
  }
};
