import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { PhotoFrame, SectionHeading } from "@/components/content";
import { articles, articleDate } from "@/lib/articles";
import { pageMetadata, siteUrl } from "@/lib/seo";
import { studio } from "@/lib/studio";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  return pageMetadata(article.title, article.summary, "/blog/" + slug, article.photo, article);
}

export default async function ArticlePage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();

  const related = articles.filter(item => item !== article).sort((a, b) => Number(b.category === article.category) - Number(a.category === article.category)).slice(0, 2);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.summary,
    inLanguage: "pl",
    datePublished: article.date,
    mainEntityOfPage: new URL("/blog/" + slug, siteUrl).href,
    image: new URL(article.photo.src, siteUrl).href,
    author: { "@type": "Organization", name: studio.name, url: siteUrl.href },
    publisher: { "@type": "Organization", name: studio.name },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <article>
        <header className="container-wide article-header">
          <Link className="text-link" href="/blog">Wszystkie artykuły</Link>
          <div className="article-byline"><span>{article.category}</span><time dateTime={article.date}>{articleDate(article.date)}</time></div>
          <h1>{article.title}</h1><p>{article.summary}</p>
        </header>
        <div className="container-wide"><PhotoFrame photo={article.photo} sizes="(max-width: 1000px) 90vw, 960px" className="article-hero-photo" preload /></div>
        <div className="container-wide article-layout section-space-mid">
          <nav className="article-toc" aria-label="Spis treści">
            <h2>Spis treści</h2>
            <ol>{article.sections.map(({ title }, index) => <li key={title}><a href={"#sekcja-" + (index + 1)}>{title}</a></li>)}</ol>
          </nav>
          <div className="article-body">
            {article.sections.map(({ title, paragraphs }, index) => <section key={title} id={"sekcja-" + (index + 1)}><h2>{title}</h2>{paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</section>)}
          </div>
        </div>
      </article>
      <section className="section-space-mid section-tinted">
        <div className="container-wide"><SectionHeading label="Blog" title="Powiązane artykuły" /><div className="article-grid">{related.map(item => <ArticleCard key={item.slug} article={item} />)}</div></div>
      </section>
    </>
  );
}
