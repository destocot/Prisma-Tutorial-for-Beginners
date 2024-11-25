import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Select all fields
  // const user1 = await prisma.user.findUnique({
  //   where: { id: 10 },
  // });
  // console.log(user1);
  //
  // Select just id field
  // const user2 = await prisma.user.findUnique({
  //   where: { id: 10 },
  //   select: { id: true },
  // });
  // console.log(user2);
  // Select just id and email fields
  // const user3 = await prisma.user.findUnique({
  //   where: { id: 10 },
  //   select: { id: true, email: true },
  // });
  // console.log(user3);
  // Select just id and email fields for all users
  const users = await prisma.user.findMany({
    select: { id: true, email: true },
  });
  console.log(users);
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
