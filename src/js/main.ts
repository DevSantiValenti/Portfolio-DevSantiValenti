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
              <img src="${image.src}" alt="${image.alt}" loading="${index === 0 ? "eager" : "lazy"}" width="900" height="1125" />
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
    .map(
      (course) => `
        <article class="course-card reveal spotlight-card">
          <div class="card-icon"><i data-lucide="award" aria-hidden="true"></i></div>
          <span class="meta-line">${course.platform} · ${course.date}</span>
          <h4>${course.name}</h4>
          <p>${course.description}</p>
          <div class="course-footer">
            <span>${course.duration}</span>
            ${
              course.certificateUrl
                ? `<a href="${course.certificateUrl}" target="_blank" rel="noreferrer">Certificado <i data-lucide="external-link" aria-hidden="true"></i></a>`
                : `<span>Certificado pendiente</span>`
            }
          </div>
        </article>
      `
    )
    .join("");
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
  renderTechnologies();
  renderFeaturedProjects(projects);
  initProjectsPage(projects);
  renderCaseStudy(projects);

  createIcons({ icons: iconSet });

  initNavigation();
  initAnimations();
});
