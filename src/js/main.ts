import "../css/styles.css";

import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileDown,
  Github,
  GraduationCap,
  Home,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  Plug,
  Send,
  Server,
  ShieldCheck,
  Terminal,
  createIcons
} from "lucide";

import { courses } from "../data/courses";
import { education } from "../data/education";
import { projects } from "../data/projects";
import { site } from "../data/site";
import { technologies } from "../data/technologies";
import { initAnimations } from "./animations";
import { initNavigation } from "./navigation";
import { initProjectsPage, renderCaseStudy, renderFeaturedProjects } from "./projects";

document.documentElement.classList.add("js-ready");

const iconSet = {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Code2,
  Cpu,
  Database,
  Download,
  ExternalLink,
  FileDown,
  Github,
  GraduationCap,
  Home,
  Layers3,
  Linkedin,
  Mail,
  MessageCircle,
  Menu,
  Plug,
  Send,
  Server,
  ShieldCheck,
  Terminal
};

const setText = (selector: string, value: string): void => {
  document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
    element.textContent = value;
  });
};

const setHref = (selector: string, value: string, fallback = "#"): void => {
  document.querySelectorAll<HTMLAnchorElement>(selector).forEach((element) => {
    element.href = value || fallback;
  });
};

const renderSharedContent = (): void => {
  setText("[data-site-name]", site.name);
  setText("[data-site-role]", site.role);
  setText("[data-site-description]", site.description);
  setText("[data-site-email]", site.email);
  setText("[data-availability]", site.availability);
  setText("[data-build-label]", site.buildLabel);
  setText("[data-current-year]", String(new Date().getFullYear()));

  setHref("[data-email-link]", `mailto:${site.email}`);
  setHref("[data-github-link]", site.githubUrl);
  setHref("[data-linkedin-link]", site.linkedinUrl);
  setHref("[data-whatsapp-link]", site.whatsappUrl);
  setHref("[data-cv-link]", site.cvUrl);

  const heroStack = document.querySelector("#hero-stack");
  if (heroStack) {
    heroStack.innerHTML = site.heroStack.map((item) => `<span>${item}</span>`).join("");
  }
};

const renderProfileCarousel = (): void => {
  const target = document.querySelector("#profile-carousel");
  if (!target) return;

  const slides = site.aboutImages;
  let activeIndex = 0;

  target.innerHTML = `
    <div class="profile-carousel-stage">
      ${slides
        .map(
          (image, index) => `
            <div class="profile-slide" data-profile-slide data-index="${index}">
              <img src="${image.src}" alt="${image.alt}" loading="${index === 0 ? "eager" : "lazy"}" decoding="async" width="900" height="1125" />
            </div>
          `
        )
        .join("")}
    </div>
    <div class="profile-carousel-controls" aria-label="Controles de fotos">
      <button class="profile-carousel-button" type="button" data-profile-prev aria-label="Foto anterior">
        <i data-lucide="chevron-left" aria-hidden="true"></i>
      </button>
      <div class="profile-carousel-dots">
        ${slides
          .map(
            (image, index) => `
              <button class="profile-carousel-dot" type="button" data-profile-dot data-index="${index}" aria-label="Ver ${image.label}">
                <span>${index + 1}</span>
              </button>
            `
          )
          .join("")}
      </div>
      <button class="profile-carousel-button" type="button" data-profile-next aria-label="Foto siguiente">
        <i data-lucide="chevron-right" aria-hidden="true"></i>
      </button>
    </div>
  `;

  const slideElements = Array.from(target.querySelectorAll<HTMLElement>("[data-profile-slide]"));
  const dots = Array.from(target.querySelectorAll<HTMLButtonElement>("[data-profile-dot]"));
  const previousButton = target.querySelector<HTMLButtonElement>("[data-profile-prev]");
  const nextButton = target.querySelector<HTMLButtonElement>("[data-profile-next]");

  const updateCarousel = (): void => {
    slideElements.forEach((slide, index) => {
      const isActive = index === activeIndex;
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
    });

    dots.forEach((dot, index) => {
      dot.classList.toggle("is-active", index === activeIndex);
    });
  };

  const goTo = (index: number): void => {
    activeIndex = (index + slides.length) % slides.length;
    updateCarousel();
  };

  previousButton?.addEventListener("click", () => goTo(activeIndex - 1));
  nextButton?.addEventListener("click", () => goTo(activeIndex + 1));
  dots.forEach((dot) => {
    dot.addEventListener("click", () => goTo(Number(dot.dataset.index ?? 0)));
  });

  updateCarousel();
};

const renderEducation = (): void => {
  const target = document.querySelector("#education-list");
  if (!target) return;

  target.innerHTML = education
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <div class="timeline-marker" aria-hidden="true"></div>
          <div>
            <span class="meta-line">${item.period} · ${item.status}</span>
            <h4>${item.title}</h4>
            <p class="institution">${item.institution}</p>
            <p>${item.description}</p>
            <div class="chip-row">
              ${item.knowledge.map((knowledge) => `<span>${knowledge}</span>`).join("")}
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const renderCourses = (): void => {
  const target = document.querySelector("#course-list");
  if (!target) return;

  target.innerHTML = courses
    .map((course) => {
      const certificatePreview = course.certificateImage
        ? `
          <button
            class="certificate-preview"
            type="button"
            data-certificate-image="${course.certificateImage}"
            data-certificate-title="${course.name}"
            data-certificate-alt="${course.certificateAlt ?? `Certificado de ${course.name}`}"
          >
            <img src="${course.certificateImage}" alt="${course.certificateAlt ?? `Certificado de ${course.name}`}" loading="lazy" decoding="async" />
            <span>Ver certificado completo</span>
          </button>
        `
        : "";

      const certificateState = course.certificateUrl
        ? `<a href="${course.certificateUrl}" target="_blank" rel="noreferrer">Certificado <i data-lucide="external-link" aria-hidden="true"></i></a>`
        : course.certificateImage
          ? `<span>Certificado adjunto</span>`
          : `<span>Certificado pendiente</span>`;

      return `
        <article class="course-card reveal spotlight-card">
          <div class="card-icon"><i data-lucide="award" aria-hidden="true"></i></div>
          <span class="meta-line">${course.platform} · ${course.date}</span>
          <h4>${course.name}</h4>
          <p>${course.description}</p>
          ${certificatePreview}
          <div class="course-footer">
            <span>${course.duration}</span>
            ${certificateState}
          </div>
        </article>
      `;
    })
    .join("");
};

const initCertificateModal = (): void => {
  if (!document.querySelector("[data-certificate-image]")) return;

  const modal = document.createElement("div");
  modal.className = "certificate-modal";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="certificate-modal-backdrop" data-certificate-close></div>
    <div class="certificate-modal-dialog" role="document">
      <header class="certificate-modal-header">
        <div>
          <span class="meta-line">Certificado</span>
          <h3 data-certificate-heading>Curso completado</h3>
        </div>
        <button class="certificate-modal-close" type="button" data-certificate-close aria-label="Cerrar certificado">
          Cerrar
        </button>
      </header>
      <img data-certificate-modal-image src="" alt="" />
    </div>
  `;

  document.body.appendChild(modal);

  const image = modal.querySelector<HTMLImageElement>("[data-certificate-modal-image]");
  const heading = modal.querySelector<HTMLElement>("[data-certificate-heading]");
  const closeButtons = modal.querySelectorAll<HTMLElement>("[data-certificate-close]");

  const closeModal = (): void => {
    modal.hidden = true;
    document.body.classList.remove("has-modal");
  };

  document.querySelectorAll<HTMLButtonElement>("[data-certificate-image]").forEach((button) => {
    button.addEventListener("click", () => {
      const imageSrc = button.dataset.certificateImage;
      if (!imageSrc || !image || !heading) return;

      image.src = imageSrc;
      image.alt = button.dataset.certificateAlt ?? "";
      heading.textContent = button.dataset.certificateTitle ?? "Curso completado";
      modal.hidden = false;
      document.body.classList.add("has-modal");
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
};

const initGalleryModal = (): void => {
  if (!document.querySelector("[data-gallery-image]")) return;

  const modal = document.createElement("div");
  modal.className = "certificate-modal gallery-modal";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML = `
    <div class="certificate-modal-backdrop" data-gallery-close></div>
    <div class="certificate-modal-dialog gallery-modal-dialog" role="document">
      <header class="certificate-modal-header">
        <div>
          <span class="meta-line">Galería</span>
          <h3 data-gallery-heading>Captura del proyecto</h3>
        </div>
        <button class="certificate-modal-close" type="button" data-gallery-close aria-label="Cerrar imagen">
          Cerrar
        </button>
      </header>
      <img data-gallery-modal-image src="" alt="" />
    </div>
  `;

  document.body.appendChild(modal);

  const image = modal.querySelector<HTMLImageElement>("[data-gallery-modal-image]");
  const heading = modal.querySelector<HTMLElement>("[data-gallery-heading]");
  const closeButtons = modal.querySelectorAll<HTMLElement>("[data-gallery-close]");

  const closeModal = (): void => {
    modal.hidden = true;
    document.body.classList.remove("has-modal");
  };

  document.querySelectorAll<HTMLButtonElement>("[data-gallery-image]").forEach((button) => {
    button.addEventListener("click", () => {
      const imageSrc = button.dataset.galleryImage;
      if (!imageSrc || !image || !heading) return;

      image.src = imageSrc;
      image.alt = button.dataset.galleryAlt ?? "";
      heading.textContent = button.dataset.galleryTitle ?? "Captura del proyecto";
      modal.hidden = false;
      document.body.classList.add("has-modal");
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
      closeModal();
    }
  });
};

const renderTechnologies = (): void => {
  const target = document.querySelector("#technology-grid");
  if (!target) return;

  target.innerHTML = technologies
    .map(
      (group) => `
        <article class="tech-card reveal spotlight-card">
          <div class="tech-heading">
            <span class="card-icon"><i data-lucide="${group.icon}" aria-hidden="true"></i></span>
            <div>
              <h3>${group.category}</h3>
              <p>${group.description}</p>
            </div>
          </div>
          <div class="tech-list">
            ${group.items.map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
};

document.addEventListener("DOMContentLoaded", () => {
  renderSharedContent();
  renderProfileCarousel();
  renderEducation();
  renderCourses();
  initCertificateModal();
  renderTechnologies();
  renderFeaturedProjects(projects);
  initProjectsPage(projects);
  renderCaseStudy(projects);
  initGalleryModal();

  createIcons({ icons: iconSet });

  initNavigation();
  initAnimations();
});
