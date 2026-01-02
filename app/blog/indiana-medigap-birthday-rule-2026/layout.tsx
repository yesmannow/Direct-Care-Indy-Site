import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 2026 Indiana 'Birthday Rule' is Here: How Indianapolis Seniors Can Lock in Massive Savings | Direct Care Indy",
  description: "Learn how the 2026 Indiana Medigap Birthday Rule (HEA 1226) allows you to switch Medicare Supplement plans without underwriting and pair it with HSA-eligible DPC for maximum savings.",
  keywords: [
    "Indiana Medigap Birthday Rule",
    "HEA 1226",
    "Medicare Supplement Indianapolis",
    "HSA eligible DPC Medicare",
    "senior healthcare savings Indianapolis",
    "Medigap plan switching",
    "Guaranteed Issue window",
    "Medicare and Direct Primary Care"
  ],
  openGraph: {
    title: "The 2026 Indiana 'Birthday Rule' is Here: How Indianapolis Seniors Can Lock in Massive Savings",
    description: "Learn how the 2026 Indiana Medigap Birthday Rule allows you to switch Medicare Supplement plans without underwriting and pair it with HSA-eligible DPC for maximum savings.",
    type: "article",
    publishedTime: "2026-01-01T00:00:00Z",
    authors: ["Dr. James D. Pike, D.O."],
    images: [
      {
        url: "/images/marketing/senior-wellness.webp",
        width: 1200,
        height: 630,
        alt: "Indianapolis senior reviewing medical bills with HSA-Eligible DPC savings",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 2026 Indiana 'Birthday Rule' is Here: How Indianapolis Seniors Can Lock in Massive Savings",
    description: "Learn how the 2026 Indiana Medigap Birthday Rule allows you to switch Medicare Supplement plans without underwriting and pair it with HSA-eligible DPC for maximum savings.",
    images: ["/images/marketing/senior-wellness.webp"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

