import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Direct Care Indy - Your Doctor on Speed Dial | Indianapolis, IN",
  description: "Experience the 90/10 model—90% of your care covered for a flat monthly fee. No insurance hassles in Indianapolis. Direct Primary Care with Dr. James D. Pike, D.O. Located at 7911 N. Michigan Rd., Indianapolis, IN 46268. DPC near me.",
  keywords: "direct primary care, DPC, Indianapolis, Dr. James Pike, 7911 N Michigan Rd, healthcare, affordable healthcare, no insurance, wholesale labs, DPC near me",
  openGraph: {
    title: "Direct Care Indy - Transparent Healthcare for Indianapolis",
    description: "Experience the 90/10 model with Dr. James D. Pike, D.O., FCCP, FACP",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
