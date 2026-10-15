import { NextResponse } from "next/server";
import { validateContactForm, ContactFormData } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body: Partial<ContactFormData> = await request.json();

    // Spam Honeypot check
    if (body.honeypot && body.honeypot.trim().length > 0) {
      // Quietly reject bot submissions
      return NextResponse.json({ success: true, message: "Enquiry received." });
    }

    const { isValid, errors } = validateContactForm(body);

    if (!isValid) {
      return NextResponse.json(
        {
          success: false,
          message: "Please correct the highlighted fields.",
          errors,
        },
        { status: 400 }
      );
    }

    // In production, you can integrate email dispatch (e.g. Resend, SendGrid) or CRM webhook here.
    // We log the structured consultation request securely on the server:
    console.log("=== NEW ZAIRA CONSULTATION INQUIRY ===");
    console.log("Name:", body.fullName);
    console.log("Phone:", body.phoneNumber);
    console.log("Email:", body.email);
    console.log("Service/Category:", body.serviceCategory);
    console.log("Preferred Contact:", body.preferredContact);
    console.log("Room / Dimensions:", body.roomType, body.dimensions);
    console.log("Message:", body.message);
    console.log("Timestamp:", new Date().toISOString());

    return NextResponse.json({
      success: true,
      message: `Thank you, ${body.fullName}! We have received your consultation request and our design team will contact you shortly via ${body.preferredContact || "WhatsApp"}.`,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An unexpected error occurred while sending your request. Please try again or reach out directly on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
