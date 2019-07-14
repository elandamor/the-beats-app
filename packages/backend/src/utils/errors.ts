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
 * Throws when the requested resource could not be found but may be
 * available in the future.
 */
export const NotFoundError = createError("404:NotFound", {
  message: "The requested resource could not be found."
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
 * Similar to ForbiddenError, but specifically for use when authentication is
 * required and has failed or has not yet been provided.
 */
export const UnauthorizedError = createError("401:Unauthorized", {
  message: "Authentication required"
});

/**
 * Throws when the request was valid, but the server is refusing action.
 * The user might not have the necessary permissions for a resource, or may
 * need an account of some sort.
 */
export const ForbiddenError = createError("403:Forbidden", {
  message: "You don't have permissions to perform operation"
});
