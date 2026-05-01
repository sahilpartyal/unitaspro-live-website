import { createHmac } from "crypto";

const SECRET = process.env.CAPTCHA_SECRET ?? "unitaspro-captcha-default-secret";

export function signChallenge(a: number, b: number): string {
  return createHmac("sha256", SECRET).update(`${a}:${b}`).digest("hex");
}
