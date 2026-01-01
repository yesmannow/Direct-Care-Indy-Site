import { NextResponse } from 'next/server';

interface LeadData {
  name: string;
  businessName: string;
  businessType: string;
  email: string;
  phone: string;
  serviceInterest: string;
  employeeCount?: string;
  hipaaConsent: boolean;
}

export async function POST(req: Request) {
  try {
    const leadData: LeadData = await req.json();

    // Validate required fields
    if (!leadData.name || !leadData.email || !leadData.phone || !leadData.hipaaConsent) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format lead summary
    const leadSummary = {
      timestamp: new Date().toISOString(),
      source: 'Occupational Health Intake Form',
      contact: {
        name: leadData.name,
        email: leadData.email,
        phone: leadData.phone,
      },
      business: {
        name: leadData.businessName,
        type: leadData.businessType,
        employeeCount: leadData.employeeCount || 'Not specified',
      },
      interest: {
        service: leadData.serviceInterest,
      },
      compliance: {
        hipaaConsent: leadData.hipaaConsent,
        consentDate: new Date().toISOString(),
      },
    };

    // TODO: Integrate with your notification endpoint (email service, CRM, etc.)
    // Example: Send to email service, webhook, or save to database
    console.log('New Lead:', JSON.stringify(leadSummary, null, 2));

    // For now, we'll just log it. In production, you would:
    // 1. Send email via SendGrid, Resend, etc.
    // 2. Post to webhook (Zapier, Make.com, etc.)
    // 3. Save to database
    // 4. Send to CRM (HubSpot, Salesforce, etc.)

    // Example webhook call (uncomment when ready):
    // const webhookUrl = process.env.LEAD_WEBHOOK_URL;
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(leadSummary),
    //   });
    // }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      leadId: `lead_${Date.now()}`,
    });
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}

