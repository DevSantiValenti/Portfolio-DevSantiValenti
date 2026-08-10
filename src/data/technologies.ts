import type { TechnologyCategory } from "./types";

export const technologies: TechnologyCategory[] = [
  {
    category: "Backend",
    icon: "server",
    description: "Diseño de APIs, lógica de negocio y aplicaciones Java mantenibles.",
    items: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "Hibernate/JPA", "REST APIs"]
  },
  {
    category: "Frontend",
    icon: "code-2",
    description: "Interfaces web claras para productos, paneles y sistemas internos.",
    items: ["JavaScript", "HTML", "CSS", "Thymeleaf", "Bootstrap", "React"]
  },
  {
    category: "Database",
    icon: "database",
    description: "Modelado relacional y persistencia para aplicaciones web.",
    items: ["MySQL"]
  },
  {
    category: "DevOps / Infrastructure",
    icon: "boxes",
    description: "Entornos de despliegue, versionado e infraestructura web.",
    items: ["Docker", "Linux", "Git", "GitHub", "Nginx", "VPS", "Netlify"]
  },
  {
    category: "Integrations",
    icon: "plug",
    description: "Conexión con servicios externos y flujos de autenticación o pago.",
    items: ["OAuth2", "Mercado Pago", "Unicobros", "OCA API", "APIs externas"]
  }
];
