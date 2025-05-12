import { NextResponse } from "next/server";
import prisma from "../lib/prisma";
import { Prisma } from "@/app/generated/prisma";

export async function setUserAdmin(data: Prisma.UserAdminCreateInput) {
  try {
    const admin = await prisma.userAdmin.create({ data });
    return NextResponse.json(admin);
  } catch (error) {
    console.log(error);
    throw new Error("در فرایند ایجاد مدیر مشکلی ایجاد شده است");
  }
}

export async function getUserAdmins() {
  try {
    const data = await prisma.userAdmin.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت اطلاعات مدیران ایجاد شده است");
  }
}

export async function getUserAdmin(id: string) {
  try {
    const data = await prisma.userAdmin.findUnique({
      where: { id },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    throw new Error("در دریافت اطلاعات مدیر مورد نظر مشکلی ایجاد شده است");
  }
}

export async function updateUserAdmin(
  id: string,
  data: Prisma.UserAdminUpdateInput
) {
  try {
    const updatedUserAdmin = await prisma.userAdmin.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedUserAdmin);
  } catch (error) {
    console.log(error);
    throw new Error("در فرایند بروزرسانی مدیر مشکلی ایجاد شده است");
  }
}

export async function removeUserAdmin(id: string) {
  try {
    const deletedAdmin = await prisma.userAdmin.delete({
      where: { id },
    });
    return NextResponse.json(deletedAdmin);
  } catch (error) {
    console.log(error);
    throw new Error("در فرایند حذف مدیر مشکلی ایجاد شده است");
  }
}
