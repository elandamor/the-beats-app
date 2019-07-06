import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import * as schema from "./schema";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  ...schema,
  context: {
    prisma
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
