import { getDuration, getAuthenticatedUser, generateAlias } from "../../utils";
import { Context } from "../../typings";
import { UnknownError, NotFoundError } from "../../utils/errors";
import {
  PlaylistCreateInput,
  PlaylistUpdateInput,
  Track
} from "../../generated/prisma-client";

/**
 * Creates a playlist
 * @param playlist - An input object
 * @param context - Exposes prisma
 */
export const createPlaylist = async (playlist, context: Context) => {
  const { prisma, request } = context;
  const { name, trackIds } = playlist;

  const authenticatedUserId = getAuthenticatedUser(request).id;

  const alias = generateAlias(name, { prefix: authenticatedUserId });

  const playlistExists = await prisma.$exists.playlist({ alias });

  if (playlistExists) {
    throw new Error("Duplicate playlist!");
  }

  // Since a playlist can be created without tracks we need to make sure that
  // we set some defaults
  let numTracks = 0;
  let duration = 0;
  let tracks = undefined;

  if (trackIds) {
    tracks = await prisma
      .tracks({ where: { id_in: trackIds } })
      .$fragment<Track[]>(`{ id duration }`);

    numTracks = tracks ? tracks.length : 0;
    duration = tracks ? getDuration(tracks) : 0;
  }

  const payload: PlaylistCreateInput = {
    alias,
    name,
    creator: { connect: { id: authenticatedUserId } },
    numTracks,
    duration,
    ...(tracks
      ? {
          tracks: {
            create: trackIds.map((id: string) => ({
              addedAt: new Date().toISOString(),
              addedBy: { connect: { id: authenticatedUserId } },
              track: { connect: { id } }
            }))
          }
        }
      : {})
  };

  try {
    const createdPlaylist = await prisma.createPlaylist({ ...payload });

    return createdPlaylist;
  } catch (error) {
    throw new UnknownError({
      message: error.message
    });
  }
};

/**
 * Add track to playlist
 * @param track - An input object
 * @param context - Exposes prisma
 */
export const addToPlaylist = async (input, context: Context) => {
  const { prisma, request } = context;
  const { playlistId, trackId } = input;

  const authenticatedUserId = getAuthenticatedUser(request).id;

  const {
    collaborative,
    creator,
    numTracks,
    duration,
    tracks
  } = await prisma
    .playlist({ id: playlistId })
    .$fragment(
      `{ collaborative creator { id } duration numTracks tracks { track { id duration } } }`
    );

  const addingAsCreator = creator.id === authenticatedUserId;

  if (!addingAsCreator && !collaborative) {
    throw new Error("Unauthorized collaboration!");
  }

  // Get existing trackIds
  const existingTrackIds = tracks.map(({ track }) => track.id);

  // We need to check for any duplicates
  const duplicateId = existingTrackIds.includes(trackId);

  // We currently do not support duplicates
  if (duplicateId) {
    throw new Error("Duplicate track!");
  }

  let newDuration = duration;
  let newNumTracks = numTracks;

  // Get duration of track being added
  const track = await prisma.track({ id: trackId });

  if (track) {
    newDuration += getDuration(track);
    newNumTracks += 1;
  } else {
    throw new NotFoundError({
      message: "Track does not exist!"
    });
  }

  const payload: PlaylistUpdateInput = {
    duration: newDuration,
    numTracks: newNumTracks,
    tracks: {
      create: {
        addedAt: new Date().toISOString(),
        addedBy: { connect: { id: authenticatedUserId } },
        track: { connect: { id: trackId } }
      }
    }
  };

  try {
    const playlist = await prisma.updatePlaylist({
      data: payload,
      where: { id: playlistId }
    });

    return playlist;
  } catch (error) {
    throw new UnknownError({
      message: error.message
    });
  }
};
