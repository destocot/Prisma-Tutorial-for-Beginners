import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // npx prisma studio
  // view
  // create
  // update
  // delete
  // filter
  // fields

  const users = await prisma.user.findMany();
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
