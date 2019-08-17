export const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT;
export const NODE_ENV = process.env.NODE_ENV;

export const JWT_LOCAL_STORAGE_KEY = 'APP_JWT';

export const KEYBOARD_CODE = {
  ENTER: 13,
};

/**
 * Password regex for alphanumeric password with special characters
 * ^                  The password string will start this way
 * (?=.*[a-z])        The string must contain at least 1 lowercase alphabetical character
 * (?=.*[A-Z])	      The string must contain at least 1 uppercase alphabetical character
 * (?=.*[0-9])	      The string must contain at least 1 numeric character
 * (?=.[!@#\$%\^&])	  The string must contain at least one special character, but we are escaping reserved RegEx characters to avoid conflict
 * @see https://www.thepolyglotdeveloper.com/2015/05/use-regex-to-test-password-strength-in-javascript/
 */
export const PASSWORD_REGEX = new RegExp(
  '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])',
);

export const PASSWORD_REGEX_MESSAGE =
  'Password must be alphanumeric ie. Pass123!';
