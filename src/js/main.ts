import "../css/styles.css";

import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  CalendarDays,
  CheckCircle2,
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
import { initContactForm } from "./contact";
import { initNavigation } from "./navigation";
import { initProjectsPage, renderCaseStudy, renderFeaturedProjects } from "./projects";

document.documentElement.classList.add("js-ready");

const iconSet = {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Award,
  Boxes,
  CalendarDays,
  CheckCircle2,
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
  setHref("[data-cv-link]", site.cvUrl);

  document.querySelectorAll<HTMLImageElement>("[data-profile-image]").forEach((image) => {
    image.src = site.profileImage;
    image.alt = `Foto de ${site.name}`;
  });

  const heroStack = document.querySelector("#hero-stack");
  if (heroStack) {
    heroStack.innerHTML = site.heroStack.map((item) => `<span>${item}</span>`).join("");
  }
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
  renderEducation();
  renderCourses();
  renderTechnologies();
  renderFeaturedProjects(projects);
  initProjectsPage(projects);
  renderCaseStudy(projects);

  createIcons({ icons: iconSet });

  initNavigation();
  initContactForm();
  initAnimations();
});
