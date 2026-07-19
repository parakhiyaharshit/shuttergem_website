import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name1, name2, email, phone, date, venue, package: selectedPackage, message } = body;

    // Check if configuration variables are set
    if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      console.warn("SMTP credentials are not set in environment variables. Check .env.local file.");
      return NextResponse.json(
        {
          success: false,
          error: "Email service is currently unconfigured. Please set SMTP credentials in .env.local.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true", // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name1} & ${name2 || 'Partner'}" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
      replyTo: email,
      subject: `New Wedding Booking Inquiry from ${name1}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #C5A059; padding: 25px; border-radius: 12px; background-color: #FDFBF7; color: #1E1712;">
          <h2 style="color: #1E1712; font-family: Georgia, serif; text-align: center; border-bottom: 2px solid #C5A059; padding-bottom: 12px; margin-bottom: 20px; font-weight: normal; letter-spacing: 2px;">SHUTTERGEM INQUIRY</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 6px 0; font-weight: bold; width: 150px; color: #C5A059;">Name:</td>
              <td style="padding: 6px 0; color: #1E1712;">${name1}</td>
            </tr>
            ${name2 ? `
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #C5A059;">Partner's Name:</td>
              <td style="padding: 6px 0; color: #1E1712;">${name2}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #C5A059;">Email:</td>
              <td style="padding: 6px 0;"><a href="mailto:${email}" style="color: #9E7D3F; text-decoration: none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #C5A059;">Phone:</td>
              <td style="padding: 6px 0;"><a href="tel:${phone}" style="color: #9E7D3F; text-decoration: none;">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #C5A059;">Event Date:</td>
              <td style="padding: 6px 0; color: #1E1712;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #C5A059;">Venue & City:</td>
              <td style="padding: 6px 0; color: #1E1712;">${venue}</td>
            </tr>
            <tr>
              <td style="padding: 6px 0; font-weight: bold; color: #C5A059;">Selected Package:</td>
              <td style="padding: 6px 0; color: #1E1712; text-transform: uppercase; font-size: 12px; font-weight: bold;">${selectedPackage}</td>
            </tr>
          </table>

          <div style="border-top: 1px solid #C5A059/20; padding-top: 20px;">
            <p style="font-weight: bold; color: #C5A059; margin-bottom: 8px;">Celebration Details:</p>
            <div style="background-color: #F7F3EB; padding: 18px; border-radius: 8px; border-left: 4px solid #C5A059; white-space: pre-wrap; font-style: italic; color: #4E463F; line-height: 1.8;">${message}</div>
          </div>

          <p style="font-size: 10px; color: #70665E; text-align: center; margin-top: 30px; border-top: 1px solid rgba(197, 160, 89, 0.15); padding-top: 15px; letter-spacing: 1px;">
            This email was generated automatically by the Shuttergem Booking Engine.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: error.message || "Internal server error" }, { status: 500 });
  }
}
