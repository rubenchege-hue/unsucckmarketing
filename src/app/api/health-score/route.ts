import { NextRequest, NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { healthScoreReportEmail } from "@/lib/email-templates";

export async function POST(req: NextRequest) {
  try {
    const { email, result } = await req.json();

    if (!email || !result) {
      return NextResponse.json(
        { error: "Missing required fields: email, result" },
        { status: 400 },
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const { subject, html } = healthScoreReportEmail(email, result);

    const resend = getResend();
    const { data, error } = await resend.emails.send({
      from: "Unsucck Marketing <reports@unsucckmarketing.com>",
      to: email,
      subject,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("Failed to send health score email:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Failed to send email" },
      { status: 500 },
    );
  }
}
