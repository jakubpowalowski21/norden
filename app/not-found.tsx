import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-wide page-intro section-space-bottom">
      <p className="eyebrow section-label">Błąd 404</p>
      <h1>Nie znaleziono strony</h1>
      <p className="page-intro-text">Sprawdź adres lub wróć na stronę główną.</p>
      <Link href="/" className="button button-dark">Strona główna</Link>
    </section>
  );
}
