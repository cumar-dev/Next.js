
import Link from "next/link";
import type { Metadata } from "next";
import "../../globals.css";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProduct(slug: string): Promise<Product> {
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
   console.log("jdfhdf",res)

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const product = await getProduct(slug);

  return {
    title: `${product.title} | Products`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProduct(slug);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        {/* Back Button */}
        <Link
          href="/products"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-white"
        >
          ← Back to Products
        </Link>

        {/* Product Card */}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Product Image */}
            <div className="flex min-h-[500px] items-center justify-center bg-white p-12">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-[420px] w-full object-contain transition duration-500 hover:scale-105"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col justify-center p-8 sm:p-12">
              {/* Category */}
              <span className="mb-5 w-fit rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium capitalize text-blue-400">
                {product.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight sm:text-4xl">
                {product.title}
              </h1>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-1 text-yellow-400">
                  ★
                  <span className="ml-1 text-white">{product.rating.rate}</span>
                </div>

                <span className="text-slate-500">
                  {product.rating.count} reviews
                </span>
              </div>

              {/* Price */}
              <div className="mt-8">
                <p className="text-sm text-slate-500">Price</p>

                <p className="mt-1 text-4xl font-bold text-white">
                  ${product.price}
                </p>
              </div>

              {/* Description */}
              <div className="mt-8 border-t border-slate-800 pt-8">
                <h2 className="mb-3 text-lg font-semibold">
                  Product Description
                </h2>

                <p className="leading-7 text-slate-400">
                  {product.description}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button className="flex-1 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold transition hover:bg-blue-500">
                  Add to Cart
                </button>

                <button className="rounded-xl border border-slate-700 px-6 py-3.5 font-semibold transition hover:bg-slate-800">
                  ♡
                </button>
              </div>

              {/* Extra Info */}
              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-800 pt-6 text-center">
                <div>
                  <p className="text-lg">🚚</p>
                  <p className="mt-1 text-xs text-slate-400">Fast Delivery</p>
                </div>

                <div>
                  <p className="text-lg">🔒</p>
                  <p className="mt-1 text-xs text-slate-400">Secure Payment</p>
                </div>

                <div>
                  <p className="text-lg">↩️</p>
                  <p className="mt-1 text-xs text-slate-400">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
