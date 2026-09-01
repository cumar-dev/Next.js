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
export async function GET() {
  return NextResponse.json({
    status: "success",
    message: "product get successfully",
    data: products,
  });
}
export async function GETOne(request: Request, { params }: params) {
  const { id } = await params;

  return NextResponse.json({
    success: true,
    message: "Product found",
    id,
  });
}
export async function POST(req: Request) {
  const { name, price } = await req.json();
  const newProduct = {
    id: products.length + 1,
    name: name,
    price: price,
  };
  products.push(newProduct);
  return NextResponse.json(
    {
      status: "success",
      message: "Product created successfully",
      data: newProduct,
    },
    { status: 201 },
  );
}
