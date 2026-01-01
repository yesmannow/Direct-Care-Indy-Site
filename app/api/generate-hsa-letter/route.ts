import { NextRequest, NextResponse } from 'next/server';
import { generateHSACertificate } from '@/lib/pdf-generator';

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const memberName = searchParams.get('memberName') || undefined;
    const membershipTier = searchParams.get('membershipTier') || undefined;
    const monthlyFee = searchParams.get('monthlyFee')
      ? parseFloat(searchParams.get('monthlyFee')!)
      : undefined;

    // Generate the PDF
    const doc = generateHSACertificate({
      memberName,
      membershipTier,
      monthlyFee,
    });

    // Convert to buffer
    const pdfBuffer = Buffer.from(doc.output('arraybuffer'));

    // Return as PDF
    return new NextResponse(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="HSA-2026-Eligibility-Certificate-${new Date().toISOString().split('T')[0]}.pdf"`,
      },
    });
  } catch (error) {
    console.error('HSA PDF generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate HSA certificate' },
      { status: 500 }
    );
  }
}

