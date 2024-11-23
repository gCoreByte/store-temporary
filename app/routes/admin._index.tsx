import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "../db.server";
import { requireAdmin } from "../utils/auth.server";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Package, ShoppingCart, DollarSign } from "lucide-react";

export async function loader({ request }: LoaderFunctionArgs) {
  await requireAdmin(request);

  const [totalProducts, totalVariants, lowStock] = await Promise.all([
    prisma.product.count(),
    prisma.variant.count(),
    prisma.variant.count({
      where: {
        stock: {
          lte: 10,
        },
      },
    }),
  ]);

  return json({
    stats: {
      totalProducts,
      totalVariants,
      lowStock,
    },
  });
}

export default function AdminIndex() {
  const { stats } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Dashboard Overview</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Products</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalProducts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Variants</CardTitle>
            <ShoppingCart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalVariants}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Low Stock Items</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.lowStock}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
