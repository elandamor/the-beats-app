import { getDuration, getUserId, generateAlias, logger } from "../../utils";
import { Context } from "../../typings";
import { UnknownError } from "../../utils/errors";
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

  const authenticatedUserId = getUserId(request);

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
 * Add track(s) to playlist
 * @param tracks - An input object
 * @param context - Exposes prisma
 */
export const addToPlaylist = async (input, context: Context) => {
  const { prisma, request } = context;
  const { playlistId, trackIds } = input;

  const authenticatedUserId = getUserId(request);

  const { collaborative, creator } = await prisma
    .playlist({ id: playlistId })
    .$fragment(`{ collaborative creator { id } }`);

  const addingAsCreator = creator.id === authenticatedUserId;

  if (!addingAsCreator && !collaborative) {
    throw new Error("Unauthorized collaboration!");
  }

  const payload: PlaylistUpdateInput = {
    tracks: {
      create: trackIds.map((id: string) => ({
        addedAt: new Date().toISOString(),
        addedBy: { connect: { id: authenticatedUserId } },
        track: { connect: { id } }
      }))
    }
  };
  logger({ payload });

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
