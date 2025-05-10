import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();
const productData: Prisma.ProductCreateInput[] = [
  {
    name: "هودی قرمز",
    price: 1_000_000,
  },
  {
    name: "هودی سبز",
    price: 1_200_000,
  },
  {
    name: "هودی بنفش",
    price: 1_420_000,
  },
  {
    name: "هودی مشکی",
    price: 900_000,
  },
  {
    name: "هودی زرد",
    price: 1_500_000,
  },
];

export async function main() {
  try {
    console.log("Seeding Products ...");
    for (const p of productData) {
      await prisma.product.create({ data: p });
    }
    console.log("Seeding Compeleted");
  } catch (error) {
    console.log("Error Seeding Products", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}
main();
