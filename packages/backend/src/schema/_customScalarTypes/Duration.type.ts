import { GraphQLScalarType } from "graphql";
import { UnknownError } from "../../utils/errors";
import { timeToSeconds } from "../../utils";

function isString(value) {
  if (typeof value === "string" && value.trim().length > 0) {
    return timeToSeconds(value);
  } else if (typeof value === "number") {
    return value;
  }

  throw new UnknownError();
}

export default new GraphQLScalarType({
  name: "Duration",
  description: 'Converts time of type String "0:00" to Int "seconds"',
  parseValue: isString,
  serialize: isString,
  parseLiteral: isString
});
