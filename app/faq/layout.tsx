import { faqMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = faqMetadata;

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
