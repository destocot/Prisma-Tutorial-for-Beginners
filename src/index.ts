import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // gt: greater than | Filter Posts Based on Views
  // const popularPosts = await prisma.post.findMany({
  //   where: {
  //     views: {
  //       gt: 500,
  //     },
  //   },
  // });
  // console.log("# of posts with more than 500 views", popularPosts.length);
  //
  // startsWith: starts with | Filter Posts Based on Title
  // const posts = await prisma.post.findMany({
  //   where: {
  //     title: {
  //       startsWith: "p",
  //     },
  //   },
  // });
  // console.log("# of posts starting with 'P'", posts.length);
  //
  // Filter Posts with Related User Information
  // const userPosts = await prisma.post.findMany({
  //   where: {
  //     user: {
  //       email: {
  //         endsWith: "hotmail.com",
  //       },
  //     },
  //   },
  // });
  // console.log("# of posts by users with hotmail email", userPosts.length);
  //
  // Filter Users Based on Published Posts
  // const usersWithPublishedPosts = await prisma.user.findMany({
  //   where: {
  //     posts: {
  //       some: {
  //         isPublished: true,
  //         views: {
  //           lt: 100,
  //         },
  //       },
  //     },
  //   },
  // });
  // console.log(
  //   "# of users with published posts",
  //   usersWithPublishedPosts.length
  // );
  // AND - Logical Operator
  const posts = await prisma.post.findMany({
    where: {
      AND: [
        {
          isPublished: true,
        },
        {
          user: {
            email: {
              endsWith: "gmail.com",
            },
          },
        },
        {
          views: {
            gte: 800,
          },
        },
      ],
    },
    select: {
      title: true,
      views: true,
      isPublished: true,
      user: { select: { email: true } },
    },
  });
  console.log("# of posts that meet the criteria", posts.length);
  console.log(posts);
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
