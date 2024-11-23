import { json, redirect } from "@remix-run/node";
import bcrypt from "bcryptjs";
import { prisma } from "~/db.server";
import { getSession, commitSession } from "~/session.server";

export async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) return null;

  return { id: user.id, email: user.email, role: user.role };
}

export async function requireUser(request: Request) {
  const session = await getSession(request.headers.get("Cookie"));
  const user = session.get("user");

  if (!user) {
    throw redirect("/login");
  }

  return user;
}

export async function requireAdmin(request: Request) {
  const user = await requireUser(request);
  
  if (user.role !== "ADMIN") {
    throw redirect("/");
  }

  return user;
}

export async function createUserSession(user: any, redirectTo: string) {
  const session = await getSession();
  session.set("user", user);
  
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await commitSession(session),
    },
  });
}