const encodeFormData = (formData: FormData): string => {
  const params = new URLSearchParams();

  formData.forEach((value, key) => {
    if (typeof value === "string") {
      params.append(key, value);
    }
  });

  return params.toString();
};

export const initContactForm = (): void => {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  if (!form) return;

  const status = form.querySelector<HTMLElement>("[data-form-status]");
  const button = form.querySelector<HTMLButtonElement>("[data-submit-button]");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    status?.classList.remove("is-error", "is-success");
    if (status) status.textContent = "Enviando mensaje...";
    if (button) button.disabled = true;

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData(new FormData(form))
      });

      if (!response.ok) {
        throw new Error(`Netlify Forms respondió con estado ${response.status}`);
      }

      form.reset();
      status?.classList.add("is-success");
      if (status) status.textContent = "Mensaje enviado. Te respondo por email.";
    } catch {
      status?.classList.add("is-error");
      if (status) status.textContent = "No se pudo enviar. Probá escribiendo directo por email.";
    } finally {
      if (button) button.disabled = false;
    }
  });
};
