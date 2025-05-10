import { NextResponse } from "next/server";
import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export async function getProducts() {
  try {
    const data = await prisma.product.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در دریافت محصولات ایجاد شده است");
  }
}

export async function getProduct(id: number) {
  try {
    const data = await prisma.product.findUnique({
      where: { id },
    });
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    throw new Error("در دریافت محصول مورد نظر مشکلی ایجاد شده است");
  }
}

export async function setProduct(data: Prisma.ProductCreateInput) {
  // Secure Access Later
  try {
    const product = await prisma.product.create({ data });
    return NextResponse.json(product);
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در ایجاد محصول پیش آمده است");
  }
}
export async function updateProduct(
  id: number,
  data: Prisma.ProductUpdateInput
) {
  try {
    const updatedProduct = await prisma.product.update({
      where: { id },
      data,
    });
    return NextResponse.json(updatedProduct);
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در فرآیند بروزرسانی محصول ایجاد شده است");
  }
}
export async function removeProduct(id: number) {
  try {
    const deletedProduct = await prisma.product.delete({
      where: { id },
    });
    return NextResponse.json(deletedProduct);
  } catch (error) {
    console.log(error);
    throw new Error("مشکلی در فرآیند حذف محصول ایجاد شده است");
  }
}
