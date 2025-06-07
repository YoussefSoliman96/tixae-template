import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import { LoadingBar } from "../components/common/LoadingBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  fallback: ["system-ui", "arial"],
  preload: true,
});

export const metadata: Metadata = {
  title: "Tixae Template",
  description: "A modern Next.js template with beautiful layouts.",
  icons: {
    icon: "/tixae-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} ${poppins.variable}`}>
        <Providers>
          <LoadingBar />
          <Navbar />
          {/* Main content area with dynamic height */}
          <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-5rem)]">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
