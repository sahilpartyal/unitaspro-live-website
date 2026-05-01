import { NextResponse } from "next/server";
import { signChallenge } from "@/lib/captcha";

export async function GET() {
  const a = Math.floor(Math.random() * 9) + 1;
  const b = Math.floor(Math.random() * 9) + 1;
  const token = signChallenge(a, b);
  return NextResponse.json({ a, b, token });
}
