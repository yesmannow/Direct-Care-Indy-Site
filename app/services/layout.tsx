import { servicesMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = servicesMetadata;

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
