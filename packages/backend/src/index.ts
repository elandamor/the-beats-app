import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import * as schema from "./schema";

const server = new GraphQLServer({
  ...schema,
  context: contextParams => {
    return {
      ...contextParams,
      prisma
    };
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
