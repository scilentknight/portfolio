import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER || "scilentknight512@gmail.com";

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.log("--- MOCK CONTACT FORM SUBMISSION ---");
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Message: ${message}`);
      console.log("-----------------------------------");
      
      return NextResponse.json({
        success: true,
        message: "Mock contact form submitted successfully (SMTP not configured).",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort, 10),
      secure: parseInt(smtpPort, 10) === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name} via Portfolio" <${smtpUser}>`,
      to: receiver,
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
          <h2 style="color: #0ea5e9; margin-top: 0; border-bottom: 2px solid #f1f5f9; padding-bottom: 12px; font-weight: bold; letter-spacing: -0.5px;">New Portfolio Inquiry</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #475569; width: 100px;">Name:</td>
              <td style="padding: 10px 0; color: #0f172a;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Email:</td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #475569;">Subject:</td>
              <td style="padding: 10px 0; color: #0f172a;">${subject}</td>
            </tr>
          </table>
          
          <div style="background-color: #f8fafc; border-radius: 12px; padding: 20px; border-left: 4px solid #0ea5e9; margin-top: 20px;">
            <h4 style="margin-top: 0; color: #475569; font-weight: bold; margin-bottom: 8px;">Message:</h4>
            <p style="color: #334155; line-height: 1.6; white-space: pre-wrap; margin-bottom: 0; font-size: 14px;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; text-align: center; font-size: 11px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 15px;">
            This email was sent dynamically from your portfolio contact form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error: any) {
    console.error("Error in contact form submission:", error);
    return NextResponse.json(
      { error: "Internal Server Error. Please try again later." },
      { status: 500 }
    );
  }
}
