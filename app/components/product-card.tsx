import { Link } from "@remix-run/react";
import { Product, Variant } from "@prisma/client";

type ProductCardProps = {
  product: Product & {
    variants: Variant[];
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const lowestPrice = Math.min(...product.variants.map((v) => v.price));
  const firstVariant = product.variants[0];

  return (
    <Link
      to={`/products/${product.slug}`}
      className="group rounded-lg border p-4 hover:shadow-lg transition-shadow"
    >
      <div className="aspect-square overflow-hidden rounded-md">
        <img
          src={firstVariant.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {product.description}
        </p>
        <p className="mt-2 font-medium">From ${lowestPrice.toFixed(2)}</p>
      </div>
    </Link>
  );
}