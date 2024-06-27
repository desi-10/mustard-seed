import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { NextResponse } from "next/server";

const { auth: middleware } = NextAuth(authConfig);

const PUBLIC_ROUTES = ["/", "/signup"];

export default middleware((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  console.log(isLoggedIn);
  console.log(nextUrl.pathname);

  if (!isLoggedIn && !PUBLIC_ROUTES.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (isLoggedIn && PUBLIC_ROUTES.includes(nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
