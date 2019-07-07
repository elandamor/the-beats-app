import { Prisma, Track } from "../generated/prisma-client";

export interface Context {
  prisma: Prisma;
}

export const APP_SECRET = process.env.APP_SECRET;

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

/**
 * Convert seconds(Int) to time(String)
 * @param secs
 */
export const secondsToTime = secs => {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);
  const seconds = Math.floor((secs % 3600) % 60);

  return (
    (hours === 0
      ? ""
      : hours > 0 && hours.toString().length < 2
      ? "0" + hours + ":"
      : hours + ":") +
    (minutes.toString().length < 2 ? "0" + minutes : minutes) +
    ":" +
    (seconds.toString().length < 2 ? "0" + seconds : seconds)
  );
};

/**
 * Convert time(String) to seconds(Int)
 * @param arg - time as a string
 */
export const timeToSeconds = arg => {
  const time = arg.split(":");
  const seconds = parseInt(time[0], 10) * 60 + parseInt(time[1], 10);

  return seconds;
};
