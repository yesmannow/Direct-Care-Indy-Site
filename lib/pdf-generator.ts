import 'server-only';
// Use default import to avoid ESM minification issues
import jsPDF from 'jspdf';
import { BUSINESS_INFO } from './constants';

interface HSACertificateData {
  memberName?: string;
  membershipTier?: string;
  monthlyFee?: number;
}

export function generateHSACertificate(data: HSACertificateData = {}) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  const maxWidth = pageWidth - (margin * 2);

  // Colors
  const primaryColor = [27, 43, 58]; // #1B2B3A
  const tealColor = [20, 184, 166]; // #14B8A6

  // Header
  doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.rect(0, 0, pageWidth, 50, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Direct Care Indy', margin, 25);

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('HSA Eligibility Certificate', margin, 35);
  doc.text('2026 Compliance Letter', margin, 42);

  // Date
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  doc.text(`Date: ${dateStr}`, pageWidth - margin - 50, 30, { align: 'right' });

  // Main Content
  let yPos = 70;

  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('HSA Eligibility Confirmation', margin, yPos);
  yPos += 15;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const introText = `This letter confirms that Direct Care Indy (DPC) memberships are HSA-eligible as of January 1, 2026, per IRS guidance (OBBBA 2026).`;
  const introLines = doc.splitTextToSize(introText, maxWidth);
  doc.text(introLines, margin, yPos);
  yPos += introLines.length * 6 + 10;

  // Provider Information
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('Provider Information', margin, yPos);
  yPos += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Provider Name: ${BUSINESS_INFO.physician}`, margin, yPos);
  yPos += 6;
  doc.text(`Practice: ${BUSINESS_INFO.name}`, margin, yPos);
  yPos += 6;
  doc.text(`Address: ${BUSINESS_INFO.address.full}`, margin, yPos);
  yPos += 6;
  doc.text(`Phone: ${BUSINESS_INFO.phone}`, margin, yPos);
  yPos += 6;
  doc.text(`Email: ${BUSINESS_INFO.email}`, margin, yPos);
  yPos += 15;

  // Membership Details
  if (data.memberName || data.membershipTier || data.monthlyFee) {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Membership Details', margin, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    if (data.memberName) {
      doc.text(`Member Name: ${data.memberName}`, margin, yPos);
      yPos += 6;
    }
    if (data.membershipTier) {
      doc.text(`Membership Tier: ${data.membershipTier}`, margin, yPos);
      yPos += 6;
    }
    if (data.monthlyFee) {
      doc.text(`Monthly Fee: $${data.monthlyFee.toFixed(2)}`, margin, yPos);
      yPos += 6;
    }
    yPos += 10;
  }

  // HSA Eligibility Section
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text('HSA Eligibility Status', margin, yPos);
  yPos += 10;

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const eligibilityText = [
    '✓ HSA Eligibility: YES (as of January 1, 2026)',
    '✓ IRS Code Section: Qualified medical expense under OBBBA 2026',
    '✓ Service Type: Direct Primary Care (DPC) membership',
    '',
    'Members can use their Health Savings Account (HSA) funds to pay for their monthly DPC membership fees without penalty.',
    '',
    'This eligibility is based on the Over-the-Counter Benefits and Better Alignment Act (OBBBA) of 2026, which expanded HSA-eligible expenses to include Direct Primary Care memberships.'
  ];

  eligibilityText.forEach(line => {
    if (line.startsWith('✓')) {
      doc.setTextColor(tealColor[0], tealColor[1], tealColor[2]);
    } else {
      doc.setTextColor(0, 0, 0);
    }
    doc.text(line, margin, yPos);
    yPos += 6;
  });

  yPos += 10;

  // Pricing Justification (if applicable)
  if (data.monthlyFee) {
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(0, 0, 0);
    doc.text('Pricing Justification', margin, yPos);
    yPos += 10;

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    const pricingText = `The monthly membership fee of $${data.monthlyFee.toFixed(2)} is a qualified medical expense as it provides access to primary care services, preventive care, and chronic disease management. This fee is separate from insurance and qualifies as a medical expense under IRS guidelines.`;
    const pricingLines = doc.splitTextToSize(pricingText, maxWidth);
    doc.text(pricingLines, margin, yPos);
    yPos += pricingLines.length * 6 + 10;
  }

  // Footer
  const footerY = pageHeight - 40;
  doc.setDrawColor(200, 200, 200);
  doc.line(margin, footerY, pageWidth - margin, footerY);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(100, 100, 100);
  const disclaimer = 'This document is for informational purposes only. Please consult with a tax professional or your HSA administrator for specific tax advice and eligibility confirmation.';
  const disclaimerLines = doc.splitTextToSize(disclaimer, maxWidth);
  doc.text(disclaimerLines, margin, footerY + 10);

  // Authority Text
  yPos = pageHeight - 50;
  doc.setFontSize(9);
  doc.setFont('helvetica', 'italic');
  doc.setTextColor(0, 0, 0);
  const authorityText = `*This certifies that ${BUSINESS_INFO.physician} (${BUSINESS_INFO.npi}) provides 2026 OBBBA-compliant Direct Primary Care services. Monthly fees are considered Qualified Medical Expenses under IRS Notice 2026-5.`;
  const authorityLines = doc.splitTextToSize(authorityText, maxWidth);
  doc.text(authorityLines, margin, yPos);

  // Certification
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text('Certified by:', margin, pageHeight - 15);
  doc.setFont('helvetica', 'bold');
  doc.text(BUSINESS_INFO.physician, margin + 40, pageHeight - 15);
  doc.setFont('helvetica', 'normal');
  doc.text(BUSINESS_INFO.name, margin + 40, pageHeight - 10);

  return doc;
}

export function downloadHSACertificate(data: HSACertificateData = {}) {
  const doc = generateHSACertificate(data);
  const fileName = `HSA-2026-Eligibility-Certificate-${new Date().toISOString().split('T')[0]}.pdf`;
  doc.save(fileName);
}

