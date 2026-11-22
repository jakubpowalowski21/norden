import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: { default: "Norden Architects — pracownia architektury i wnętrz", template: "%s | Norden Architects" },
  description: "Norden Architects. Pracownia architektury i wnętrz z Poznania. Domy, wnętrza i przestrzenie komercyjne.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pl">
      <body id="top">
        <a className="skip-link" href="#tresc">Przejdź do treści</a>
        <SiteHeader />
        <main id="tresc">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
