import { Resend } from 'resend';
import { NextResponse } from 'next/server';

interface LeadData {
  name: string;
  email: string;
  phone: string;
  persona?: string;
  healthGoal?: string;
  goal?: string; // Alias for healthGoal
  source?: string;
  hipaaConsent?: boolean;
  // Business/Employer fields
  businessName?: string;
  businessType?: string;
  employeeCount?: string;
  serviceInterest?: string;
  savings?: string | number;
}

export async function POST(req: Request) {
  try {
    const body: LeadData = await req.json();
    const { name, email, phone, businessName, employeeCount, goal, healthGoal, persona, savings } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and phone are required' },
        { status: 400 }
      );
    }

    // Determine if this is a B2B or B2C lead for the Subject Line
    const subject = businessName
      ? `🏢 Employer Lead: ${businessName} (${employeeCount || 'Unknown'} staff)`
      : `🩺 New Patient: ${name} (${goal || healthGoal || persona || 'General Interest'})`;

    // Use the Resend SDK to send email
    // Initialize Resend inside the function to avoid build-time errors
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Direct Care Indy <onboarding@resend.dev>', // Required for unverified domains (sandbox)
      to: [process.env.NOTIFICATION_EMAIL || 'hoosierdarling@gmail.com'],
      subject: subject,
      html: `
        <h1>New Lead from Direct Care Indy</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <hr />
        ${businessName ? `
          <h3>Employer Details</h3>
          <p><strong>Business:</strong> ${businessName}</p>
          <p><strong>Staff Size:</strong> ${employeeCount || 'Not specified'}</p>
          <p><strong>Est. Annual Savings:</strong> $${savings || 'Check Calculator'}</p>
        ` : `
          <h3>Patient Details</h3>
          <p><strong>Health Goal:</strong> ${goal || healthGoal || 'General Interest'}</p>
          <p><strong>Persona:</strong> ${persona || 'Individual'}</p>
        `}
        <hr />
        <p><small>This lead was captured via the 2026 Onboarding Wizard.</small></p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send notification', details: error }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      leadId: `lead_${Date.now()}`,
      emailId: data?.id
    });

  } catch (err) {
    console.error('Lead submission error:', err);
    return NextResponse.json(
      { error: 'Internal Server Error', details: err instanceof Error ? err.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
