import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { baseMetadata } from "@/lib/metadata";
import Navbar from "@/components/Navbar";
import { StickySavingsBar } from "@/components/StickySavingsBar";
import { ScrollTransition } from "@/components/ScrollTransition";
import { FaqSchema } from "@/components/FaqSchema";
import { OrganizationSchema, PhysicianSchema, ServiceSchema } from "@/components/StructuredData";
import { SharedFooter } from "@/components/SharedFooter";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
          {/* SEO & Structured Data */}
          <FaqSchema />
          <OrganizationSchema />
          <PhysicianSchema />
          <ServiceSchema />

          {/* Navigation Layer */}
          <Navbar />

          {/* Main Content with Scroll Transitions */}
          <div className="pt-20">
            <ScrollTransition id="main-content">
              {children}
            </ScrollTransition>
          </div>

          {/* Footer */}
          <SharedFooter />

          {/* Sticky Value Hook */}
          <StickySavingsBar />
        </ThemeProvider>
      </body>
    </html>
  );
}
