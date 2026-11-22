import Link from "next/link";

export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Norden Architects — strona główna">
      <span className="brand-mark" aria-hidden="true" />
      <span className="brand-type" aria-hidden="true"><strong>NORDEN</strong><span>ARCHITECTS</span></span>
    </Link>
  );
}
