import { getDuration, getUserId, logger, generateAlias } from "../../utils";
import { Context } from "../../typings";
import { AlbumCreateInput } from "../../generated/prisma-client";
import { createArtists } from "../Artist/Artist.service";
import { createTracks } from "../Track/Track.service";
import { UnknownError, AlbumExistsError } from "../../utils/errors";

/**
 * Creates an album
 * @param album - An input object
 * @param context - Exposes prisma
 */
export const createAlbum = async (album, context: Context) => {
  const { prisma, request } = context;
  const { artists, name, releaseDate, releaseType, tracks } = album;

  const alias = generateAlias(name, { suffix: releaseType });

  const albumExists = await prisma.$exists.album({ alias });

  if (albumExists) {
    throw new AlbumExistsError();
  }

  const numTracks = tracks ? tracks.length : 0;
  const duration = tracks ? getDuration(tracks) : 0;

  const artistsToConnect = await createArtists(artists, context);

  const payload: AlbumCreateInput = {
    alias,
    name,
    releaseDate,
    releaseType,
    numTracks,
    duration,
    artists: {
      connect: artistsToConnect
    },
    addedBy: {
      connect: { id: getUserId(request) }
    }
  };

  try {
    const createdAlbum = await prisma.createAlbum({ ...payload });
    // Create tracks and connect them to 'createdAlbum'
    await createTracks(tracks, context, createdAlbum);

    return createdAlbum;
  } catch (error) {
    throw new UnknownError({
      message: error.message
    });
  }
};
