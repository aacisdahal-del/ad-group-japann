import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { GlobalProvider } from "@/context/GlobalContext";
import "./globals.css";

// Optimize font loading to prevent layout shift
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "AD GROUP JAPAN | Multi-Sector Corporate Ecosystem",
  description: "Premier corporate solutions in Chiba, Japan. Specialized in Land Surveying, Real Estate, Restaurant Management, and Logistics.",
  keywords: ["AD Group Japan", "Chiba Real Estate", "Land Surveying Japan", "Business Logistics Chiba"],
  authors: [{ name: "AD Group Japan" }],
  openGraph: {
    title: "AD GROUP JAPAN",
    description: "Leading multi-sector solutions in Chiba, Japan.",
    url: "https://your-username.github.io/adgroupjapan",
    siteName: "AD Group Japan",
    locale: "en_US",
    type: "website",
  },
};

// Separate viewport config (Next.js 14+ requirement)
export const viewport: Viewport = {
  themeColor: "#0A192F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased bg-[#fcfcfc] text-[#0A192F] font-sans">
        <GlobalProvider>
          {/* This is where your page.tsx content is injected */}
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}