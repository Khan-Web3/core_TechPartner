// Core Tech Partner site file
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactBody = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
  company?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactBody;
    const name = body.name?.trim() ?? "";
    const email = body.email?.trim() ?? "";
    const service = body.service?.trim() ?? "";
    const message = body.message?.trim() ?? "";
    const company = body.company?.trim() ?? "";

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { ok: false, error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM || "noreply@coretechpartner.com";
    const to = process.env.CONTACT_TO || "info@coretechpartner.com";

    if (!host || !user || !pass) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { ok: false, error: "Email service is not configured." },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const subject = `New inquiry from ${name} · ${service}`;
    const text = [
      "New contact form submission",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      `Service: ${service}`,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    const html = `
      <div style="font-family:Arial,sans-serif;line-height:1.6;color:#12151a">
        <h2 style="margin:0 0 16px;color:#0d7c7e">New contact form submission</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
        <p><strong>Service:</strong> ${escapeHtml(service)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap;background:#f6f7f4;padding:14px;border-radius:8px">${escapeHtml(message)}</p>
      </div>
    `;

    await transporter.sendMail({
      from: `"Core Tech Partner" <${from}>`,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { ok: false, error: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
