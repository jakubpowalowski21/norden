"use client";

import { useSearchParams } from "next/navigation";
import { categories, projects } from "@/lib/projects";
import { ProjectCard } from "./content";

const allFilters = [{ id: "", label: "Wszystkie" }, ...categories];

function countLabel(count: number) {
  if (count === 1) return "1 realizacja";
  if (count >= 2 && count <= 4) return count + " realizacje";
  return count + " realizacji";
}

export function ProjectGrid({ results = projects }: { results?: typeof projects }) {
  return <div className="project-grid">{results.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>;
}

export function ProjectFilter() {
  const params = useSearchParams();
  const active = params.get("kategoria") ?? "";
  const results = active ? projects.filter(({ category }) => category === active) : projects;

  function selectCategory(category: string) {
    const url = new URL(window.location.href);
    if (category) url.searchParams.set("kategoria", category);
    else url.searchParams.delete("kategoria");
    window.history.replaceState(null, "", url);
  }

  return (
    <>
      <div className="filter-toolbar">
        <div className="filter-controls" role="group" aria-label="Kategorie realizacji">
          {allFilters.map(({ id, label }) => <button key={id} type="button" className="filter-button" aria-pressed={id === active} onClick={() => selectCategory(id)}>{label}</button>)}
        </div>
        <p className="result-count" role="status">{countLabel(results.length)}</p>
      </div>
      {results.length ? <ProjectGrid results={results} /> : (
        <div className="empty-state">
          <h2>Brak realizacji w tej kategorii</h2>
          <p>Wybierz inną kategorię lub wróć do pełnego katalogu.</p>
          <button type="button" className="button button-dark" onClick={() => selectCategory("")}>Wyczyść filtr</button>
        </div>
      )}
    </>
  );
}
