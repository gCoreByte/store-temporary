import { json, ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { z } from "zod";
import { login, createUserSession } from "../utils/auth.server";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useToast } from "~/hooks/use-toast";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get("Cookie"));
  if (session.has("user")) {
    return redirect("/");
  }
  return json({});
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const { email, password } = LoginSchema.parse(data);
    const user = await login(email, password);

    if (!user) {
      return json({ error: "Invalid credentials" }, { status: 400 });
    }

    return createUserSession(user, user.role === "ADMIN" ? "/admin" : "/");
  } catch (error) {
    if (error instanceof z.ZodError) {
      return json({ error: "Invalid form data" }, { status: 400 });
    }
    return json({ error: "Server error" }, { status: 500 });
  }
}

export default function Login() {
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const { toast } = useToast();

  if (actionData?.error) {
    toast({
      title: "Error",
      description: actionData.error,
      variant: "destructive",
    });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>
        <Form method="post" className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Signing in..." : "Sign in"}
          </Button>
        </Form>
      </div>
    </div>
  );
}
