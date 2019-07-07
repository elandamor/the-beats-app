import { Context, getDuration } from "../../utils";
import {
  TrackCreateInput,
  TrackCreateWithoutAlbumInput,
  Album
} from "../../generated/prisma-client";
import { createArtists } from "../Artist/Artist.service";
import { UnknownError } from "../../utils/errors";

/**
 * Creates an track
 * @param track - Object of track to create
 * @param context - Exposes prisma
 */
// TODO: We need to think about handling possible duplicates.
export const createTrack = async (
  track,
  context: Context,
  album = { id: undefined }
) => {
  const { prisma } = context;
  const { artists, duration, featuring, name, trackNumber } = track;

  const artistsToConnect = await createArtists(artists, context);
  const featuringToConnect = await createArtists(featuring, context);

  const payload: TrackCreateInput = {
    name,
    trackNumber,
    duration: getDuration(track),
    album: {
      connect: { id: album.id }
    },
    artists: {
      connect: artistsToConnect
    },
    featuring: {
      connect: featuringToConnect
    }
  };

  try {
    const createdTrack = await prisma.createTrack({ ...payload });

    return createdTrack;
  } catch (error) {
    throw new UnknownError({
      message: error.message
    });
  }
};

/**
 * Creates many tracks
 * @param tracks - Array of tracks to create
 * @param context - Exposes prisma
 */
export const createTracks = async (tracks, context: Context, album: Album) => {
  if (!tracks) {
    return;
  }

  return new Promise<Array<TrackCreateWithoutAlbumInput>>(resolve => {
    const createdTracks = [];

    tracks.forEach((track, index) => {
      createTrack(track, context, album).then(createdTrack => {
        createdTracks.push({ id: createdTrack.id });

        if (index === tracks.length - 1) {
          resolve(createdTracks);
        }
      });
    });
  });
};
