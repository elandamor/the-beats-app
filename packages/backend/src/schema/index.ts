import * as path from "path";
import { importSchema } from "graphql-import";
import { fileLoader, mergeResolvers } from "merge-graphql-schemas";

const resolversArray = fileLoader(path.join(__dirname, "./**/*.resolver.ts"), {
  recursive: true
});

export const resolvers = mergeResolvers(resolversArray);
export const typeDefs = importSchema("./src/schema.graphql");
