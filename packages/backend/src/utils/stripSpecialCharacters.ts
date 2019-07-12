/**
 * Remove all special characters from a string.
 * @param str string
 */
export const stripSpecialCharacters = (str: string) => {
  return str.replace(/[^a-zA-Z\d]/g, "");
};
