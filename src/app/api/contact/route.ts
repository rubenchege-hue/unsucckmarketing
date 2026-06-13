import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import {
  contactFormNotificationEmail,
  contactFormAutoReplyEmail,
} from "@/lib/email-templates";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, website, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 },
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const formData = {
      name,
      email,
      company: company || "Not provided",
      website: website || "Not provided",
      message,
    };

    const resend = getResend();

    // Send notification to business owner
    const notification = contactFormNotificationEmail(formData);
    const { error: notifyError } = await resend.emails.send({
      from: "Unsucck Marketing <reports@unsucckmarketing.com>",
      to: "ainworkflows@gmail.com",
      subject: notification.subject,
      html: notification.html,
    });

    if (notifyError) {
      console.error("Resend notification error:", notifyError);
      return NextResponse.json(
        { error: notifyError.message },
        { status: 500 },
      );
    }

    // Send auto-reply to the person who submitted the form
    const autoReply = contactFormAutoReplyEmail(formData);
    const { error: replyError } = await resend.emails.send({
      from: "Unsucck Marketing <reports@unsucckmarketing.com>",
      to: email,
      subject: autoReply.subject,
      html: autoReply.html,
    });

    if (replyError) {
      // Log but don't fail — the main notification went through
      console.error("Resend auto-reply error:", replyError);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact notification:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send notification" },
      { status: 500 },
    );
  }
}
