import { Suspense } from "react";
import { ContactBanner, PageIntro } from "@/components/content";
import { ProjectFilter, ProjectGrid } from "@/components/project-filter";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Realizacje", "Katalog projektów Norden Architects. Poznaj domy, wnętrza i budynki komercyjne zaprojektowane przez naszą pracownię.", "/realizacje");

export default function ProjectsPage() {
  return (
    <>
      <PageIntro label="Portfolio" title="Realizacje">
        <p>Domy, wnętrza i miejsca pracy. Każdy projekt odpowiada na inny krajobraz, program i sposób życia.</p>
      </PageIntro>
      <section className="container-wide listing-section" aria-label="Katalog realizacji">
        <Suspense fallback={<ProjectGrid />}><ProjectFilter /></Suspense>
      </section>
      <ContactBanner />
    </>
  );
}
