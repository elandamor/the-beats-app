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

/**
 * Throws when the request was valid, but the server is refusing action.
 * The user might not have the necessary permissions for a resource, or may
 * need an account of some sort.
 */
export const ForbiddenError = createError("ACCESS_DENIED", {
  message: "You do not have permission to perform operation."
});
