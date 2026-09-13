import "../globals.css";
const Product = async () => {
  // const [isloading, setIsLoading] = useState<boolean>(false);
  const req = await fetch("https://fakestoreapi.com/products", {
    cache: "force-cache",
  });
  if (!req.ok) {
    throw new Error("error happened during fetching api");
  }
  const products = await req.json();
  console.log("products", products);
  return (
    <>
      <div className="min-h-screen bg-gray-100 px-6 py-10">
        <h1 className="mb-8 text-center text-3xl font-bold text-gray-900">
          Products
        </h1>

        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product: any) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-64 items-center justify-center bg-gray-50 p-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <p className="mb-2 text-sm font-medium capitalize text-indigo-600">
                  {product.category}
                </p>

                <h2 className="mb-3 line-clamp-2 text-lg font-semibold text-gray-900">
                  {product.title}
                </h2>

                <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-500">
                  {product.description}
                </p>

                <div className="flex items-center justify-between border-t pt-4">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
