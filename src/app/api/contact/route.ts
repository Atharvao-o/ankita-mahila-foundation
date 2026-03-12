import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`, // From must be a verified sender for many SMTP providers
      to: process.env.CONTACT_EMAIL_TO || 'support@ankitamahilafoundation.com',
      replyTo: email,
      subject: `New Feedback: ${subject}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #c026d3;">New Feedback Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId);

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error('Nodemailer error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
