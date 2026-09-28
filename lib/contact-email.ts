import { esc, shell, table } from "@/lib/email-template";

export type ContactEmailPayload = {
  name: string;
  email: string;
  phone?: string;
  clinic?: string;
  subject?: string;
  message: string;
};

function paragraphs(message: string) {
  return message
    .split(/\n{2,}/)
    .map(
      (block) =>
        `<p style="margin:0 0 14px;color:#1b1815;font-size:14px;line-height:1.75">${esc(
          block,
        ).replace(/\n/g, "<br />")}</p>`,
    )
    .join("");
}

export function enquiryEmail(data: ContactEmailPayload) {
  const details = table([
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone],
    ["Preferred clinic", data.clinic],
    ["Subject", data.subject],
  ]);

  return {
    subject: `Website enquiry — ${data.name}${data.subject ? ` — ${data.subject}` : ""}`,
    html: shell(
      "New Website Enquiry",
      "Someone has sent a message through the contact form.",
      `${details}<div style="margin-top:24px;border-top:1px solid #e6e0d7;padding-top:20px">
        <p style="margin:0 0 10px;color:#9a6f3c;font-size:11px;letter-spacing:.18em;text-transform:uppercase">Message</p>
        ${paragraphs(data.message)}
      </div>`,
    ),
  };
}

export function enquiryReceiptEmail(data: ContactEmailPayload) {
  return {
    subject: "We've received your message — Smile Dentist",
    html: shell(
      "Thanks For Getting In Touch",
      `Hi ${esc(data.name)}, thanks for contacting Smile Dentist. A member of the team will reply as soon as possible.`,
      `<div style="border-top:1px solid #e6e0d7;padding-top:20px">
        <p style="margin:0 0 10px;color:#9a6f3c;font-size:11px;letter-spacing:.18em;text-transform:uppercase">Your message</p>
        ${paragraphs(data.message)}
      </div>`,
    ),
  };
}
