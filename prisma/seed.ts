import { PrismaClient, Prisma } from "../app/generated/prisma";

const prisma = new PrismaClient();
const productData: Prisma.ProductCreateInput[] = [
  {
    name: "محصول-1",
    slug: "product-1",
    description: "این توضیحات محصول 1 در صفحه است",
    content: {},
    price: 0,
    discount: 0,
    isAvailable: true,
  },
  {
    name: "محصول-2",
    slug: "product-2",
    description: "این توضیحات محصول 2 در صفحه است",
    content: {},
    price: 0,
    discount: 0,
    isAvailable: true,
  },
  {
    name: "محصول-3",
    slug: "product-3",
    description: "این توضیحات محصول 3 در صفحه است",
    content: {},
    price: 0,
    discount: 0,
    isAvailable: true,
  },
];
const userData: Prisma.UserCreateInput[] = [
  {
    userName: "user-1",
    email: "user@1gmail.com",
    password: "password 1",
    firstName: "first-name 1",
    lastName: "last-name 1",
    phoneNumber: "+98930000001",
    phoneNumberVerified: false,
  },
  {
    userName: "user-2",
    email: "user@2gmail.com",
    password: "password 2",
    firstName: "first-name 2",
    lastName: "last-name 2",
    phoneNumber: "+98930000002",
    phoneNumberVerified: false,
  },
  {
    userName: "user-3",
    email: "user@3gmail.com",
    password: "password 3",
    firstName: "first-name 3",
    lastName: "last-name 3",
    phoneNumber: "+98930000003",
    phoneNumberVerified: false,
  },
  {
    userName: "user-4",
    email: "user@4gmail.com",
    password: "password 4",
    firstName: "first-name 4",
    lastName: "last-name 4",
    phoneNumber: "+98930000004",
    phoneNumberVerified: false,
  },
  {
    userName: "user-5",
    email: "user@5gmail.com",
    password: "password 5",
    firstName: "first-name 5",
    lastName: "last-name 5",
    phoneNumber: "+98930000005",
    phoneNumberVerified: false,
  },
];
const userAdminData: Prisma.UserAdminCreateInput[] = [
  {
    userName: "admin-1",
    email: "admin@1gmail.com",
    firstName: "first-name-admin-1",
    lastName: "last-name-admin-1",
    phoneNumber: "+98900000001",
    avatarUrl: "https://www.google.com",
    isActive: false,
    emailVerified: true,
  },
  {
    userName: "admin-2",
    email: "admin@2gmail.com",
    firstName: "first-name-admin-2",
    lastName: "last-name-admin-2",
    phoneNumber: "+98900000002",
    avatarUrl: "https://www.google.com",
    isActive: false,
    emailVerified: true,
  },
];
export async function main() {
  try {
    console.log("Seeding Products ...");
    for (const p of productData) {
      await prisma.product.create({ data: p });
    }
    for (const u of userData) {
      await prisma.user.create({ data: u });
    }
    for (const ua of userAdminData) {
      await prisma.userAdmin.create({ data: ua });
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
