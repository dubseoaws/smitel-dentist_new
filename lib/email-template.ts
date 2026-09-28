import { SITE } from "@/lib/site-data";

export function esc(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function rows(items: [string, string | undefined][]) {
  return items
    .filter(([, value]) => Boolean(value))
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 0;color:#6d665e;font-size:13px;width:170px">${esc(
          label,
        )}</td><td style="padding:8px 0;color:#1b1815;font-size:14px">${esc(
          value!,
        )}</td></tr>`,
    )
    .join("");
}

export function table(items: [string, string | undefined][]) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${rows(
    items,
  )}</table>`;
}

export function shell(title: string, intro: string, body: string) {
  return `<!doctype html><html><body style="margin:0;background:#fbf9f6;font-family:Helvetica,Arial,sans-serif">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fbf9f6;padding:32px 16px">
    <tr><td align="center">
      <table role="presentation" width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e6e0d7">
        <tr><td style="background:#1b1815;padding:28px 32px">
          <p style="margin:0;color:#d7ab71;font-size:11px;letter-spacing:.22em;text-transform:uppercase">Smile Dentist</p>
          <h1 style="margin:10px 0 0;color:#fbf9f6;font-size:22px;font-weight:normal">${esc(title)}</h1>
        </td></tr>
        <tr><td style="padding:28px 32px">
          <p style="margin:0 0 20px;color:#6d665e;font-size:14px;line-height:1.7">${intro}</p>
          ${body}
        </td></tr>
        <tr><td style="padding:20px 32px;border-top:1px solid #e6e0d7;color:#6d665e;font-size:12px;line-height:1.7">
          Need to change your appointment? Call <a href="${SITE.phoneHref}" style="color:#9a6f3c">${esc(SITE.phone)}</a> or reply to this email.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;
}
