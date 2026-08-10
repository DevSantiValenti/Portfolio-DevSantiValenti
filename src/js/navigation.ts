const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const isInternalHash = (link: HTMLAnchorElement): boolean => {
  const url = new URL(link.href);
  return url.pathname === window.location.pathname && Boolean(url.hash);
};

export const initNavigation = (): void => {
  const progress = document.querySelector<HTMLElement>(".scroll-progress span");
  const backToTop = document.querySelector<HTMLButtonElement>("[data-back-to-top]");
  const mobileToggle = document.querySelector<HTMLButtonElement>("[data-mobile-toggle]");
  const mobileMenu = document.querySelector<HTMLElement>("[data-mobile-menu]");
  const sectionLinks = document.querySelectorAll<HTMLAnchorElement>("[data-section-link]");
  const sections = document.querySelectorAll<HTMLElement>("[data-section]");

  document.querySelectorAll<HTMLAnchorElement>('a[href*="#"]').forEach((link) => {
    if (!isInternalHash(link)) return;

    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.hash);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: prefersReducedMotion.matches ? "auto" : "smooth", block: "start" });
      history.pushState(null, "", link.hash);
      if (mobileMenu && mobileToggle) {
        mobileMenu.hidden = true;
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });
  });

  mobileToggle?.addEventListener("click", () => {
    if (!mobileMenu) return;
    const nextState = mobileMenu.hidden;
    mobileMenu.hidden = !nextState;
    mobileToggle.setAttribute("aria-expanded", String(nextState));
  });

  backToTop?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion.matches ? "auto" : "smooth" });
  });

  const updateScrollState = (): void => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const percentage = max > 0 ? window.scrollY / max : 0;
    if (progress) progress.style.transform = `scaleX(${percentage})`;
    backToTop?.classList.toggle("is-visible", window.scrollY > 640);
  };

  updateScrollState();
  window.addEventListener("scroll", updateScrollState, { passive: true });

  if (sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const id = entry.target.id;
        sectionLinks.forEach((link) => {
          link.classList.toggle("is-active", link.dataset.sectionLink === id);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
};
