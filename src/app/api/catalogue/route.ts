import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface CatalogueFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  website?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.CONTACT_EMAIL ||
      !process.env.SENDER_EMAIL ||
      !process.env.CATALOGUE_DRIVE_LINK
    ) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const formData = await request.formData();
    const body = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      company: formData.get("company") as string,
      website: formData.get("website") as string,
      message: formData.get("message") as string,
    };
    const file = formData.get("file") as File | null;

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

    // 1. Subscribe user to 'General' Segment using Resend
    try {
      const { data: segments } = await resend.segments.list();
      let generalSegment = Array.isArray(segments)
        ? (segments as { name: string; id: string }[]).find(
            (a) => a.name === "General",
          )
        : undefined;

      if (!generalSegment) {
        const { data: newSegment } = await resend.segments.create({
          name: "General",
        });
        generalSegment =
          (newSegment as { name: string; id: string }) ?? undefined;
      }

      if (generalSegment?.id) {
        await resend.contacts.create({
          email: body.email,
          firstName: body.firstName,
          lastName: body.lastName,
          unsubscribed: false,
          audienceId: generalSegment.id,
        });
      }
    } catch (subError) {
      console.error("Subscription error:", subError);
    }

    // Prepare attachments if file exists
    const attachments = [];
    if (file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name,
        content: buffer,
      });
    }

    // 2. Send notification email to company
    const companyEmailResponse = await resend.emails.send({
      from: `Catalogue Request <onboarding@resend.dev>`,
      to: process.env.CONTACT_EMAIL,
      subject: `Catalogue Request: ${body.firstName} ${body.lastName} from ${body.company}`,
      attachments,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A1A1A; border-bottom: 2px solid #B8641A; padding-bottom: 10px;">
            New Catalogue Request
          </h2>
          
          <div style="margin: 20px 0; line-height: 1.6;">
            <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
            <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
            <p><strong>Phone:</strong> ${body.phone}</p>
            <p><strong>Company:</strong> ${body.company}</p>
            ${body.website ? `<p><strong>Website:</strong> <a href="${body.website}" target="_blank">${body.website}</a></p>` : ""}
            
            <div style="margin-top: 20px; padding: 15px; background-color: #fdfbf8; border-left: 4px solid #B8641A;">
              <strong>Interest Description:</strong>
              <p style="margin-top: 10px; white-space: pre-wrap;">${body.message}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (companyEmailResponse.error) {
      console.error("Resend error:", companyEmailResponse.error);
      return NextResponse.json(
        { error: "Failed to send notification email" },
        { status: 500 },
      );
    }

    // 3. Send catalogue link to customer
    await resend.emails.send({
      from: "Smart Range Leather <onboarding@resend.dev>",
      to: body.email,
      subject: "Your Requested Catalogue - Smart Range Leather",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1A1A1A;">Hello ${body.firstName},</h2>
          
          <p style="margin-top: 20px; line-height: 1.6;">
            Thank you for your interest in Smart Range Leather. You can access our full collection catalogue through the link below:
          </p>
          
          <div style="margin: 30px 0; text-align: center;">
            <a href="${process.env.CATALOGUE_DRIVE_LINK}" 
               style="background-color: #B8641A; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">
               View Full Catalogue
            </a>
          </div>
          
          <p style="line-height: 1.6;">
            If the button doesn't work, copy and paste this link into your browser:<br>
            <a href="${process.env.CATALOGUE_DRIVE_LINK}">${process.env.CATALOGUE_DRIVE_LINK}</a>
          </p>
          
          <div style="margin-top: 40px; border-top: 1px solid #ddd; padding-top: 20px;">
            <p>Best regards,<br>
            <strong>Smart Range Leather Team</strong></p>
            <p style="color: #666; font-size: 12px;">
              Business Bay Dubai, UAE | Dagenham, UK | Sialkot, Pakistan<br>
              Email: info@smartrangeleather.com
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Catalogue link sent successfully",
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
