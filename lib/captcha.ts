import { createHmac } from "crypto";

const SECRET = process.env.CAPTCHA_SECRET ?? "unitaspro-captcha-default-secret";

export function signChallenge(a: number, op: string, b: number): string {
  return createHmac("sha256", SECRET).update(`${a}:${op}:${b}`).digest("hex");
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
