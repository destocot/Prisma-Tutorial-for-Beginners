import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Delete a user
  // const deletedUser = await prisma.user.delete({
  //   where: { id: 4 },
  // });
  // console.log(deletedUser);
  //
  // Delete many users
  // const manyDeletedUsers = await prisma.user.deleteMany({});
  // console.log(manyDeletedUsers);
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
