import { json, LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";
import { requireAdmin } from "~/utils/auth.server";
import { Button } from "~/components/ui/button";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  LogOut
} from "lucide-react";

export async function loader({ request }: LoaderFunctionArgs) {
  const user = await requireAdmin(request);
  return json({ user });
}

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-6">
        <h1 className="text-xl font-bold mb-8">Admin Dashboard</h1>
        <nav className="space-y-4">
          <Link to="/admin">
            <Button variant="ghost" className="w-full justify-start">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
          </Link>
          <Link to="/admin/products">
            <Button variant="ghost" className="w-full justify-start">
              <Package className="mr-2 h-4 w-4" />
              Products
            </Button>
          </Link>
          <Link to="/admin/orders">
            <Button variant="ghost" className="w-full justify-start">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Orders
            </Button>
          </Link>
          <Form action="/logout" method="post">
            <Button variant="ghost" className="w-full justify-start text-red-400">
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </Form>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
