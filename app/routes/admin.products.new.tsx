import { json, redirect, ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { z } from "zod";
import { prisma } from "../db.server";
import { requireAdmin } from "../utils/auth.server";
import slugify from "slugify";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
import { useToast } from "~/hooks/use-toast";

const ProductSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  variants: z.array(z.object({
    sku: z.string().min(1),
    color: z.string().min(1),
    size: z.string().min(1),
    price: z.number().positive(),
    stock: z.number().int().positive(),
    image: z.string().min(1),
  })).min(1),
});

export async function action({ request }: ActionFunctionArgs) {
  await requireAdmin(request);
  const formData = await request.formData();
  const data = {
    name: formData.get("name"),
    description: formData.get("description"),
    variants: JSON.parse(formData.get("variants") as string),
  };

  try {
    const validatedData = ProductSchema.parse(data);
    const slug = slugify(validatedData.name, { lower: true });

    await prisma.product.create({
      data: {
        name: validatedData.name,
        description: validatedData.description,
        slug,
        variants: {
          create: validatedData.variants,
        },
      },
    });

    return redirect("/admin/products");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return json({ error: "Invalid form data" }, { status: 400 });
    }
    return json({ error: "Server error" }, { status: 500 });
  }
}

export default function NewProduct() {
  const actionData = useActionData<typeof action>();
  const { toast } = useToast();

  if (actionData?.error) {
    toast({
      title: "Error",
      description: actionData.error,
      variant: "destructive",
    });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Add New Product</h1>

      <Form method="post" className="space-y-8 max-w-2xl">
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Product Name</Label>
            <Input id="name" name="name" required />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea id="description" name="description" required />
          </div>

          <div>
            <Label>Variants</Label>
            <div className="space-y-4">
              {/* Variant form fields will be added dynamically with JavaScript */}
              <div className="border p-4 rounded-md">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="sku">SKU</Label>
                    <Input id="sku" name="variants[0].sku" required />
                  </div>
                  <div>
                    <Label htmlFor="color">Color</Label>
                    <Input id="color" name="variants[0].color" required />
                  </div>
                  <div>
                    <Label htmlFor="size">Size</Label>
                    <Input id="size" name="variants[0].size" required />
                  </div>
                  <div>
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      name="variants[0].price"
                      type="number"
                      step="0.01"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      id="stock"
                      name="variants[0].stock"
                      type="number"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="image">Image URL</Label>
                    <Input id="image" name="variants[0].image" required />
                  </div>
                </div>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              className="mt-2"
              onClick={() => {
                // Add new variant form fields
              }}
            >
              Add Variant
            </Button>
          </div>
        </div>

        <Button type="submit">Create Product</Button>
      </Form>
    </div>
  );
}
