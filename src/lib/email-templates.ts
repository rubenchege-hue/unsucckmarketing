interface EmailResult {
  percentage: number;
  label: string;
  description: string;
  breakdown: { category: string; score: number; maxScore: number; percentage: number }[];
  totalScore: number;
  maxScore: number;
}

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  website: string;
  message: string;
}

const levelColors: Record<string, string> = {
  critical: "#ec4899",
  warning: "#f59e0b",
  good: "#eab308",
  excellent: "#22c55e",
};

export function contactFormAutoReplyEmail(data: ContactFormData): { subject: string; html: string } {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin:0;padding:0;background:#050505;font-family:Inter,-apple-system,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;">
        <tr>
          <td align="center" style="padding:40px 20px;">
            <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
              <!-- Logo -->
              <tr>
                <td align="center" style="padding-bottom:30px;">
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#00f0ff,#a855f7);text-align:center;vertical-align:middle;">
                        <span style="color:#050505;font-weight:bold;font-size:14px;line-height:32px;">U</span>
                      </td>
                      <td style="padding-left:10px;">
                        <span style="color:#f0f0f5;font-weight:bold;font-size:16px;">Unsucck Marketing</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Card -->
              <tr>
                <td style="background:#0a0a0f;border:1px solid #1a1a2e;border-radius:16px;padding:40px;">
                  <!-- Heading -->
                  <h1 style="margin:0 0 8px 0;color:#f0f0f5;font-size:24px;font-weight:700;text-align:center;">
                    We Got Your Message! 🎉
                  </h1>
                  <p style="margin:0 0 30px 0;color:#555570;font-size:14px;text-align:center;font-family:monospace;">
                    Thanks for reaching out, ${data.name}
                  </p>

                  <!-- Divider -->
                  <div style="height:1px;background:linear-gradient(90deg,transparent,#a855f7,transparent);opacity:0.2;margin:30px 0;"></div>

                  <!-- Message -->
                  <p style="margin:0 0 20px 0;color:#8888a0;font-size:15px;line-height:1.7;">
                    Hi ${data.name},
                  </p>
                  <p style="margin:0 0 20px 0;color:#8888a0;font-size:15px;line-height:1.7;">
                    Thanks for filling in the form and expressing interest in our marketing audit services! 
                    We've received your message and will review it shortly.
                  </p>
                  <p style="margin:0 0 20px 0;color:#8888a0;font-size:15px;line-height:1.7;">
                    Here's what happens next:
                  </p>

                  <!-- Steps -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                    <tr>
                      <td style="width:36px;vertical-align:top;padding:6px 0;">
                        <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#00f0ff,#a855f7);color:#050505;font-weight:bold;font-size:12px;line-height:24px;text-align:center;">1</span>
                      </td>
                      <td style="padding:6px 0;">
                        <p style="margin:0;color:#f0f0f5;font-size:14px;font-weight:600;">We Review Your Details</p>
                        <p style="margin:2px 0 0 0;color:#8888a0;font-size:13px;">One of our team members will look over your information within 24 hours.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:36px;vertical-align:top;padding:6px 0;">
                        <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#a855f7,#ec4899);color:#050505;font-weight:bold;font-size:12px;line-height:24px;text-align:center;">2</span>
                      </td>
                      <td style="padding:6px 0;">
                        <p style="margin:0;color:#f0f0f5;font-size:14px;font-weight:600;">We Reach Out</p>
                        <p style="margin:2px 0 0 0;color:#8888a0;font-size:13px;">You'll hear from us via email or phone to schedule your free discovery call.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="width:36px;vertical-align:top;padding:6px 0;">
                        <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#ec4899,#22d3ee);color:#050505;font-weight:bold;font-size:12px;line-height:24px;text-align:center;">3</span>
                      </td>
                      <td style="padding:6px 0;">
                        <p style="margin:0;color:#f0f0f5;font-size:14px;font-weight:600;">We Find the Leaks</p>
                        <p style="margin:2px 0 0 0;color:#8888a0;font-size:13px;">Together, we'll identify what's costing you money and build a roadmap to fix it.</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Divider -->
                  <div style="height:1px;background:linear-gradient(90deg,transparent,#a855f7,transparent);opacity:0.2;margin:30px 0;"></div>

                  <!-- Urgent CTA -->
                  <p style="margin:0 0 8px 0;color:#8888a0;font-size:14px;text-align:center;">
                    In a hurry? Give us a call or WhatsApp us directly:
                  </p>
                  <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                    <tr>
                      <td align="center" style="background:linear-gradient(135deg,#00f0ff,#a855f7);border-radius:8px;padding:12px 32px;">
                        <a href="tel:+254726241286" style="color:#050505;font-weight:600;font-size:14px;text-decoration:none;letter-spacing:0.05em;text-transform:uppercase;">
                          +254 726 241 286
                        </a>
                      </td>
                    </tr>
                  </table>

                  <p style="margin:16px 0 0 0;color:#8888a0;font-size:14px;text-align:center;">
                    Or send a message on <a href="https://wa.me/254726241286" style="color:#25D366;text-decoration:underline;">WhatsApp</a>
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding-top:30px;">
                  <p style="margin:0;color:#555570;font-size:12px;font-family:monospace;">
                    Unsucck Marketing · Nairobi, Kenya
                  </p>
                  <p style="margin:4px 0 0 0;color:#555570;font-size:12px;font-family:monospace;">
                    <a href="mailto:ainworkflows@gmail.com" style="color:#a855f7;text-decoration:none;">ainworkflows@gmail.com</a>
                    · <a href="tel:+254726241286" style="color:#00f0ff;text-decoration:none;">+254 726 241 286</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return {
    subject: `We received your message, ${data.name}! 👋`,
    html,
  };
}

export function contactFormNotificationEmail(data: ContactFormData): { subject: string; html: string } {
  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin:0;padding:0;background:#050505;font-family:Inter,-apple-system,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;">
        <tr>
          <td align="center" style="padding:40px 20px;">
            <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
              <!-- Logo -->
              <tr>
                <td align="center" style="padding-bottom:30px;">
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#00f0ff,#a855f7);text-align:center;vertical-align:middle;">
                        <span style="color:#050505;font-weight:bold;font-size:14px;line-height:32px;">U</span>
                      </td>
                      <td style="padding-left:10px;">
                        <span style="color:#f0f0f5;font-weight:bold;font-size:16px;">Unsucck Marketing</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Card -->
              <tr>
                <td style="background:#0a0a0f;border:1px solid #1a1a2e;border-radius:16px;padding:40px;">
                  <!-- Heading -->
                  <h1 style="margin:0 0 8px 0;color:#f0f0f5;font-size:24px;font-weight:700;text-align:center;">
                    🎯 New Contact Form Submission
                  </h1>
                  <p style="margin:0 0 30px 0;color:#555570;font-size:14px;text-align:center;font-family:monospace;">
                    Someone wants to book a free audit
                  </p>

                  <!-- Divider -->
                  <div style="height:1px;background:linear-gradient(90deg,transparent,#a855f7,transparent);opacity:0.2;margin:30px 0;"></div>

                  <!-- Details -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding:8px 0;color:#555570;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid #1a1a2e;">Name</td>
                      <td style="padding:8px 0;color:#f0f0f5;font-size:14px;text-align:right;border-bottom:1px solid #1a1a2e;">${data.name}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;color:#555570;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid #1a1a2e;">Email</td>
                      <td style="padding:8px 0;font-size:14px;text-align:right;border-bottom:1px solid #1a1a2e;">
                        <a href="mailto:${data.email}" style="color:#00f0ff;text-decoration:none;">${data.email}</a>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;color:#555570;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid #1a1a2e;">Company</td>
                      <td style="padding:8px 0;color:#f0f0f5;font-size:14px;text-align:right;border-bottom:1px solid #1a1a2e;">${data.company}</td>
                    </tr>
                    <tr>
                      <td style="padding:8px 0;color:#555570;font-size:12px;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;border-bottom:1px solid #1a1a2e;">Website</td>
                      <td style="padding:8px 0;font-size:14px;text-align:right;border-bottom:1px solid #1a1a2e;">
                        <a href="${data.website}" style="color:#00f0ff;text-decoration:none;">${data.website}</a>
                      </td>
                    </tr>
                  </table>

                  <!-- Message -->
                  <div style="margin-top:24px;padding:16px;background:#111118;border-radius:8px;border:1px solid #1a1a2e;">
                    <p style="margin:0 0 8px 0;color:#555570;font-size:11px;font-family:monospace;text-transform:uppercase;letter-spacing:0.1em;">Message</p>
                    <p style="margin:0;color:#f0f0f5;font-size:14px;line-height:1.6;">${data.message}</p>
                  </div>

                  <!-- Divider -->
                  <div style="height:1px;background:linear-gradient(90deg,transparent,#a855f7,transparent);opacity:0.2;margin:30px 0;"></div>

                  <!-- CTA -->
                  <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                    <tr>
                      <td align="center" style="background:linear-gradient(135deg,#00f0ff,#a855f7);border-radius:8px;padding:12px 32px;">
                        <a href="mailto:${data.email}" style="color:#050505;font-weight:600;font-size:14px;text-decoration:none;letter-spacing:0.05em;text-transform:uppercase;">
                          Reply to ${data.name}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding-top:30px;">
                  <p style="margin:0;color:#555570;font-size:12px;font-family:monospace;">
                    Unsucck Marketing · Nairobi, Kenya
                  </p>
                  <p style="margin:4px 0 0 0;color:#555570;font-size:12px;font-family:monospace;">
                    <a href="mailto:ainworkflows@gmail.com" style="color:#a855f7;text-decoration:none;">ainworkflows@gmail.com</a>
                    · <a href="tel:+254726241286" style="color:#00f0ff;text-decoration:none;">+254 726 241 286</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return {
    subject: `New lead: ${data.name} from ${data.company}`,
    html,
  };
}

export function healthScoreReportEmail(email: string, result: EmailResult): { subject: string; html: string } {
  const color = levelColors[result.percentage >= 80 ? "excellent" : result.percentage >= 60 ? "good" : result.percentage >= 40 ? "warning" : "critical"];

  const breakdownRows = result.breakdown
    .map(
      (b) => `
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #1a1a2e;color:#8888a0;font-size:14px;">${b.category}</td>
          <td style="padding:10px 0;border-bottom:1px solid #1a1a2e;text-align:right;">
            <span style="color:#00f0ff;font-family:monospace;font-size:14px;">${b.score}/${b.maxScore}</span>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="padding:0 0 10px 0;">
            <div style="height:6px;background:#0a0a0f;border-radius:3px;overflow:hidden;">
              <div style="height:100%;width:${b.percentage}%;background:linear-gradient(90deg,#00f0ff,#a855f7);border-radius:3px;"></div>
            </div>
          </td>
        </tr>
      `,
    )
    .join("");

  const html = `
    <!DOCTYPE html>
    <html>
    <head><meta charset="utf-8"></head>
    <body style="margin:0;padding:0;background:#050505;font-family:Inter,-apple-system,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#050505;">
        <tr>
          <td align="center" style="padding:40px 20px;">
            <table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;width:100%;">
              <!-- Logo -->
              <tr>
                <td align="center" style="padding-bottom:30px;">
                  <table cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="width:32px;height:32px;border-radius:50%;background:linear-gradient(135deg,#00f0ff,#a855f7);text-align:center;vertical-align:middle;">
                        <span style="color:#050505;font-weight:bold;font-size:14px;line-height:32px;">U</span>
                      </td>
                      <td style="padding-left:10px;">
                        <span style="color:#f0f0f5;font-weight:bold;font-size:16px;">Unsucck Marketing</span>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Card -->
              <tr>
                <td style="background:#0a0a0f;border:1px solid #1a1a2e;border-radius:16px;padding:40px;">
                  <!-- Heading -->
                  <h1 style="margin:0 0 8px 0;color:#f0f0f5;font-size:24px;font-weight:700;text-align:center;">
                    Your Marketing Health Score
                  </h1>
                  <p style="margin:0 0 30px 0;color:#555570;font-size:14px;text-align:center;font-family:monospace;">
                    Here's your personalized report
                  </p>

                  <!-- Score -->
                  <div style="text-align:center;margin-bottom:30px;">
                    <div style="display:inline-block;width:120px;height:120px;border-radius:50%;border:4px solid ${color};display:flex;align-items:center;justify-content:center;margin:0 auto 16px auto;">
                      <div style="text-align:center;">
                        <span style="font-size:36px;font-weight:bold;color:${color};display:block;line-height:1;">${result.percentage}%</span>
                        <span style="font-size:11px;color:#555570;font-family:monospace;">${result.totalScore}/${result.maxScore}</span>
                      </div>
                    </div>
                    <h2 style="margin:0 0 8px 0;color:#f0f0f5;font-size:20px;font-weight:600;">${result.label}</h2>
                    <p style="margin:0;color:#8888a0;font-size:14px;line-height:1.6;">${result.description}</p>
                  </div>

                  <!-- Divider -->
                  <div style="height:1px;background:linear-gradient(90deg,transparent,#a855f7,transparent);opacity:0.2;margin:30px 0;"></div>

                  <!-- Breakdown -->
                  <h3 style="margin:0 0 20px 0;color:#a855f7;font-size:12px;font-family:monospace;letter-spacing:0.1em;text-transform:uppercase;">
                    Category Breakdown
                  </h3>
                  <table width="100%" cellpadding="0" cellspacing="0">
                    ${breakdownRows}
                  </table>

                  <!-- Divider -->
                  <div style="height:1px;background:linear-gradient(90deg,transparent,#a855f7,transparent);opacity:0.2;margin:30px 0;"></div>

                  <!-- CTA -->
                  <p style="margin:0 0 20px 0;color:#8888a0;font-size:14px;line-height:1.6;text-align:center;">
                    Want to dive deeper? Book a free discovery call and we'll review your marketing together.
                  </p>
                  <table cellpadding="0" cellspacing="0" style="margin:0 auto;">
                    <tr>
                      <td align="center" style="background:linear-gradient(135deg,#00f0ff,#a855f7);border-radius:8px;padding:12px 32px;">
                        <a href="https://unsucckmarketing.com/contact" style="color:#050505;font-weight:600;font-size:14px;text-decoration:none;letter-spacing:0.05em;text-transform:uppercase;">
                          Book Your Free Call
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td align="center" style="padding-top:30px;">
                  <p style="margin:0;color:#555570;font-size:12px;font-family:monospace;">
                    Unsucck Marketing · Nairobi, Kenya
                  </p>
                  <p style="margin:4px 0 0 0;color:#555570;font-size:12px;font-family:monospace;">
                    <a href="mailto:ainworkflows@gmail.com" style="color:#a855f7;text-decoration:none;">ainworkflows@gmail.com</a>
                    · <a href="tel:+254726241286" style="color:#00f0ff;text-decoration:none;">+254 726 241 286</a>
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return {
    subject: `Your Marketing Health Score: ${result.percentage}% — ${result.label}`,
    html,
  };
}
