import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { verifyChallenge, computeAnswer } from "@/lib/captcha";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message, captchaA, captchaOp, captchaB, captchaToken, captchaAnswer } = await req.json();
  const safeName    = escapeHtml(String(name    ?? ""));
  const safeEmail   = escapeHtml(String(email   ?? ""));
  const safePhone   = escapeHtml(String(phone   ?? ""));
  const safeService = escapeHtml(String(service ?? ""));
  const safeMessage = escapeHtml(String(message ?? ""));

  if (!name || !email) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const a   = parseInt(String(captchaA ?? ""), 10);
  const b   = parseInt(String(captchaB ?? ""), 10);
  const op  = String(captchaOp ?? "×");
  const ans = parseInt(String(captchaAnswer ?? ""), 10);
  const expectedAns = computeAnswer(a, op, b);
  if (
    !Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(ans) ||
    !verifyChallenge(a, op, b, captchaToken) ||
    expectedAns !== ans
  ) {
    return NextResponse.json({ error: "Captcha verification failed." }, { status: 400 });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: `"Unitaspro Website" <${process.env.GMAIL_USER}>`,
      to: "info@unitaspro.com",
      replyTo: email,
      subject: `New enquiry from ${safeName} — ${safeService || "General"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <div style="margin-bottom:20px;">
            <img src="https://unitaspro-website.netlify.app/unitaspro-logo.png" alt="Unitaspro" style="height:36px;width:auto;" />
          </div>
          <h2 style="margin:0 0 20px;font-size:20px;color:#0D0D1A;">New Contact Form Submission</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6B7180;width:140px;">Name</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#0D0D1A;">${safeName}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6B7180;">Email</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#0D0D1A;"><a href="mailto:${safeEmail}" style="color:#2563EB;">${safeEmail}</a></td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6B7180;">Phone</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#0D0D1A;">${safePhone || "Not provided"}</td></tr>
            <tr><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;color:#6B7180;">Service</td><td style="padding:10px 0;border-bottom:1px solid #f3f4f6;font-weight:600;color:#0D0D1A;">${safeService || "Not specified"}</td></tr>
            <tr><td style="padding:10px 0;color:#6B7180;vertical-align:top;">Message</td><td style="padding:10px 0;color:#0D0D1A;white-space:pre-wrap;">${safeMessage}</td></tr>
          </table>
          <p style="margin:24px 0 0;font-size:12px;color:#9CA3AF;">Sent from unitaspro.com contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
