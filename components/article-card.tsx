import Link from "next/link";
import { articleDate, type articles } from "@/lib/articles";
import { PhotoFrame } from "./content";

export function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <article className="article-card">
      <Link href={"/blog/" + article.slug} className="card-link">
        <PhotoFrame photo={article.photo} sizes="(max-width: 700px) 90vw, 45vw" className="article-card-photo" />
        <div className="project-meta"><span>{article.category}</span><time dateTime={article.date}>{articleDate(article.date)}</time></div>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
      </Link>
    </article>
  );
}
