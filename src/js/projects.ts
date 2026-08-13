import type { Project } from "../data/types";

const projectUrl = (project: Project): string => `/proyectos/${project.slug}.html`;

const renderProjectPreview = (project: Project, className = "project-preview"): string => {
  const screenshots = project.screenshots.length > 0 ? project.screenshots : [project.image];

  if (screenshots.length === 1) {
    return `
      <div class="${className}">
        <img src="${screenshots[0]}" alt="Vista previa de ${project.title}" loading="lazy" decoding="async" width="1200" height="760" />
      </div>
    `;
  }

  return `
    <div class="${className} project-preview-collage" aria-label="Capturas combinadas de ${project.title}">
      ${screenshots
        .slice(0, 2)
        .map(
          (screenshot, index) => `
            <img
              class="collage-shot collage-shot-${index + 1}"
              src="${screenshot}"
              alt="Captura ${index + 1} de ${project.title}"
              loading="lazy"
              decoding="async"
              width="1200"
              height="760"
            />
          `
        )
        .join("")}
    </div>
  `;
};

const renderProjectLinks = (project: Project): string => {
  const optionalLinks = [
    project.demoUrl
      ? `<a href="${project.demoUrl}" target="_blank" rel="noreferrer">Sitio real <i data-lucide="external-link" aria-hidden="true"></i></a>`
      : "",
    project.githubUrl
      ? `<a href="${project.githubUrl}" target="_blank" rel="noreferrer">GitHub <i data-lucide="github" aria-hidden="true"></i></a>`
      : "",
    project.externalUrl && project.externalUrl !== project.demoUrl
      ? `<a href="${project.externalUrl}" target="_blank" rel="noreferrer">Sitio <i data-lucide="external-link" aria-hidden="true"></i></a>`
      : ""
  ].join("");

  return `
    <div class="project-links">
      <a href="${projectUrl(project)}">Ver más <i data-lucide="arrow-up-right" aria-hidden="true"></i></a>
      ${optionalLinks}
    </div>
  `;
};

const listTemplate = (items: string[] | undefined): string => {
  if (!items || items.length === 0) return "";
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
};

const optionalPanel = (title: string, content?: string): string => {
  if (!content) return "";
  return `
    <article class="case-panel reveal">
      <span class="meta-line">${title}</span>
      <p>${content}</p>
    </article>
  `;
};

const optionalListPanel = (title: string, items?: string[]): string => {
  if (!items || items.length === 0) return "";
  return `
    <article class="case-panel reveal">
      <span class="meta-line">${title}</span>
      ${listTemplate(items)}
    </article>
  `;
};

export const projectCardTemplate = (project: Project): string => `
  <article
    class="project-card reveal spotlight-card"
    data-tilt
    data-category="${project.category}"
    data-tech="${project.technologies.join(" ")}"
  >
    <a class="project-image-link" href="${projectUrl(project)}" aria-label="Ver detalle de ${project.title}">
      ${renderProjectPreview(project)}
    </a>
    <div class="project-content">
      ${project.active ? `<span class="project-status">Activo / en uso</span>` : ""}
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

  const featuredProjects = projectData.filter((project) => project.featured);
  if (featuredProjects.length === 0) {
    target.innerHTML = "";
    return;
  }

  target.innerHTML = `
    <div class="featured-carousel reveal" data-featured-carousel tabindex="0" aria-label="Carrusel 3D de proyectos seleccionados">
      <div class="carousel-stage" data-carousel-stage aria-live="polite">
        ${featuredProjects
          .map(
            (project, index) => `
              <div class="carousel-slide" data-carousel-slide data-index="${index}">
                ${projectCardTemplate(project)}
              </div>
            `
          )
          .join("")}
      </div>
      <div class="carousel-controls" aria-label="Controles del carrusel">
        <button class="carousel-button" type="button" data-carousel-prev aria-label="Proyecto anterior">
          <i data-lucide="chevron-left" aria-hidden="true"></i>
        </button>
        <div class="carousel-dots" role="tablist" aria-label="Seleccionar proyecto">
          ${featuredProjects
            .map(
              (project, index) => `
                <button class="carousel-dot" type="button" data-carousel-dot data-index="${index}" aria-label="Ver ${project.title}">
                  <span>${project.id}</span>
                </button>
              `
            )
            .join("")}
        </div>
        <button class="carousel-button" type="button" data-carousel-next aria-label="Proyecto siguiente">
          <i data-lucide="chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  `;

  const carousel = target.querySelector<HTMLElement>("[data-featured-carousel]");
  const slides = Array.from(target.querySelectorAll<HTMLElement>("[data-carousel-slide]"));
  const dots = Array.from(target.querySelectorAll<HTMLButtonElement>("[data-carousel-dot]"));
  const previousButton = target.querySelector<HTMLButtonElement>("[data-carousel-prev]");
  const nextButton = target.querySelector<HTMLButtonElement>("[data-carousel-next]");
  let activeIndex = 0;

  const getSlideState = (index: number): string => {
    const position = (index - activeIndex + featuredProjects.length) % featuredProjects.length;
    if (position === 0) return "is-active";
    if (position === 1) return "is-next";
    if (position === featuredProjects.length - 1) return "is-prev";
    return "is-hidden";
  };

  const updateCarousel = (): void => {
    slides.forEach((slide, index) => {
      const state = getSlideState(index);
      const isActive = state === "is-active";

      slide.classList.remove("is-active", "is-prev", "is-next", "is-hidden");
      slide.classList.add(state);
      slide.setAttribute("aria-hidden", String(!isActive));
      slide.querySelectorAll<HTMLElement>("a, button").forEach((element) => {
        element.tabIndex = isActive ? 0 : -1;
      });
    });

    dots.forEach((dot, index) => {
      const isActive = index === activeIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-selected", String(isActive));
    });
  };

  const goTo = (index: number): void => {
    activeIndex = (index + featuredProjects.length) % featuredProjects.length;
    updateCarousel();
  };

  previousButton?.addEventListener("click", () => goTo(activeIndex - 1));
  nextButton?.addEventListener("click", () => goTo(activeIndex + 1));

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = Number(dot.dataset.index ?? 0);
      goTo(index);
    });
  });

  carousel?.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goTo(activeIndex - 1);
    if (event.key === "ArrowRight") goTo(activeIndex + 1);
  });

  updateCarousel();
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
        ${renderProjectPreview(project, "case-preview")}
      </figure>
    </header>

    <section class="case-section section-block">
      <div class="case-grid">
        ${optionalPanel("Objetivo", project.objective)}
        ${optionalPanel("Público objetivo", project.audience)}
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
        <p class="section-kicker"><span>[SCOPE]</span><span>Alcance</span></p>
        <h2>Secciones, funciones y rol en el proyecto.</h2>
      </div>
      <div class="case-detail-grid">
        ${optionalListPanel("Secciones", project.sections)}
        <article class="case-panel reveal">
          <span class="meta-line">Funcionalidades</span>
          ${listTemplate(project.features)}
        </article>
        ${optionalPanel("Qué hice", project.role)}
      </div>
    </section>

    <section class="case-section section-block">
      <div class="section-heading reveal">
        <p class="section-kicker"><span>[ARCH]</span><span>Arquitectura</span></p>
        <h2>Arquitectura, beneficios e integraciones.</h2>
      </div>
      <div class="case-detail-grid">
        <article class="case-panel reveal">
          <h3>Arquitectura</h3>
          <p>${project.architecture}</p>
        </article>
        ${optionalListPanel("Beneficios", project.benefits)}
        ${optionalListPanel("Integraciones", project.integrations)}
        <article class="case-panel reveal">
          <h3>Estado</h3>
          <p>${project.status ?? "Estado pendiente de documentar."}</p>
        </article>
        <article class="case-panel reveal">
          <h3>Resultado</h3>
          <p>${project.results}</p>
        </article>
      </div>
    </section>

    <section class="case-section section-block">
      <div class="section-heading reveal">
        <p class="section-kicker"><span>[GALLERY]</span><span>Screenshots</span></p>
        <h2>Galería del proyecto.</h2>
      </div>
      <div class="gallery-grid">
        ${project.screenshots
          .map(
            (screenshot) => `
              <figure class="gallery-item reveal spotlight-card">
                <img src="${screenshot}" alt="Captura editable de ${project.title}" loading="lazy" decoding="async" width="1200" height="760" />
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
