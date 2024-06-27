import type { NextAuthConfig } from "next-auth";
import credentials from "next-auth/providers/credentials";

export default {
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  providers: [
    credentials({
      type: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (
          credentials?.username === "admin" &&
          credentials?.password === "admin"
        ) {
          return { id: "1", name: "admin" };
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
