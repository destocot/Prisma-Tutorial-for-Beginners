import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //   const users = await prisma.user.findMany();
  //   console.log(users);
  //
  //   Find first user
  //   const user1 = await prisma.user.findFirst();
  //   console.log(user1);
  //
  //   Find user by id
  //   const uniqueUser1 = await prisma.user.findUnique({
  //     where: { id: 2 },
  //   });
  //   console.log(uniqueUser1);
  //
  //   Find user by email
  //   const uniqueUser2 = await prisma.user.findUnique({
  //     where: { email: "s.uchiha@example.com" },
  //   });
  //   console.log(uniqueUser2);
  //
  // Find first user with name ends with Uchiha
  //   const user2 = await prisma.user.findFirst({
  //     where: { name: { endsWith: "Uchiha" } },
  //   });
  //   console.log(user2);
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
