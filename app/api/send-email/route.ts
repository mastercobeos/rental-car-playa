import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, phone, pickupLocation, vehicleType, pickupDate, returnDate, pickupTime } = body

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #16a34a; color: white; padding: 20px; border-radius: 12px 12px 0 0; text-align: center;">
          <h1 style="margin: 0; font-size: 24px;">New Reservation Request</h1>
          <p style="margin: 5px 0 0; opacity: 0.9;">Car Rental Playa</p>
        </div>
        <div style="border: 1px solid #e5e7eb; border-top: none; padding: 24px; border-radius: 0 0 12px 12px;">
          <h2 style="color: #16a34a; font-size: 18px; margin-top: 0;">Customer Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Name:</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Email:</td><td style="padding: 8px 0; font-weight: bold;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Phone:</td><td style="padding: 8px 0; font-weight: bold;">${phone}</td></tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
          <h2 style="color: #16a34a; font-size: 18px;">Reservation Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Pickup Location:</td><td style="padding: 8px 0; font-weight: bold;">${pickupLocation}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Vehicle Type:</td><td style="padding: 8px 0; font-weight: bold;">${vehicleType}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Pickup Date:</td><td style="padding: 8px 0; font-weight: bold;">${pickupDate}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Return Date:</td><td style="padding: 8px 0; font-weight: bold;">${returnDate}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Pickup Time:</td><td style="padding: 8px 0; font-weight: bold;">${pickupTime}</td></tr>
          </table>
        </div>
      </div>
    `

    const recipientEmail = process.env.RECIPIENT_EMAIL || "carrentalplaya@gmail.com"

    await transporter.sendMail({
      from: `"Car Rental Playa" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email || undefined,
      subject: `New Reservation - ${name} | ${vehicleType} | ${pickupDate}`,
      html: htmlContent,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 })
  }
}
