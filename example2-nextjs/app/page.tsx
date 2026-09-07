import Counter from "./Components/Counter";
import Form from "./Form/Form";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <>
    <Counter />
    <Form />
    <div>
      <h1 className="text-xl font-bold">Products</h1>
      <ul>
        {data.products.slice(0, 5).map((product: any) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
    </>
  );
}




