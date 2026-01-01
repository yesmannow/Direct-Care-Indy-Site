import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Team | Direct Care Indy",
  description: "Specialist-led primary care with high-access clinicians. Meet Dr. James D. Pike, D.O., FCCP, FACP and our expert PA team.",
};

export default function ProvidersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

