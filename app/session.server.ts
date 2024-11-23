import { createCookieSessionStorage } from "@remix-run/node";

type SessionData = {
  user: { id: string; email: string; role: string } | null;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
      sameSite: "lax",
      secrets: ["s3cr3t"], // replace with your own secret
      secure: process.env.NODE_ENV === "production",
    },
  });

export { getSession, commitSession, destroySession };