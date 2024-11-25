import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  const users = await prisma.user.createManyAndReturn({
    data: Array.from({ length: 10 }, () => ({
      email: faker.internet.email(),
      name: faker.internet.username(),
    })),
    select: { id: true },
  });

  for (const user of users) {
    await prisma.post.createMany({
      data: Array.from({ length: 20 }, () => {
        const isPublished = faker.datatype.boolean();
        const views = isPublished ? faker.number.int({ min: 1, max: 1000 }) : 0;

        return {
          title: faker.lorem.sentence(),
          content: faker.lorem.paragraphs(),
          userId: user.id,
          isPublished,
          views,
        };
      }),
    });
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
