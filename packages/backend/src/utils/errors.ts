import { createError } from "./apollo-errors";

/**
 * Throws when user tries to create an album that already exists
 */
export const AlbumExistsError = createError("ALBUM_EXISTS", {
  message: "This album already exists"
});

/**
 * Throws when empty string is passed from client
 */
export const EmptyStringError = createError("EXPECTED_STRING", {
  message: "An empty value is not allowed"
});

/**
 * Throws when user requests a non-existent node
 */
export const NodeNotFoundError = createError("NODE_NOT_FOUND", {
  message: "Node does not exist"
});

/**
 * Throws when user tries to create a track that already exists
 */
export const TrackExistsError = createError("TRACK_EXISTS", {
  message: "This track already exists"
});

/**
 * Throws when an unknown error occurs
 */
export const UnknownError = createError("UNKNOWN_ERROR", {
  message: "An unknown error has occured"
});
