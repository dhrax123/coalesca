import type { Metadata } from "next";
import "@fontsource-variable/inter-tight";
import "./globals.css";
import "./pages.css";
import Shell from "@/components/Shell";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://coalesca.in"),
  title: { default: "Coalesca Technologies | IT staffing, infrastructure and digital marketing", template: "%s | Coalesca Technologies" },
  description: "Screened IT talent, on-site infrastructure delivery and performance marketing for enterprises across India. One partner, one point of contact.",
  icons: { icon: "/brand/mark.svg" },
  openGraph: { type: "website", siteName: "Coalesca Technologies" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body><Shell>{children}</Shell></body>
    </html>
  );
}
