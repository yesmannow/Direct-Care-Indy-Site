export function FaqSchema() {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Direct Primary Care (DPC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Direct Primary Care (DPC) is a healthcare model where patients pay a monthly membership fee directly to their doctor, bypassing insurance for primary care services. This covers 90% of your healthcare needs including unlimited visits, direct access to your physician, and wholesale pricing on labs."
        }
      },
      {
        "@type": "Question",
        "name": "Is DPC HSA-eligible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! As of January 1, 2026, under IRS Notice 2026-5, DPC memberships under $150/month (individual) or $300/month (family) are HSA-compatible medical expenses. All Direct Care Indy plans are within these legal limits."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Direct Care Indy located?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Direct Care Indy is located at 7911 N. Michigan Rd., Indianapolis, IN 46268. We serve Indianapolis and surrounding communities."
        }
      },
      {
        "@type": "Question",
        "name": "How much does Direct Care Indy cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Individual memberships start at $69/month, with family plans available. This covers unlimited visits, direct communication with Dr. Pike, and wholesale pricing on labs. No surprise bills or hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Do I still need insurance with DPC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DPC covers 90% of your healthcare needs (the daily maintenance). You still need insurance for the 10% - catastrophic events like major surgeries, hospitalizations, or specialist care. Many members use high-deductible catastrophic plans paired with DPC for complete coverage at lower costs."
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
    />
  );
}
