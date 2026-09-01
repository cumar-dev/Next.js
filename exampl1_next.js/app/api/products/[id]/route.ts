import { NextResponse } from "next/server";

interface params {
  params: Promise<{
    id: string;
  }>;
}

let products = [
  {
    id: 1,
    name: "iphone",
    price: 1200,
  },
  {
    id: 2,
    name: "mac- mini pro",
    price: 1000,
  },
];
export async function PUT(req: Request, { params }: params) {
  const { id } = await params;
  const { name, price } = await req.json();

  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return NextResponse.json(
      {
        status: "error",
        message: "Product not found",
      },
      { status: 404 },
    );
  }
  product.name = name;
  product.price = price;
  return NextResponse.json({
    status: "success",
    message: "Product updated successfully",
    data: product,
  });
}

export async function DELETE(req: Request, { params }: params) {
  const { id } = await params;
  const product = products.find((product) => product.id === Number(id));
  if (!product) {
    return NextResponse.json(
      {
        status: "error",
        message: "Product not found",
      },
      { status: 404 },
    );
  }
  products = products.filter((product) => product.id !== Number(id));

  return NextResponse.json({
    status: "success",
    message: "Product deleted successfully",
    data: product,
  });
}
