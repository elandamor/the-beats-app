import { prisma } from "../src/generated/prisma-client";
import { createAlbum } from "../src/schema/Album/Album.service";
import { createUser } from "../src/schema/User/User.service";
import { Context } from "../src/typings";
import albumsToCreate from "./data/albums";

let context: Context = {
  prisma,
  request: undefined
};

async function main() {
  const userInput = {
    email: "mpofuthandolwethu@gmail.com",
    password: "Pass123!",
    isAdmin: true
  };

  console.log("Creating user...");

  const user = await createUser(
    {
      ...userInput
    },
    context
  );

  console.log("User created...");

  context.request = {
    headers: {
      authorization: `Bearer ${user.token}`
    }
  };

  /**
   * Create albums
   */

  console.log("Creating albums...");

  albumsToCreate.forEach(async album => {
    console.log(`  Creating ${album.name}`);

    await createAlbum(
      {
        ...album
      },
      context
    );
  });

  console.log("Albums created...");
}

main().catch(e => console.error(e.message));
