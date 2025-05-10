import {
  getProduct,
  getProducts,
  removeProduct,
  setProduct,
  updateProduct,
} from "../../_data/services/products.services";

export async function POST(request: Request) {
  const data = await request.json();
  return await setProduct(data);
}

export async function GET({ params }: { params: { id?: number } }) {
  if (params?.id) {
    return await getProduct(params.id);
  } else {
    return await getProducts();
  }
}

export async function PUT(request: Request, id: number) {
  const data = await request.json();
  return await updateProduct(id, data);
}
export async function DELETE(id: number) {
  return await removeProduct(id);
}
