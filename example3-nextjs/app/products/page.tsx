import Link from "next/link";
import "../globals.css"
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  console.log("api fetched", res);
   console.log(res.status);
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
            Our Collection
          </p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Discover Products
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Explore our carefully selected collection of quality products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-blue-500/10"
            >
              {/* Image */}
              <div className="flex h-72 items-center justify-center bg-white p-8">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium capitalize text-blue-400">
                  {product.category}
                </span>

                <h2 className="mt-4 line-clamp-2 min-h-14 text-lg font-semibold">
                  {product.title}
                </h2>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2 text-sm">
                  <span className="text-yellow-400">★</span>
                  <span className="font-medium">{product.rating.rate}</span>
                  <span className="text-slate-500">
                    ({product.rating.count} reviews)
                  </span>
                </div>

                {/* Price + Button */}
                <div className="mt-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">Price</p>
                    <p className="text-2xl font-bold text-white">
                      ${product.price}
                    </p>
                  </div>

                  <Link
                    href={`/products/${product.id}`}
                    className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
