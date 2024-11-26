import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Sort by createdAt in descending order
  // const posts = await prisma.post.findMany({
  //   orderBy: {
  //     views: "desc",
  //   },
  //   select: { id: true, views: true },
  // });
  // console.log(posts);
  //
  // Sort by name in ascending order
  // const users = await prisma.user.findMany({
  //   orderBy: {
  //     name: "asc",
  //   },
  //   select: { id: true, name: true },
  // });
  // console.log(users);
  //
  // Sort users by posts count in descending order
  const users = await prisma.user.findMany({
    orderBy: {
      posts: {
        _count: "desc",
      },
    },
    select: {
      name: true,
      posts: { select: { id: true } },
    },
  });

  // in studio remove some
  for (const user of users) {
    console.log(`Name: ${user.name} - Posts count: ${user.posts.length}`);
  }
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
