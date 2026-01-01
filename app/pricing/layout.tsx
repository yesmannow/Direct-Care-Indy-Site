import { pricingMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = pricingMetadata;

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
