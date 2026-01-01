import { partnershipMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = partnershipMetadata;

export default function PartnershipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
