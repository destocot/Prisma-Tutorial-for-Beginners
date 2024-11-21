import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //
  // Create a user
  //   const newUser = await prisma.user.create({
  //     data: {
  //       email: "n.uzumaki@example.com",
  //     },
  //   });
  //   console.log(newUser);
  //
  // Create a user with a name
  //   const newUser2 = await prisma.user.create({
  //     data: {
  //       email: "s.uchiha@example.com",
  //       name: "Sasuke Uchiha",
  //     },
  //   });
  //   console.log(newUser2);
  //
  // Create many users
  //   const manyNewUsers = await prisma.user.createMany({
  //     data: [
  //       {
  //         email: "s.haruno@example.com",
  //       },
  //       {
  //         email: "i.uchiha@example.com",
  //         name: "Itachi Uchiha",
  //       },
  //     ],
  //   });
  //   console.log(manyNewUsers);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
