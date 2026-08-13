import type { SiteProfile } from "./types";

export const site: SiteProfile = {
  name: "Santiago Valenti",
  role: "Full Stack Developer",
  specialization: "Java / Spring Boot / desarrollo de sistemas web",
  description:
    "Desarrollo aplicaciones y sistemas web reales con backend sólido, interfaces claras, bases de datos, integraciones y despliegues preparados para producción.",
  heroStack: ["Java", "Spring Boot", "APIs REST", "MySQL", "Docker"],
  availability: "STATUS: AVAILABLE",
  buildLabel: "BUILD: STATIC / NETLIFY READY",
  email: "dev.santivalenti@gmail.com",
  githubUrl: "https://github.com/DevSantiValenti",
  linkedinUrl: "https://www.linkedin.com/in/santiago-valenti-b683b2373/",
  whatsappUrl: "https://wa.me/543623701036",
  cvUrl: "/CV-SantiValenti-ATS.pdf",
  profileImage: "/images/perfil.jpeg",
  aboutImages: [
    {
      src: "/images/perfil.jpeg",
      alt: "Retrato de Santiago Valenti",
      label: "Perfil profesional"
    },
    {
      src: "/images/recibido.jpeg",
      alt: "Santiago Valenti recibiendo un diploma de egresados",
      label: "Formación técnica"
    }
  ],
  ogImage: "/og-image.jpg",
  canonicalUrl: "https://santiago-valenti.netlify.app"
};
