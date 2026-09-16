import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function Proxy(request: NextRequest) {
console.log("middleware is running...");
return NextResponse.next();
}

export const config = {
    matcher: ["/about", "/Register", "/Dashboard/:path*"]
}

export function middleware(request: NextRequest) {
const role = request.cookies.get("role")?.value;
const auth = request.cookies.get("auth")?.value;
if(request.nextUrl.pathname.startsWith("/Dashboard") && !auth) {
    return NextResponse.redirect(new URL("/Register", request.url));
}
if(request.nextUrl.pathname.startsWith("/Admin") && role !== "Admin") {
    return NextResponse.redirect(new URL("/Admin", request.url));
}
return NextResponse.next();
}