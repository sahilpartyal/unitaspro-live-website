import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  const { name, email, phone, service, message } = await req.json();
  const safeName    = escapeHtml(String(name    ?? ""));
  const safeEmail   = escapeHtml(String(email   ?? ""));
  const safePhone   = escapeHtml(String(phone   ?? ""));
  const safeService = escapeHtml(String(service ?? ""));
  const safeMessage = escapeHtml(String(message ?? ""));

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
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
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New enquiry from ${safeName} — ${safeService || "General"}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
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

    console.log("Email sent:", info.messageId);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }
}
