const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointerQuery = window.matchMedia("(pointer: fine)");

const rafThrottle = <T extends Event>(callback: (event: T) => void): ((event: T) => void) => {
  let frame = 0;
  let latestEvent: T | null = null;

  return (event: T): void => {
    latestEvent = event;
    if (frame) return;

    frame = window.requestAnimationFrame(() => {
      frame = 0;
      if (!latestEvent) return;
      callback(latestEvent);
      latestEvent = null;
    });
  };
};

export const initAnimations = (): void => {
  const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

  if (reducedMotionQuery.matches) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px 18% 0px", threshold: 0.02 }
  );

  revealElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 55}ms`);
    revealObserver.observe(element);
  });

  window.setTimeout(() => {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  }, 1400);

  if (!finePointerQuery.matches) return;

  document.querySelectorAll<HTMLElement>(".spotlight-card").forEach((card) => {
    card.addEventListener("pointermove", rafThrottle<PointerEvent>((event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      card.style.setProperty("--pointer-x", `${x}px`);
      card.style.setProperty("--pointer-y", `${y}px`);
    }));
  });

  document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", rafThrottle<PointerEvent>((event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.setProperty("--tilt-x", `${(-y * 4).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 5).toFixed(2)}deg`);
    }));

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    });
  });

  document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((element) => {
    element.addEventListener("pointermove", rafThrottle<PointerEvent>((event) => {
      const rect = element.getBoundingClientRect();
      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);
      element.style.setProperty("--magnet-x", `${x * 0.12}px`);
      element.style.setProperty("--magnet-y", `${y * 0.18}px`);
    }));

    element.addEventListener("pointerleave", () => {
      element.style.setProperty("--magnet-x", "0px");
      element.style.setProperty("--magnet-y", "0px");
    });
  });
};
