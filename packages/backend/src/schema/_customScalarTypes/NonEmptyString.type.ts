import { GraphQLScalarType } from "graphql";
import { EmptyStringError } from "../../utils/errors";

function isString(value) {
  if (typeof value === "string" && value.trim().length > 0) {
    return value;
  }

  throw new EmptyStringError();
}

export default new GraphQLScalarType({
  name: "NonEmptyString",
  description: "Should not allow a string to be empty",
  parseValue: isString,
  serialize: isString,
  parseLiteral: isString
});
