import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";
import { Button } from "~/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export async function loader({ params }: LoaderFunctionArgs) {
  const product = await prisma.product.findUnique({
    where: { slug: params.slug },
    include: { variants: true },
  });

  if (!product) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ product });
}

export default function ProductDetail() {
  const { product } = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.variants[0].image}
            alt={product.name}
            className="rounded-lg w-full"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 dark:text-gray-300">
            {product.description}
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Select Size
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose size" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from(new Set(product.variants.map(v => v.size)))
                    .map(size => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Select Color
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Choose color" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from(new Set(product.variants.map(v => v.color)))
                    .map(color => (
                      <SelectItem key={color} value={color}>
                        {color}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold">
              ${product.variants[0].price.toFixed(2)}
            </span>
            <Button size="lg">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
