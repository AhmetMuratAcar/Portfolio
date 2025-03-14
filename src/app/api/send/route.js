import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const myEmail = process.env.TO_EMAIL;

// Vercel test

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [myEmail, email],
      subject: subject,
      react: (
        <>
            <p>Thanks for contacting me! I will get back to you as soon as I can.</p>
            <p>Here is the message you sent:</p>
            <h1>{subject}</h1>
            <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
