import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-source-serif",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Safe Line Traders (Pvt) Ltd. — Defense & Healthcare Procurement Logistics",
  description:
    "Safe Line Traders (Pvt) Ltd. is a premier supply chain and procurement solutions partner in Pakistan, serving defense, public, and private healthcare sectors with pharmaceuticals, surgical equipment, and tactical logistics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sourceSerif.variable} ${plexSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
