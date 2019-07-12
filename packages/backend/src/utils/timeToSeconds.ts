/**
 * Convert time(String) to seconds(Int)
 * @param arg - time as a string
 */
export const timeToSeconds = (arg: string) => {
  const time = arg.split(":");

  const hoursToSeconds =
    time.length === 3 ? Math.floor(parseInt(time[0], 10) * 3600) : 0;

  const minutesToSeconds =
    time.length === 3
      ? Math.floor((parseInt(time[1], 10) % 3600) * 60)
      : parseInt(time[0], 10) * 60;

  const secondsToSeconds =
    time.length === 3 ? parseInt(time[2], 10) : parseInt(time[1], 10);

  const seconds = hoursToSeconds + minutesToSeconds + secondsToSeconds;

  return seconds;
};
