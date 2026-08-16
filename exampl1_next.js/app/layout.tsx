import Link from "next/link";
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        <nav>
          <Link href="/home">Home Page</Link> | <Link href="/about">About</Link>{" "}
          | <Link href="/dashboard">Dashboard</Link> |{" "}
          <Link href="/dashboard/profile">Profile</Link> |{" "}
          <Link href="/dashboard/settings">Settings</Link> |{" "}
          <Link href="/products">Products</Link> |{" "}
          <Link href="/products/product">Product</Link>
        </nav>

        <hr />
        {children}
      </body>
    </html>
  );
}
