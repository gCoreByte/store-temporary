import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";
import { requireAdmin } from "~/utils/auth.server";
import { Button } from "~/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Plus } from "lucide-react";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAdmin(request);
  const products = await prisma.product.findMany({
    include: {
      variants: true,
    },
  });
  return json({ products });
}

export default function AdminProducts() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products</h1>
        <Link to="new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </Link>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Slug</TableHead>
              <TableHead>Variants</TableHead>
              <TableHead>Total Stock</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.slug}</TableCell>
                <TableCell>{product.variants.length}</TableCell>
                <TableCell>
                  {product.variants.reduce((acc, variant) => acc + variant.stock, 0)}
                </TableCell>
                <TableCell>
                  <Link to={`${product.id}/edit`}>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
