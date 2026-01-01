import { Metadata } from "next";

export const baseMetadata: Metadata = {
  metadataBase: new URL('https://directcareindy.com'),
  title: {
    default: "Direct Care Indy | Affordable Healthcare for the Missing Middle",
    template: "%s | Direct Care Indy"
  },
  description: "Direct Primary Care in Indianapolis starting at $69/mo. No insurance hassles, wholesale labs, and direct access to Dr. James Pike, D.O. HSA-eligible as of 2026.",
  keywords: [
    "Direct Primary Care Indianapolis",
    "HSA eligible DPC 2026",
    "healthcare for self-employed Indiana",
    "small business health benefits Indy",
    "DPC near me Indianapolis",
    "affordable healthcare Indiana",
    "Dr. James Pike Indianapolis",
    "wholesale labs Indianapolis",
    "no insurance doctor Indianapolis",
    "healthcare missing middle",
    "HVAC healthcare benefits",
    "contractor health insurance alternative"
  ],
  authors: [{ name: "Dr. James D. Pike, D.O." }],
  creator: "Direct Care Indy",
  publisher: "Direct Care Indy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://directcareindy.com",
    siteName: "Direct Care Indy",
    title: "Direct Care Indy | 90/10 Healthcare Model - Save $4,560 Annually",
    description: "Experience the 90/10 model with Dr. James D. Pike, D.O., FCCP, FACP. Direct Primary Care covers 90% of your needs. HSA-eligible starting Jan 1, 2026.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Direct Care Indy - 90/10 Healthcare Model"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Direct Care Indy | 90/10 Healthcare Model - Save $4,560 Annually",
    description: "Direct Primary Care in Indianapolis. No insurance hassles. Wholesale labs. HSA-eligible 2026.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export const partnershipMetadata: Metadata = {
  title: "Health Benefits for Indianapolis Trades | HVAC, Landscaping, Auto",
  description: "Save $4,700+ per employee with Direct Primary Care for small businesses in Indianapolis, IN 46268. Perfect for HVAC, landscaping, auto shops, and construction trades.",
  keywords: [
    "small business health benefits Indianapolis",
    "HVAC contractor healthcare",
    "landscaping company health insurance",
    "auto shop employee benefits",
    "construction trade healthcare",
    "affordable employee benefits Indiana",
    "Indianapolis 46268 healthcare",
    "Indianapolis 46268",
    "healthcare 46268",
    "DPC Indianapolis 46268",
    "direct primary care 46268"
  ],
  openGraph: {
    title: "Health Benefits for Indianapolis Trades | Save $4,700/Employee",
    description: "Direct Primary Care partnerships for small businesses in Indianapolis, IN 46268. Perfect for trades and contractors.",
    url: "https://directcareindy.com/partnerships"
  }
};

export const pricingMetadata: Metadata = {
  title: "Transparent DPC Pricing | Save $3,732 - $4,560 Annually",
  description: "Direct Care Indy membership starts at $69/mo. HSA-eligible as of Jan 1, 2026. No hidden fees, no surprise bills. See how much you can save.",
  keywords: [
    "DPC pricing Indianapolis",
    "affordable primary care",
    "HSA eligible healthcare 2026",
    "transparent healthcare pricing",
    "no surprise medical bills"
  ],
  openGraph: {
    title: "Transparent DPC Pricing | Save Up to $4,560 Per Year",
    description: "Individual plans from $69/mo. Family plans from $250/mo. All HSA-eligible.",
    url: "https://directcareindy.com/pricing"
  }
};

export const servicesMetadata: Metadata = {
  title: "Direct Primary Care Services | Chronic Disease Management",
  description: "Comprehensive primary care services including chronic disease management, wellness visits, wholesale labs, and direct physician access in Indianapolis.",
  keywords: [
    "primary care services Indianapolis",
    "chronic disease management",
    "wellness visits Indianapolis",
    "preventive care Indiana"
  ]
};

export const faqMetadata: Metadata = {
  title: "FAQ | Direct Primary Care Questions Answered",
  description: "Common questions about Direct Primary Care, HSA eligibility, insurance compatibility, and the 90/10 healthcare model.",
  keywords: [
    "DPC FAQ",
    "direct primary care questions",
    "HSA eligibility DPC",
    "DPC vs insurance"
  ]
};
