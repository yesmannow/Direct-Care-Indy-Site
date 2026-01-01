import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Direct Care Indy - Your Doctor on Speed Dial | Indianapolis, IN",
  description: "Experience the 90/10 model—90% of your care covered for a flat monthly fee. No insurance hassles in Indianapolis. Direct Primary Care with Dr. James D. Pike, D.O.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
