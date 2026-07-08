import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

// Helper function to turn your secret environment string into a byte array
const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is missing in environment variables");
  return new TextEncoder().encode(secret);
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Grab the session token cookie from the incoming request headers
  const sessionCookie = request.cookies.get("utask_session")?.value;

  // 2. Define our route rules
  const isAdminRoute = pathname.startsWith("/admin");
  const isAuthRoute = pathname === "/login" || pathname === "/signup";

  // CASE A: User is trying to access a protected dashboard without an active session
  if (isAdminRoute && !sessionCookie) {
    // Escort them back to the login page immediately
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // CASE B: User has a session token, let's verify if it's authentic
  if (sessionCookie) {
    try {
      // Decode and cryptographically verify the JWT using your secret key
      await jwtVerify(sessionCookie, getJwtSecretKey());
 
      if (isAuthRoute) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
    } catch (error) { 
      console.error("🛡️ Middleware Warning: Invalid session token detected.");
      
      // Clear the invalid cookie and kick them out to login if they were trying to access admin pages
      if (isAdminRoute) {
        const response = NextResponse.redirect(new URL("/login", request.url));
        response.cookies.delete("utask_session");
        return response;
      }
    }
  }
 
  return NextResponse.next();
}

 
export const config = {
  matcher: [
    "/admin/:path*", // Protects /admin, /admin/dashboard, and any sub-routes
    "/login",
    "/signup"
  ],
};