import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create a new post for a user
  // const newPost1 = await prisma.post.create({
  //   data: {
  //     title: "My first post",
  //     userId: 1,
  //   },
  // });

  // console.log(newPost1);

  // Create another new post for a user
  // const newPost2 = await prisma.post.create({
  //   data: {
  //     title: "My second post",
  //     content: "This is the content of my second post",
  //     userId: 1,
  //     published: true,
  //   },
  // });
  // console.log(newPost2);

  // Create another new post for a user
  // const newPost3 = await prisma.post.create({
  //   data: {
  //     title: "My third post",
  //     user: {
  //       connect: {
  //         id: 1,
  //       },
  //     },
  //   },
  // });
  // console.log(newPost3);

  // Find all posts for user with include
  // const userWithPosts = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   include: { posts: true },
  // });
  // console.log(userWithPosts);

  // Find all posts for user with select
  // const userWithPosts = await prisma.user.findUnique({
  //   where: {
  //     id: 1,
  //   },
  //   select: {
  //     id: true,
  //     email: true,
  //     name: true,
  //     posts: {
  //       select: {
  //         id: true,
  //         title: true,
  //         content: true,
  //         published: true,
  //       },
  //     },
  //   },
  // });
  // console.log(userWithPosts);

  // Find all posts for a user
  const postsByUser = await prisma.post.findMany({
    where: {
      userId: 1,
    },
    include: { user: true },
  });
  console.log(postsByUser);
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
