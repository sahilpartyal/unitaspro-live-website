import { createHmac } from "crypto";

const SECRET = process.env.CAPTCHA_SECRET;
if (!SECRET) throw new Error("CAPTCHA_SECRET env var is not set");

// 5-minute time windows — tokens expire naturally without server-side state
const WINDOW_MS = 5 * 60 * 1000;
function timeWindow(): number {
  return Math.floor(Date.now() / WINDOW_MS);
}

function hmac(a: number, op: string, b: number, w: number): string {
  return createHmac("sha256", SECRET!).update(`${a}:${op}:${b}:${w}`).digest("hex");
}

export function signChallenge(a: number, op: string, b: number): string {
  return hmac(a, op, b, timeWindow());
}

// Accepts current window and previous window to handle boundary submissions
export function verifyChallenge(a: number, op: string, b: number, token: string): boolean {
  const w = timeWindow();
  return token === hmac(a, op, b, w) || token === hmac(a, op, b, w - 1);
}

export function computeAnswer(a: number, op: string, b: number): number {
  switch (op) {
    case "+": return a + b;
    case "-": return a - b;
    case "×": return a * b;
    case "÷": return a / b;
    default:  return a * b;
  }
}
