import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // View data going forward with Prisma Studio
  //
  // Update a user
  // const updatedUser = await prisma.user.update({
  //   where: {
  //     id: 5,
  //   },
  //   data: {
  //     name: "Rock Lee Updated",
  //   },
  // });
  // console.log(updatedUser);
  //
  // Update many users
  // const manyUpdatedUsers = await prisma.user.updateMany({
  //   data: {
  //     name: "REDACTED",
  //   },
  // });
  // console.log(manyUpdatedUsers);
  //
  // Upsert a user
  // const upsertedUser = await prisma.user.upsert({
  //   where: {
  //     email: "s.nara@example.com",
  //   },
  //   create: {
  //     email: "s.nara@example.com",
  //     name: "Shikamaru Nara",
  //   },
  //   update: {
  //     name: "Shikamaru Nara Updated",
  //   },
  // });
  // console.log(upsertedUser);
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
