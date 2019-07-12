/**
 * Convert seconds(Int) to time(String)
 * @param secs
 */
export const secondsToTime = (secs: number) => {
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
