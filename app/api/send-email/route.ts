// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// type EmailPayload = {
//   name: string;
//   email: string;
//   contact: string;
//   city: string;
//   position: string;
//   message: string;
//   resumeUrl: string | null;
// };

// export async function POST(req: Request) {
//   try {
//     const {
//       name,
//       email,
//       contact,
//       city,
//       position,
//       message,
//       resumeUrl,
//     }: EmailPayload = await req.json();

//     /* ---------------- HR EMAIL ---------------- */
//     await resend.emails.send({
//       from: process.env.EMAIL_FROM!,
//       to: process.env.EMAIL_TO!,
//       subject: `New Career Application – ${position}`,
//       html: `
//         <h2>New Career Application</h2>
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Contact:</strong> ${contact}</p>
//         <p><strong>City:</strong> ${city}</p>
//         <p><strong>Position:</strong> ${position}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//         ${
//           resumeUrl
//             ? `<p><a href="${resumeUrl}" target="_blank">Download Resume</a></p>`
//             : `<p>No resume uploaded</p>`
//         }
//       `,
//     });

//     /* ---------------- USER CONFIRMATION EMAIL ---------------- */
//     await resend.emails.send({
//       from: process.env.EMAIL_FROM!,
//       to: email,
//       subject: "Application Received – Ramki Technologies",
//       html: `
//         <p>Hi <strong>${name}</strong>,</p>
//         <p>
//           Thank you for applying for the position of 
//           <strong>${position}</strong> at Ramki Technologies.
//         </p>
//         <p>
//           Our HR team has received your application and will contact you
//           if your profile matches our requirements.
//         </p>
//         <p>
//           Regards,<br />
//           <strong>Ramki Technologies</strong>
//         </p>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email error:", error);

//     return NextResponse.json(
//       { success: false, error: "Email failed" },
//       { status: 500 }
//     );
//   }
// }

//test working fine//

// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY!);

// export async function POST(req: Request) {
//   try {
//     const data = await req.json();

//     const isCareer = Boolean(data.position);

//     /* ---------------- HR EMAIL ---------------- */
//     await resend.emails.send({
//       from: process.env.EMAIL_FROM!,
//       to: process.env.EMAIL_TO!,
//       replyTo: data.email,
//       subject: isCareer
//         ? `New Career Application – ${data.position}`
//         : `New Contact Message – ${data.subject}`,
//       html: `
//         <h2>${isCareer ? "Career Application" : "Contact Message"}</h2>
//         <p><strong>Name:</strong> ${data.name}</p>
//         <p><strong>Email:</strong> ${data.email}</p>
//         ${data.contact ? `<p><strong>Contact:</strong> ${data.contact}</p>` : ""}
//         ${data.city ? `<p><strong>City:</strong> ${data.city}</p>` : ""}
//         ${data.position ? `<p><strong>Position:</strong> ${data.position}</p>` : ""}
//         ${data.subject ? `<p><strong>Subject:</strong> ${data.subject}</p>` : ""}
//         <p><strong>Message:</strong></p>
//         <p>${data.message}</p>
//         ${
//           data.resumeUrl
//             ? `<p><a href="${data.resumeUrl}" target="_blank">Download Resume</a></p>`
//             : ""
//         }
//       `,
//     });

//     /* ---------------- USER CONFIRMATION ---------------- */
//     await resend.emails.send({
//       from: process.env.EMAIL_FROM!,
//       to: data.email,
//       subject: "Message Received – Ramki Technologies",
//       html: `
//         <p>Hi <strong>${data.name}</strong>,</p>
//         <p>Thank you for contacting Ramki Technologies.</p>
//         <p>We have received your message and will get back to you shortly.</p>
//         <p>Regards,<br/><strong>Ramki Technologies</strong></p>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Email error:", error);
//     return NextResponse.json(
//       { success: false, error: "Email failed" },
//       { status: 500 }
//     );
//   }
// }



import { NextResponse } from "next/server";
import { Resend } from "resend";

/* ---------------- ENV SAFETY ---------------- */
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;
const EMAIL_TO = process.env.EMAIL_TO;

/**
 * IMPORTANT:
 * Do NOT create Resend instance at top-level without key
 * This avoids build-time crash
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
      html: isCareerForm
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
      html: isCareerForm
        ? `
          <p>Hi <strong>${name}</strong>,</p>
          <p>
            Your application for <strong>${position}</strong>
            has been submitted successfully.
          </p>
          <p>
            Our HR team will review your profile and contact you if shortlisted.
          </p>
          <br />
          <p>Regards,<br /><strong>Ramki Technologies</strong></p>
        `
        : `
          <p>Hi <strong>${name}</strong>,</p>
          <p>
            Thank you for contacting Ramki Technologies.
            We have received your message and will get back to you shortly.
          </p>
          <br />
          <p>Regards,<br /><strong>Ramki Technologies</strong></p>
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

