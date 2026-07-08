import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// Helper function to turn the secret string into a byte array for 'jose'
const getJwtSecretKey = () => {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is missing in environment variables");
  return new TextEncoder().encode(secret);
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password, name } = body;

    if (!email || !password) {
      return NextResponse.json({ message: "Email and password are required." }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "An account with this email already exists." }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // 1. Create the user in Neon
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword, name: name || null },
    });

    // 2. Generate an encrypted JWT Session Token
    const token = await new SignJWT({ userId: newUser.id, email: newUser.email })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("7d") // Token lasts 7 days
      .sign(getJwtSecretKey());

    // 3. Bake the token into a Secure HTTP-Only Cookie
    const response = NextResponse.json({
      message: "User registered and logged in successfully!",
      user: { id: newUser.id, email: newUser.email, name: newUser.name },
    }, { status: 201 });

    response.cookies.set({
      name: "utask_session",
      value: token,
      httpOnly: true, // Prevents cross-site scripting (XSS) attacks by blocking JavaScript access
      secure: process.env.NODE_ENV === "production", // Uses HTTPS in production
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days in seconds
    });

    return response;

  } catch (error: any) {
    console.error("❌ SIGNUP API ERROR:", error);
    return NextResponse.json({ message: "Internal server error during registration." }, { status: 500 });
  }
}