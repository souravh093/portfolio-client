import { NextRequest, NextResponse } from "next/server";
import { currentUser } from "./services/login";

type Role = keyof typeof RoleBasedRoutes;

const AuthRoutes = ["/login"];

const RoleBasedRoutes = {
  ADMIN: ["/dashboard"],
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await currentUser();

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && RoleBasedRoutes[user.role as Role]) {
    const routes = RoleBasedRoutes[user.role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:page*", "/login"],
};
