import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "01",
    slug: "sonrie-plus",
    title: "SONRIE+",
    shortDescription: "Plataforma integral orientada al sector odontológico.",
    description:
      "Sistema web pensado como una plataforma integral para operaciones del sector odontológico. El alcance funcional definitivo queda editable para incorporar módulos reales, capturas y resultados cuando estén documentados.",
    year: "Editable",
    category: "Healthtech / gestión",
    image: "/images/projects/sonrie-plus.jpg",
    screenshots: ["/images/projects/sonrie-plus.jpg"],
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL", "JavaScript"],
    features: [
      "Gestión odontológica integral, detalle funcional editable",
      "Módulos administrativos preparados para documentar",
      "Base para flujos de pacientes, turnos o tratamiento según alcance real",
      "Panel web y operación centralizada"
    ],
    problem:
      "Centralizar procesos del sector odontológico en un sistema web mantenible, con información ordenada y flujos preparados para operación diaria.",
    solution:
      "Una aplicación full stack con foco backend, arquitectura por módulos y una interfaz administrativa clara. Los detalles específicos quedan listos para completarse con información real.",
    architecture:
      "Arquitectura editable basada en backend Java/Spring Boot, APIs REST, persistencia relacional y frontend web.",
    results: "Resultados y métricas pendientes de documentar con datos reales.",
    demoUrl: null,
    githubUrl: null,
    externalUrl: null,
    featured: true
  },
  {
    id: "02",
    slug: "turnero-facil",
    title: "Turnero Fácil",
    shortDescription: "Sistema de gestión de turnos.",
    description:
      "Producto orientado a organizar reservas, disponibilidad y atención por turnos. Preparado para mostrar reglas de negocio, pantallas y flujos reales cuando estén disponibles.",
    year: "Editable",
    category: "Operaciones / turnos",
    image: "/images/projects/turnero-facil.jpg",
    screenshots: ["/images/projects/turnero-facil.jpg"],
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Gestión de turnos, detalle editable",
      "Organización de disponibilidad y agenda",
      "Interfaz para operación diaria",
      "Estructura preparada para integraciones externas"
    ],
    problem:
      "Reducir fricción en la gestión manual de turnos y dar visibilidad sobre disponibilidad, reservas y cambios.",
    solution:
      "Sistema web enfocado en reglas de agenda, operación simple y una base técnica preparada para crecer.",
    architecture:
      "Arquitectura editable de aplicación web con backend Java/Spring Boot, base relacional y frontend estático o server-rendered según implementación real.",
    results: "Resultados pendientes de documentar con métricas o casos reales.",
    demoUrl: null,
    githubUrl: null,
    externalUrl: null,
    featured: true
  },
  {
    id: "03",
    slug: "gimnasios",
    title: "Sistemas para gimnasios",
    shortDescription: "Sistemas de gestión para gimnasios.",
    description:
      "Línea de sistemas de gestión para gimnasios, preparada para mostrar módulos comerciales, administrativos y operativos sin inventar clientes ni resultados.",
    year: "Editable",
    category: "Gestión comercial",
    image: "/images/projects/gimnasios.jpg",
    screenshots: ["/images/projects/gimnasios.jpg"],
    technologies: ["Java", "Spring Boot", "MySQL", "Bootstrap", "Docker"],
    features: [
      "Gestión administrativa, detalle editable",
      "Base para socios, planes o pagos según alcance real",
      "Panel de operación para equipos internos",
      "Despliegue preparado para entorno web"
    ],
    problem:
      "Ordenar la operación de gimnasios en una herramienta centralizada que evite planillas dispersas y procesos manuales.",
    solution:
      "Sistema web modular para gestión interna, con foco en datos confiables, mantenimiento y despliegue simple.",
    architecture:
      "Arquitectura editable basada en aplicación web full stack, base de datos relacional y despliegue en infraestructura Linux/VPS o similar.",
    results: "Resultados comerciales y operativos pendientes de completar con información real.",
    demoUrl: null,
    githubUrl: null,
    externalUrl: null,
    featured: true
  },
  {
    id: "04",
    slug: "electrodentalnea",
    title: "ElectrodentalNea",
    shortDescription: "Proyecto preparado para documentación futura.",
    description:
      "Espacio reservado para incorporar el alcance real, capturas, stack y caso de uso de ElectrodentalNea.",
    year: "Editable",
    category: "Proyecto comercial",
    image: "/images/projects/electrodentalnea.jpg",
    screenshots: ["/images/projects/electrodentalnea.jpg"],
    technologies: ["Stack editable"],
    features: ["Agregar funcionalidades reales", "Agregar capturas reales", "Agregar links reales"],
    problem: "Problema pendiente de documentar.",
    solution: "Solución pendiente de documentar.",
    architecture: "Arquitectura pendiente de documentar.",
    results: "Resultados pendientes de documentar.",
    demoUrl: null,
    githubUrl: null,
    externalUrl: null,
    featured: false
  }
];
