import { GraphQLServer } from "graphql-yoga";
import { prisma } from "./generated/prisma-client";
import * as schema from "./schema";

// Require and configure dotenv.
// We use this to keep our private variables in .env
require("dotenv").config();

const server = new GraphQLServer({
  ...schema,
  context: {
    prisma
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
