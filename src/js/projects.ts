import type { Project } from "../data/types";

const projectUrl = (project: Project): string => `/proyectos/${project.slug}.html`;

const renderProjectLinks = (project: Project): string => {
  const optionalLinks = [
    project.demoUrl
      ? `<a href="${project.demoUrl}" target="_blank" rel="noreferrer">Demo <i data-lucide="external-link" aria-hidden="true"></i></a>`
      : "",
    project.githubUrl
      ? `<a href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub <i data-lucide="github" aria-hidden="true"></i></a>`
      : "",
    project.externalUrl
      ? `<a href="${project.externalUrl}" target="_blank" rel="noreferrer">Sitio <i data-lucide="external-link" aria-hidden="true"></i></a>`
      : ""
  ].join("");

  return `
    <div class="project-links">
      <a href="${projectUrl(project)}">Case study <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
      ${optionalLinks}
    </div>
  `;
};

export const projectCardTemplate = (project: Project): string => `
  <article
    class="project-card reveal spotlight-card"
    data-tilt
    data-category="${project.category}"
    data-tech="${project.technologies.join(" ")}"
  >
    <a class="project-image-link" href="${projectUrl(project)}" aria-label="Ver case study de ${project.title}">
      <img src="${project.image}" alt="Vista previa editable de ${project.title}" loading="lazy" width="1200" height="760" />
    </a>
    <div class="project-content">
      <div class="project-meta">
        <span>${project.id}</span>
        <span>${project.category}</span>
        <span>${project.year}</span>
      </div>
      <h3>${project.title}</h3>
      <p>${project.shortDescription}</p>
      <div class="project-stack">
        ${project.technologies.slice(0, 5).map((item) => `<span>${item}</span>`).join("")}
      </div>
      ${renderProjectLinks(project)}
    </div>
  </article>
`;

export const renderFeaturedProjects = (projectData: Project[]): void => {
  const target = document.querySelector("#featured-projects");
  if (!target) return;

  target.innerHTML = projectData.filter((project) => project.featured).slice(0, 3).map(projectCardTemplate).join("");
};

export const initProjectsPage = (projectData: Project[]): void => {
  const grid = document.querySelector("#all-projects");
  const filterTarget = document.querySelector("#project-filters");
  if (!grid || !filterTarget) return;

  const categories = ["Todos", ...Array.from(new Set(projectData.map((project) => project.category)))];

  filterTarget.innerHTML = categories
    .map(
      (category, index) => `
        <button class="filter-button ${index === 0 ? "is-active" : ""}" type="button" data-filter="${category}">
          ${category}
        </button>
      `
    )
    .join("");

  grid.innerHTML = projectData.map(projectCardTemplate).join("");

  filterTarget.querySelectorAll<HTMLButtonElement>("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter ?? "Todos";
      filterTarget.querySelectorAll(".filter-button").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");

      grid.querySelectorAll<HTMLElement>(".project-card").forEach((card) => {
        const matches = filter === "Todos" || card.dataset.category === filter;
        card.toggleAttribute("hidden", !matches);
      });
    });
  });
};

export const renderCaseStudy = (projectData: Project[]): void => {
  const body = document.body;
  if (body.dataset.page !== "case-study") return;

  const slug = body.dataset.projectSlug;
  const project = projectData.find((item) => item.slug === slug);
  const root = document.querySelector("#case-study-root");
  if (!project || !root) return;

  document.title = `${project.title} — Santiago Valenti`;

  root.innerHTML = `
    <header class="case-hero section-block">
      <div class="case-hero-copy reveal">
        <p class="section-kicker"><span>[${project.id}]</span><span>${project.category}</span></p>
        <h1>${project.title}</h1>
        <p>${project.description}</p>
        <div class="project-stack case-stack">
          ${project.technologies.map((item) => `<span>${item}</span>`).join("")}
        </div>
        ${renderProjectLinks(project)}
      </div>
      <figure class="case-visual reveal spotlight-card" data-tilt>
        <img src="${project.image}" alt="Screenshot editable de ${project.title}" width="1200" height="760" />
      </figure>
    </header>

    <section class="case-section section-block">
      <div class="case-grid">
        <article class="case-panel reveal">
          <span class="meta-line">Problema</span>
          <h2>Contexto</h2>
          <p>${project.problem}</p>
        </article>
        <article class="case-panel reveal">
          <span class="meta-line">Solución</span>
          <h2>Enfoque</h2>
          <p>${project.solution}</p>
        </article>
      </div>
    </section>

    <section class="case-section section-block">
      <div class="section-heading reveal">
        <p class="section-kicker"><span>[ARCH]</span><span>Arquitectura</span></p>
        <h2>Base técnica documentable.</h2>
      </div>
      <div class="case-detail-grid">
        <article class="case-panel reveal">
          <h3>Arquitectura</h3>
          <p>${project.architecture}</p>
        </article>
        <article class="case-panel reveal">
          <h3>Características</h3>
          <ul>
            ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
          </ul>
        </article>
        <article class="case-panel reveal">
          <h3>Resultados</h3>
          <p>${project.results}</p>
        </article>
      </div>
    </section>

    <section class="case-section section-block">
      <div class="section-heading reveal">
        <p class="section-kicker"><span>[GALLERY]</span><span>Screenshots</span></p>
        <h2>Galería preparada para capturas reales.</h2>
      </div>
      <div class="gallery-grid">
        ${project.screenshots
          .map(
            (screenshot) => `
              <figure class="gallery-item reveal spotlight-card">
                <img src="${screenshot}" alt="Captura editable de ${project.title}" loading="lazy" width="1200" height="760" />
              </figure>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="project-cta section-block reveal">
      <p class="section-kicker"><span>[CTA]</span><span>Sistema similar</span></p>
      <h2>¿Necesitás un sistema similar?</h2>
      <a class="button button-primary" href="/#contact" data-magnetic>
        <span>Contactarme</span>
        <i data-lucide="arrow-right" aria-hidden="true"></i>
      </a>
    </section>
  `;
};
