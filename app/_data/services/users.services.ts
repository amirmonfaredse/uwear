import { NextResponse } from "next/server";
import prisma from "../lib/prisma";
import { Prisma } from "@/app/generated/prisma";

export async function setUser(data: Prisma.UserCreateInput) {
  try {
    const user = await prisma.user.create({ data });
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    throw new Error("در فرایند ایجاد کاربر مشکلی ایجاد شده است");
  }
}

export async function getUsers() {
  try {
    const data = await prisma.user.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت اطلاعات کاربران ایجاد شده است");
  }
}

export async function getUser(id: string) {
  try {
    const data = await prisma.user.findUnique({
      where: { id },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    throw new Error("در دریافت اطلاعات کاربر مورد نظر مشکلی ایجاد شده است");
  }
}

export async function updateUser(id: string, data: Prisma.UserUpdateInput) {
  try {
    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedUser);
  } catch (error) {
    console.log(error);
    throw new Error("در فرایند بروزرسانی کاربر مشکلی ایجاد شده است");
  }
}

export async function removeUser(id: string) {
  try {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });
    return NextResponse.json(deletedUser);
  } catch (error) {
    console.log(error);
    throw new Error("در فرایند حذف  کاربر مشکلی ایجاد شده است");
  }
}
