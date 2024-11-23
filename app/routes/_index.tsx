import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "../db.server";
import ProductCard from "../components/product-card";

export async function loader({ request }: LoaderFunctionArgs) {
  const products = await prisma.product.findMany({
    include: {
      variants: true,
    },
  });
  return json({ products });
}

export default function Index() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
