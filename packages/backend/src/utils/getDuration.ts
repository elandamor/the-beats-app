import { Track } from "../generated/prisma-client";

import { timeToSeconds } from "./timeToSeconds";

/**
 * getDuration
 * @param media - Track or Tracks
 */
export const getDuration = (media: Track | Track[]) => {
  const initialValue = 0;

  const computeDuration = (duration: string | number) => {
    // Convert duration to 'seconds' of type 'number' if input is of type 'string' with '(hh:)mm:ss' format
    return typeof duration === "string" ? timeToSeconds(duration) : duration;
  };

  if (!Array.isArray(media)) {
    return computeDuration(media.duration);
  }

  return media.reduce((previousTrack, currentTrack) => {
    const duration = computeDuration(currentTrack.duration);
    return previousTrack + duration;
  }, initialValue);
};
