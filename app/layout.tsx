import type { Metadata } from "next";
import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import Providers from "./providers";
import { cn } from "@/lib/utils";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-display", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "AeroPulse — Flight Delay Intelligence for India",
    template: "%s — AeroPulse"
  },
  description:
    "AeroPulse helps Indian travellers and ops teams predict flight delays, plan better, and stay on time with rich analytics.",
  openGraph: {
    title: "AeroPulse",
    description:
      "Predict delays. Plan better. Analytics built for Indian flyers and travel ops.",
    url: "/",
    siteName: "AeroPulse",
    images: ["/og.png"],
    locale: "en_IN",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "AeroPulse",
    description: "Flight delay predictions & analytics.",
    images: ["/og.png"]
  },
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(14,165,233,0.15),transparent),linear-gradient(to_bottom,rgba(34,211,238,0.08),transparent_30%)]",
          inter.variable,
          playfair.variable,
          "font-sans"
        )}
      >
        <Providers>
          <SiteHeader />
          <main className="min-h-[70vh] pt-16">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
