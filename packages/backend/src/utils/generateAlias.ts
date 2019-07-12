import { stripSpecialCharacters } from "./stripSpecialCharacters";

interface Options {
  prefix?: string;
  suffix?: string;
}

/**
 * Generates an alias
 * @param str string
 */
export const generateAlias = (str: string, options: Options = {}) => {
  const { prefix, suffix } = options;
  const formattedString = stripSpecialCharacters(str)
    .toLowerCase()
    .trim();
  let alias = formattedString;

  if (prefix && suffix) {
    alias = `${prefix}:${formattedString}:${suffix}`;
  } else if (prefix) {
    alias = `${prefix}:${formattedString}`;
  } else if (suffix) {
    alias = `${formattedString}:${suffix}`;
  }

  return alias;
};
