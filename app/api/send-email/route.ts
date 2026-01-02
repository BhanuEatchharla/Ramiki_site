import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ---------------- ENV SAFETY ---------------- */
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

/* 🔵 PUBLIC EMAIL BANNER */
const BANNER_URL =
  "https://btyhapkfcpymttgjqvom.supabase.co/storage/v1/object/public/email-assets/banner.jpeg";

/**
 * IMPORTANT:
 * Do NOT create Resend instance at top-level
 */
function getResendClient() {
  if (!RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is missing");
  }
  return new Resend(RESEND_API_KEY);
}

/* ---------------- POST HANDLER ---------------- */
export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      name,
      email,
      subject,
      message,
      contact,
      city,
      position,
      resumeUrl,
    } = data;

    const isCareerForm = Boolean(position);

    if (!EMAIL_FROM || !EMAIL_TO) {
      throw new Error("EMAIL_FROM or EMAIL_TO is missing");
    }

    const resend = getResendClient();

    /* ======================================================
       1️⃣ HR EMAIL
    ====================================================== */
    await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      subject: isCareerForm
        ? `New Career Application – ${position}`
        : `New Contact Message – ${subject || "Website Inquiry"}`,
      html: `
        <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;">
          
          <img src="${BANNER_URL}" alt="Ramki Technologies"
               style="width:100%;border-radius:6px;display:block;" />

          <div style="padding:20px;">
            ${
              isCareerForm
                ? `
                <h2>New Career Application</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact:</strong> ${contact}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Position:</strong> ${position}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                ${
                  resumeUrl
                    ? `<p><a href="${resumeUrl}" target="_blank">Download Resume</a></p>`
                    : `<p>No resume uploaded</p>`
                }
              `
                : `
                <h2>New Contact Message</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
              `
            }
          </div>
        </div>
      `,
    });

    /* ======================================================
       2️⃣ USER CONFIRMATION EMAIL
    ====================================================== */
    await resend.emails.send({
      from: EMAIL_FROM,
      to: email,
      subject: isCareerForm
        ? "Application Submitted – Ramki Technologies"
        : "Message Received – Ramki Technologies",
      html: `
        <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;">
          
          <img src="${BANNER_URL}" alt="Ramki Technologies"
               style="width:100%;border-radius:6px;display:block;" />

          <div style="padding:20px;">
            ${
              isCareerForm
                ? `
                <p>Hi <strong>${name}</strong>,</p>
                <p>
                  Your application for <strong>${position}</strong>
                  has been submitted successfully.
                </p>
                <p>
                  Our HR team will review your profile and contact you if shortlisted.
                </p>
                `
                : `
                <p>Hi <strong>${name}</strong>,</p>
                <p>
                  Thank you for contacting Ramki Technologies.
                  We have received your message and will get back to you shortly.
                </p>
                `
            }
            <br />
            <p>
              Regards,<br />
              <strong>Ramki Technologies</strong>
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Send email error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Email sending failed",
      },
      { status: 500 }
    );
  }
}
