/**
 * Console logging for dev
 */
export const logger = (message?: any, ...optionalParams: any[]) => {
  if (process.env.NODE_ENV === "development") {
    console.log(message, ...optionalParams);
  }
};
