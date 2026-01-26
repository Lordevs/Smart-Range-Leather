import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_EMAIL ||
      !process.env.SENDER_EMAIL
    ) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const body: ContactFormData = await request.json();

    // Validate required fields
    if (
      !body.firstName ||
      !body.lastName ||
      !body.email ||
      !body.phone ||
      !body.company ||
      !body.message
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Send email to company
    const companyEmailResponse = await resend.emails.send({
      from: `Contact Form <${process.env.SENDER_EMAIL}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `New Contact Form Submission from ${body.firstName} ${body.lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A1A1A; border-bottom: 2px solid #B8641A; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0; line-height: 1.6;">
            <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
            ${body.company ? `<p><strong>Company:</strong> ${body.company}</p>` : ""}
            ${body.website ? `<p><strong>Website:</strong> <a href="${body.website}" target="_blank">${body.website}</a></p>` : ""}
            
            <div style="margin-top: 20px; padding: 15px; background-color: #fdfbf8; border-left: 4px solid #B8641A;">
              <strong>Brief Description of your Interest:</strong>
              <p style="margin-top: 10px; white-space: pre-wrap;">${body.message}</p>
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This email was sent from the Smart Range Leather contact form.</p>
          </div>
        </div>
      `,
    });

    if (companyEmailResponse.error) {
      console.error("Resend error:", companyEmailResponse.error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 },
      );
    }

    // Send confirmation email to customer
    await resend.emails.send({
      from: "Smart Range Leather <onboarding@resend.dev>", // Replace with your verified sender email
      to: body.email,
      subject: "We received your message - Smart Range Leather",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A1A1A;">Thank You for Contacting Us</h2>
          
          <p style="margin-top: 20px; line-height: 1.6;">
            Dear ${body.firstName},<br><br>
            We have received your message and appreciate you taking the time to contact Smart Range Leather. 
            Our team will review your inquiry and get back to you as soon as possible.
          </p>
          
          <div style="margin: 30px 0; padding: 15px; background-color: #fdfbf8; border-left: 4px solid #B8641A;">
            <p><strong>Brief Description of your Interest:</strong></p>
            <p style="white-space: pre-wrap;">${body.message}</p>
          </div>
          
          <div style="margin-top: 30px;">
            <p>Best regards,<br>
            <strong>Smart Range Leather Team</strong></p>
            <p style="color: #666; font-size: 12px;">
              Business Bay Dubai, UAE | Dagenham, UK | Texas, USA<br>
              Email: info@smartrangeleather.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Email sent successfully",
        id: companyEmailResponse.data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
