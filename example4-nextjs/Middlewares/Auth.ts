import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const role = request.cookies.get("role")?.value;
  const auth = request.cookies.get("auth")?.value;

  // Not logged in
  if (
    (request.nextUrl.pathname.startsWith("/Dashboard") ||
      request.nextUrl.pathname.startsWith("/Admin")) &&
    auth !== "true"
  ) {
    return NextResponse.redirect(
      new URL("/Register", request.url)
    );
  }

  // User cannot access Admin
  if (
    request.nextUrl.pathname.startsWith("/Admin") &&
    role !== "admin"
  ) {
    return NextResponse.redirect(
      new URL("/Dashboard", request.url)
    );
  }

  // Admin cannot access Dashboard (optional)
  if (
    request.nextUrl.pathname.startsWith("/Dashboard") &&
    role === "admin"
  ) {
    return NextResponse.redirect(
      new URL("/Admin", request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/Dashboard/:path*",
    "/Admin/:path*",
  ],
};