import { EmailTemplate } from "../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { config } from "dotenv";

config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(sender: string, emails: string[], subject: string) {
  try {
    const data = await resend.emails.send({
      from: sender,
      to: emails,
      subject: subject,
      react: EmailTemplate({
        groupName: "the gorls",
        issueNumber: 1,
        date: "test",
      }),
    });

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
