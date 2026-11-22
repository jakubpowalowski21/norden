import Link from "next/link";
import { navigation, studio } from "@/lib/studio";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container-wide">
        <div className="footer-main">
          <div className="footer-brand"><Brand /><p>Pracownia architektury i wnętrz<br />Poznań, Polska</p></div>
          <nav aria-label="Menu w stopce" className="footer-links">
            {[...navigation, { href: "/kontakt", label: "Kontakt" }].map(({ href, label }) => <Link href={href} key={href}>{label}</Link>)}
          </nav>
          <div className="footer-contact"><a href={"mailto:" + studio.email}>{studio.email}</a><a href={"tel:" + studio.telephone}>{studio.phone}</a></div>
        </div>
        <div className="footer-bottom">
          <p>© Norden Architects. Projekt demonstracyjny.</p>
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <a href="#top">Wróć na górę</a>
        </div>
      </div>
    </footer>
  );
}
