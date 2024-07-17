import { NextRequest, NextResponse } from "next/server";
import { Routes, isPrivateRoute } from "./routes";
import { jwtDecode } from "jwt-decode";
import { DecodedToken } from "./AuthProvider";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("access_token");
  const decoded: DecodedToken | undefined = token
    ? jwtDecode(token.value.toString())
    : undefined;
  const pathname = request.nextUrl.pathname;

  if ((pathname === Routes.LOGIN || pathname === Routes.SIGNUP) && token) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = Routes.MY_STACKS;
    return NextResponse.redirect(newUrl);
  }

  if (isPrivateRoute(pathname) && !token) {
    const newUrl = request.nextUrl.clone();
    newUrl.pathname = Routes.LOGIN;
    return NextResponse.redirect(newUrl);
  }
}

export const config = {
  matcher: [
    /*
     * Excluding the paths from middleware:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - sw.js (service worker)
     */
    "/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)",
  ],
};