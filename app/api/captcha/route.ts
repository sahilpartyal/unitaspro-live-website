import { NextResponse } from "next/server";
import { signChallenge } from "@/lib/captcha";

const OPS = ["+", "-", "×", "÷"] as const;

export async function GET() {
  const op = OPS[Math.floor(Math.random() * OPS.length)];
  let a: number, b: number;

  switch (op) {
    case "+":
      a = Math.floor(Math.random() * 9) + 1;
      b = Math.floor(Math.random() * 9) + 1;
      break;
    case "-":
      a = Math.floor(Math.random() * 8) + 2; // 2–9
      b = Math.floor(Math.random() * (a - 1)) + 1; // 1 to a-1 (always positive result)
      break;
    case "×":
      a = Math.floor(Math.random() * 5) + 1; // 1–5
      b = Math.floor(Math.random() * 5) + 1;
      break;
    case "÷":
      b = Math.floor(Math.random() * 4) + 2; // divisor 2–5
      a = b * (Math.floor(Math.random() * 4) + 1); // ensures clean division
      break;
    default:
      a = Math.floor(Math.random() * 9) + 1;
      b = Math.floor(Math.random() * 9) + 1;
  }

  const token = signChallenge(a, op, b);
  return NextResponse.json({ a, op, b, token });
}
