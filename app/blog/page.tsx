import { ArticleCard } from "@/components/article-card";
import { PageIntro } from "@/components/content";
import { Reveal } from "@/components/reveal";
import { articles } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import { images } from "@/lib/studio";

export const metadata = pageMetadata("Blog", "Poradniki Norden Architects o projektowaniu domów, wnętrz i wyborze naturalnych materiałów.", "/blog", images.materials);

export default function BlogPage() {
  return (
    <>
      <PageIntro label="Blog" title="Notatki o architekturze"><p>O decyzjach, które kształtują domy i wnętrza. Od czytania pierwszej wyceny po dobór materiałów.</p></PageIntro>
      <section className="container-wide listing-section article-grid" aria-label="Wszystkie artykuły">
        {articles.map(article => <Reveal key={article.slug}><ArticleCard article={article} /></Reveal>)}
      </section>
    </>
  );
}
