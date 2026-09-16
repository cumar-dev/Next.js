import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
    const auth = request.cookies.get("auth")?.value;
    const role = request.cookies.get("role")?.value;
    if(request.nextUrl.pathname.startsWith("/Dashboard") && auth !== "true") {
      return NextResponse.redirect(new URL("/Register", request.url));
    }
    if(request.nextUrl.pathname.startsWith("/Dashboard") && role !== "user") {
        return NextResponse.redirect(new URL("/Register", request.url));
    }
    if(request.nextUrl.pathname.startsWith("/Admin") && role !== "admin") {
        return NextResponse.redirect(new URL("/anAuthorized", request.url));
    }
    return NextResponse.next();
}