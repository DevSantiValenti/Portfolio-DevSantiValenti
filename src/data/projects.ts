import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "01",
    slug: "sonrie-plus",
    title: "SONRIE+",
    shortDescription: "Plataforma integral para pacientes, profesionales y administración odontológica.",
    description:
      "Plataforma full stack para gestión odontológica con áreas diferenciadas para pacientes, profesionales y administración. Centraliza búsqueda, reservas, agenda, historia clínica, pagos, documentación, reportes y comunicación.",
    year: "2026",
    category: "Healthtech / gestión",
    image: "/images/projects/sonrie-plus.png",
    screenshots: ["/images/projects/sonrie-plus.png"],
    technologies: [
      "Java 21",
      "Spring Boot 4",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Thymeleaf",
      "JavaScript",
      "Mercado Pago",
      "Twilio"
    ],
    objective:
      "Unificar la operación odontológica en una plataforma con permisos por rol y flujos conectados entre pacientes, profesionales y administración.",
    audience:
      "Pacientes, odontólogos, clínicas odontológicas, administradores de plataforma y equipos operativos que necesitan coordinar turnos, documentación, pagos y métricas.",
    sections: [
      "Inicio, información institucional, registro, login y recuperación de contraseña",
      "Área de pacientes: dashboard, búsqueda de profesionales, perfil profesional, reserva, turnos, historial, mensajes, cupones y perfil",
      "Área de profesionales: dashboard, agenda, pacientes, historias clínicas, odontograma, servicios, precios, presupuesto, educación, especialidades, horarios, documentación, pagos y reportes",
      "Área de administración: dashboard, usuarios, profesionales, servicios, procedimientos, documentación, pagos, estadísticas, publicidad, cupones y configuración legal"
    ],
    features: [
      "Búsqueda y reserva de profesionales",
      "Dashboard para pacientes, profesionales y administración",
      "Historias clínicas y odontograma",
      "Gestión de servicios, precios, presupuestos y documentación",
      "Pagos, reportes, cupones, publicidad y configuración legal",
      "Emails, WhatsApp, webhooks y autenticación social"
    ],
    role:
      "Desarrollé la solución full stack: modelé el dominio y la persistencia con entidades JPA y repositorios, implementé servicios y reglas de negocio, construí controladores y formularios MVC, integré autenticación, pagos, emails, WhatsApp y webhooks, y desarrollé las vistas Thymeleaf, estilos y scripts para los tres roles de usuario. También trabajé en gestión de archivos, validaciones, seguridad, paneles administrativos, reportes e integraciones operativas.",
    problem:
      "La gestión odontológica estaba fragmentada entre agendas, mensajes, documentación, historias clínicas y pagos separados. Esto dificultaba la coordinación entre pacientes y profesionales, aumentaba el trabajo manual y reducía la visibilidad operativa del negocio.",
    solution:
      "Una plataforma centralizada con permisos por rol y flujos conectados. El paciente puede encontrar y reservar un profesional; el profesional puede administrar su disponibilidad y la atención; y el administrador puede controlar usuarios, servicios, documentación, pagos, campañas y métricas desde paneles específicos.",
    architecture:
      "Aplicación Java 21 con Spring Boot 4, Spring MVC, Spring Security, Spring Data JPA, Hibernate, Bean Validation y MySQL. Vistas con Thymeleaf y Thymeleaf Layout Dialect, build con Maven, pruebas con JUnit/Spring Boot Test e integraciones con Google OAuth2, Mercado Pago, Unicobros, Twilio WhatsApp, SMTP y Cloudflare Tunnel para desarrollo o integraciones cuando corresponde.",
    benefits: [
      "Menos tareas manuales y menor dispersión de información",
      "Mayor facilidad para captar pacientes y convertir búsquedas en turnos",
      "Mejor organización de agendas y seguimiento de cada atención",
      "Información clínica y operativa disponible en un único sistema",
      "Cobros y pagos integrados al flujo de atención",
      "Mayor control administrativo sobre profesionales, documentación, pagos y estadísticas",
      "Base tecnológica preparada para escalar nuevas integraciones y servicios"
    ],
    integrations: [
      "Google OAuth2 para autenticación social",
      "Mercado Pago para preferencias, pagos y notificaciones",
      "Unicobros para checkout y pagos",
      "SMTP Gmail/corporativo para verificación de email y recuperación de contraseña",
      "Cloudflare Tunnel para publicación HTTPS de desarrollo o integraciones"
    ],
    status:
      "En desarrollo activo / MVP avanzado, con una base funcional amplia y preparada para evolución. La puesta en producción requiere credenciales, base de datos, dominio público, variables de entorno y servicios externos.",
    results:
      "MVP avanzado con build y pruebas de contexto Spring. No hay URL pública permanente documentada; la demo local corre en http://localhost:8080 tras configurar MySQL y variables de entorno.",
    demoUrl: null,
    githubUrl: "https://github.com/Iterart/sonrie",
    externalUrl: null,
    featured: true,
    active: true
  },
  {
    id: "02",
    slug: "turnero-facil",
    title: "Turnero Fácil",
    shortDescription: "Sistema web de gestión de turnos para clínicas odontológicas y consultorios.",
    description:
      "Sistema privado para administrar agenda, pacientes, profesionales, turnos, pagos e ingresos desde una plataforma centralizada. Incluye versión operativa para clínicas y una sincronización con SONRIE+ para mantener turnos conectados entre canales.",
    year: "2026",
    category: "Operaciones / turnos",
    image: "/images/projects/turnero-facil-agenda-uno.png",
    thumbnailImages: [
      "/images/projects/turnero-facil-agenda-uno.png",
      "/images/projects/turnero-facil-sonriete.png"
    ],
    screenshots: [
      "/images/projects/turnero-facil-agenda-uno.png",
      "/images/projects/turnero-facil-sonriete.png",
      "/images/projects/turnero-facil/agenda-diaria.png",
      "/images/projects/turnero-facil/menu-turnos.png",
      "/images/projects/turnero-facil/paciente-existente.png",
      "/images/projects/turnero-facil/paciente-nuevo.png",
      "/images/projects/turnero-facil/agenda-semanal.png",
      "/images/projects/turnero-facil/profesionales.png",
      "/images/projects/turnero-facil/pacientes-ficha.png"
    ],
    technologies: [
      "Java 21",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Thymeleaf",
      "JavaScript",
      "CSS",
      "Maven"
    ],
    objective:
      "Digitalizar y simplificar la gestión diaria de clínicas y consultorios, reemplazando planillas, agendas manuales y procesos dispersos por un sistema centralizado, rápido y fácil de usar.",
    audience:
      "Clínicas odontológicas, consultorios dentales, secretarías administrativas, profesionales de salud bucal y centros médicos que necesitan organizar turnos, pacientes e ingresos.",
    sections: [
      "Login privado",
      "Agenda diaria y semanal con filtros por fecha, profesional y especialidad",
      "Pacientes, ficha e historial de turnos",
      "Profesionales, especialidades y horarios",
      "Configuración, obras sociales, planes, feriados, proveedores y laboratorios",
      "Ingresos, pagos, totales por forma de pago e importación/exportación de pacientes",
      "Sincronización con SONRIE+"
    ],
    features: [
      "Alta, modificación, confirmación, anulación y liberación de turnos",
      "Sobreturnos y bloqueo de horarios no disponibles",
      "Alta rápida de pacientes, búsqueda AJAX e historial",
      "Control de presentismo y registro de pagos",
      "Importación y exportación de pacientes mediante CSV",
      "Sincronización bidireccional con SONRIE+"
    ],
    role:
      "Diseñé y desarrollé la aplicación full stack: modelé entidades y relaciones, implementé la lógica de agenda, construí controladores, servicios, repositorios y vistas Thymeleaf, agregué búsquedas y actualizaciones AJAX, configuré autenticación, emails, gestión de pacientes y profesionales, ingresos, importación/exportación de datos, responsive design y la integración de turnos con SONRIE+.",
    problem:
      "La operación dependía de agendas manuales o sistemas desconectados, lo que dificultaba conocer la disponibilidad real, consultar antecedentes del paciente, evitar colisiones y mantener alineados los turnos gestionados desde distintos canales.",
    solution:
      "Un turnero centralizado con agenda por profesional, disponibilidad configurable, validación de colisiones, sobreturnos controlados, estados de presentismo, fichas de pacientes, historial e ingresos. La integración con SONRIE+ permite crear, actualizar o liberar turnos desde la plataforma y sincronizar bloqueos o liberaciones del turnero.",
    architecture:
      "Aplicación Java/Spring con Spring MVC, Spring Security, Spring Data JPA/Hibernate, MySQL, Thymeleaf, JavaScript y CSS propio. La sincronización entrante con SONRIE+ se expone en POST /api/integrations/sonrie/turnos con autenticación Bearer e idempotencia; la sincronización saliente usa endpoints de health, bloqueo y liberación configurados.",
    benefits: [
      "Ahorro de tiempo administrativo",
      "Menos errores en carga de turnos y pacientes",
      "Mejor organización de agenda y disponibilidad",
      "Acceso desde computadora, tablet o celular",
      "Control claro de ingresos por día y por mes",
      "Gestión centralizada de pacientes y profesionales",
      "Continuidad entre turnos originados en SONRIE+ y los gestionados internamente",
      "Base extensible para recordatorios, agenda online, reportes y multi-sucursal"
    ],
    integrations: [
      "SONRIE+ mediante sincronización bidireccional",
      "Endpoint entrante: /api/integrations/sonrie/turnos",
      "Botón de WhatsApp para recordatorios",
      "Importación/exportación CSV",
      "Base de datos MySQL",
      "Demo local: http://localhost:8081"
    ],
    status:
      "Producto funcional en desarrollo y con flujo operativo central implementado. En uso real por clínicas odontológicas, con entornos que superan mil y tres mil pacientes cargados.",
    results:
      "Sistema privado funcional, accesible mediante link personalizado. No hay demo pública declarada; para desarrollo local se usa http://localhost:8081.",
    demoUrl: null,
    githubUrl: null,
    externalUrl: null,
    featured: true,
    active: true
  },
  {
    id: "03",
    slug: "gimnasios",
    title: "Sistema Gestor de Gimnasios",
    shortDescription: "Sistema web de gestión para gimnasios, socios, cuotas, caja y estadísticas.",
    description:
      "Sistema administrativo desarrollado a medida para gimnasios. Permite gestionar socios, cuotas, ingresos, caja, gastos, actividades y estadísticas desde una plataforma centralizada preparada para uso diario.",
    year: "2026",
    category: "Gestión deportiva",
    image: "/images/projects/gimnasios-halcon.png",
    thumbnailImages: ["/images/projects/gimnasios-clubfit.png", "/images/projects/gimnasios-halcon.png"],
    screenshots: [
      "/images/projects/gimnasios-clubfit.png",
      "/images/projects/gimnasios-halcon.png",
      "/images/projects/gimnasios/socios-listado.png",
      "/images/projects/gimnasios/control-acceso-cuota-al-dia.png",
      "/images/projects/gimnasios/control-acceso-cuota-vencida.png",
      "/images/projects/gimnasios/ingresos-del-dia.png",
      "/images/projects/gimnasios/socios-eliminados.png",
      "/images/projects/gimnasios/actividades-listado.png",
      "/images/projects/gimnasios/caja-movimientos.png",
      "/images/projects/gimnasios/gastos-listado.png",
      "/images/projects/gimnasios/estadisticas-ingresos.png",
      "/images/projects/gimnasios/estadisticas-cuotas-inscripciones.png"
    ],
    technologies: [
      "Java 21",
      "Spring Boot 3.5.7",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Thymeleaf",
      "DataTables",
      "Bootstrap",
      "OpenPDF",
      "JavaScript"
    ],
    objective:
      "Digitalizar la operatoria diaria del gimnasio y reemplazar controles manuales por una herramienta única para socios, vencimientos, cobros, caja y estadísticas.",
    audience:
      "Gimnasios, centros de entrenamiento, boxes, academias o clubes deportivos; usuarios administrativos, recepcionistas, dueños y personal encargado de cobros o caja.",
    sections: [
      "Acceso / Login",
      "Inicio, socios, nuevo socio y socios eliminados",
      "Abonar cuota, editar socio y editar cuota",
      "Ingresos de hoy, caja y pago diario",
      "Actividades, gastos y estadísticas"
    ],
    features: [
      "Registro y edición de socios",
      "Alta de socio en dos pasos",
      "Control de cuotas pagadas y pendientes",
      "Registro de pagos sin duplicación por doble envío",
      "Caja con filtros por fecha, tipo de movimiento y forma de pago",
      "Gastos, actividades, valores de cuota y estadísticas mensuales/anuales",
      "Autenticación y roles de usuario"
    ],
    role:
      "Me encargué del análisis, desarrollo e implementación del sistema completo: modelé entidades, creé controladores, servicios y repositorios, armé vistas con Thymeleaf, configuré MySQL y seguridad con roles, y ajusté la experiencia visual para desktop y mobile. También implementé mejoras surgidas del uso real: zona horaria Argentina en caja, prevención de movimientos duplicados, separación entre datos de socio y fechas de cuota, auditoría básica y ajustes responsive.",
    problem:
      "El gimnasio necesitaba ordenar socios, cuotas, vencimientos, ingresos y gastos. El control manual podía generar errores, movimientos duplicados, falta de trazabilidad y pérdida de tiempo al revisar pagos, deuda, caja y gastos.",
    solution:
      "Aplicación web administrativa con registro centralizado de socios, cuotas y movimientos de caja. Cada pago queda asociado a socio, actividad, monto, forma de pago y fecha/hora de creación con zona horaria de Argentina. La caja permite filtrar movimientos, ver totales y eliminar registros según permisos.",
    architecture:
      "Aplicación Java 21 con Spring Boot 3.5.7, Spring MVC, Spring Security, Spring Data JPA, Hibernate, MySQL, Thymeleaf, Thymeleaf Layout Dialect, DataTables, Bootstrap, Maven y JavaScript. OpenPDF queda preparado para recibos PDF.",
    benefits: [
      "Menos errores administrativos en cobros y vencimientos",
      "Mayor control sobre caja diaria",
      "Mejor trazabilidad de movimientos y usuarios",
      "Ahorro de tiempo en tareas repetitivas",
      "Consulta rápida de socios pagados, pendientes o eliminados",
      "Información económica organizada para tomar decisiones",
      "Sistema adaptable a reglas reales del gimnasio"
    ],
    integrations: [
      "Base de datos MySQL",
      "OpenPDF preparado para recibos PDF",
      "Despliegue en servidor Ubuntu"
    ],
    status:
      "Proyecto funcional y en uso/etapa productiva, con mejoras continuas según feedback real del cliente.",
    results:
      "Cuenta con funciones principales operativas y continúa evolucionando en experiencia de usuario, trazabilidad y comportamiento administrativo.",
    demoUrl: null,
    githubUrl: null,
    externalUrl: null,
    featured: true,
    active: true
  },
  {
    id: "04",
    slug: "electrodentalnea",
    title: "ElectrodentalNea",
    shortDescription: "E-commerce para equipamiento e insumos odontológicos.",
    description:
      "Plataforma de e-commerce para equipamiento e insumos odontológicos. Incluye catálogo, detalle de producto, ofertas, carrito, checkout, pagos, envíos, panel administrativo y acceso a servicio técnico DentTech.",
    year: "2026",
    category: "E-commerce odontológico",
    image: "/images/projects/electrodentalnea.png",
    thumbnailImages: ["/images/projects/electrodentalnea.png"],
    screenshots: [
      "/images/projects/electrodentalnea.png",
      "/images/projects/electrodentalnea/productos-destacados.png",
      "/images/projects/electrodentalnea/marcas-footer.png",
      "/images/projects/electrodentalnea/catalogo-productos.png",
      "/images/projects/electrodentalnea/categoria-compresores.png",
      "/images/projects/electrodentalnea/detalle-producto.png",
      "/images/projects/electrodentalnea/carrito.png",
      "/images/projects/electrodentalnea/panel-control.png",
      "/images/projects/electrodentalnea/admin-productos.png"
    ],
    technologies: [
      "Java 21",
      "Spring Boot 4.0.6",
      "Spring MVC",
      "Spring Security",
      "OAuth2 Client",
      "Spring Data JPA",
      "Hibernate",
      "MySQL",
      "Thymeleaf",
      "Tailwind CSS",
      "JavaScript",
      "Mercado Pago",
      "OCA e-Pak",
      "Apache POI"
    ],
    objective:
      "Crear un canal digital propio para catálogo, pedidos, pagos online, envíos y administración interna de productos odontológicos.",
    audience:
      "Profesionales odontológicos, consultorios, clínicas, laboratorios dentales y equipo interno de ElectrodentalNea.",
    sections: [
      "Inicio",
      "Catálogo / productos",
      "Detalle de producto",
      "Ofertas",
      "Carrito y finalizar compra",
      "Servicio técnico DentTech",
      "Contacto",
      "Panel de administración"
    ],
    features: [
      "Catálogo por categorías odontológicas",
      "Buscador y filtros de productos",
      "Detalle de producto, ofertas y stock",
      "Carrito y checkout",
      "Mercado Pago Checkout Pro y webhooks",
      "Cotización, creación de envíos y etiquetas con OCA e-Pak",
      "Importación/exportación de productos en Excel",
      "Panel administrativo protegido"
    ],
    role:
      "Diseñé y desarrollé la solución end-to-end: modelé productos, clientes, pedidos, pagos, envíos, descuentos y stock; implementé lógica de negocio y controladores; construí vistas públicas y panel administrativo; integré Mercado Pago y OCA; desarrollé checkout y reservas de stock; agregué gestión de imágenes, configuración de tienda, estados operativos, pruebas automatizadas, responsive, SEO básico y estados de error.",
    problem:
      "La operación necesitaba pasar de una gestión principalmente manual de consultas y pedidos a un canal digital propio, con catálogo actualizado, disponibilidad de stock, pagos online y seguimiento operativo. También era necesario ordenar la administración interna y conectar venta con logística.",
    solution:
      "Una plataforma modular de e-commerce con arquitectura por capas. El cliente descubre productos, filtra, agrega al carrito, completa datos, elige entrega y paga. El sistema crea el pedido, reserva stock y sincroniza el pago con Mercado Pago mediante retorno y webhook. Para logística calcula costo y crea envío con OCA. El equipo administra catálogo y pedidos desde un panel protegido.",
    architecture:
      "Aplicación Java 21 con Spring Boot 4.0.6, Spring MVC, Spring Data JPA/Hibernate, Spring Security, OAuth2 Client, MySQL, Thymeleaf, Tailwind CSS, JavaScript, Material Symbols, Mercado Pago Checkout Pro, OCA e-Pak, Apache POI y Maven.",
    benefits: [
      "Nuevo canal de venta disponible 24/7",
      "Menos carga operativa para tomar y organizar pedidos",
      "Mayor claridad de catálogo, precios, ofertas y stock",
      "Cobros online centralizados y trazables",
      "Integración entre pedido, reserva de stock y envío",
      "Mejor presentación de marca y proveedores",
      "Base preparada para escalar catálogo y operación"
    ],
    integrations: [
      "Mercado Pago Checkout Pro",
      "Mercado Pago Webhooks",
      "OCA e-Pak para envíos y etiquetas",
      "Apache POI para Excel",
      "Servicio técnico DentTech"
    ],
    status:
      "Implementado y preparado para operación productiva, con configuración de producción para dominio, Mercado Pago y OCA. El repositorio continúa en evolución con mejoras de UX, operación y cobertura de pruebas.",
    results:
      "E-commerce productivo preparado para vender online, gestionar stock, cobrar y operar pedidos con logística integrada.",
    demoUrl: "https://electrodentalnea.com.ar",
    githubUrl: "https://github.com/DevSantiValenti/electrodentalNea",
    externalUrl: "https://electrodentalnea.com.ar",
    featured: true,
    active: true
  },
  {
    id: "05",
    slug: "denttech",
    title: "DentTech",
    shortDescription: "Landing institucional y comercial para ingeniería electrónica odontológica.",
    description:
      "Landing para una empresa argentina dedicada al diseño, desarrollo y fabricación de electrónica aplicada a la odontología. Reposiciona la marca desde servicio técnico tradicional hacia I+D, fabricación y soporte especializado.",
    year: "2026",
    category: "Landing institucional",
    image: "/images/projects/denttech.png",
    screenshots: ["/images/projects/denttech.png"],
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive design",
      "Intersection Observer API",
      "Google Fonts",
      "Google Maps",
      "YouTube",
      "WhatsApp"
    ],
    objective:
      "Construir una landing clara, moderna y orientada a conversión que comunique que DentTech no solo repara tecnología odontológica, sino que la desarrolla.",
    audience:
      "Odontólogos, clínicas, técnicos especializados, distribuidores de repuestos odontológicos, fabricantes y empresas del sector dental en Argentina y Latinoamérica.",
    sections: [
      "Header y navegación responsive",
      "Hero principal con posicionamiento de marca",
      "Empresa, historia, misión y visión",
      "Productos DentTech",
      "Canal de YouTube con videos técnicos",
      "Capacidades técnicas y equipamiento compatible",
      "Metodología de trabajo y métricas de confianza",
      "CTA final y footer con redes, mapa, emails y contacto"
    ],
    features: [
      "Landing responsive desktop/tablet/mobile",
      "Header sticky y menú hamburguesa mobile",
      "Productos con imágenes, funciones, compatibilidades y links de compra",
      "Videos técnicos de YouTube",
      "Mapa embebido de Google Maps",
      "Footer con redes y emails clickeables",
      "Botón flotante de WhatsApp",
      "Favicon personalizado"
    ],
    role:
      "Desarrollé y adapté la landing completa: reorganicé el mensaje principal, rediseñé el hero, incorporé historia, misión y visión, creé una sección de productos con imágenes reales y links de compra, agregué videos de YouTube, mejoré el menú mobile, actualicé footer con redes, emails y mapa, integré logos/assets de marca y ajusté el responsive.",
    problem:
      "El sitio anterior comunicaba principalmente reparación y mantenimiento, lo que limitaba el posicionamiento real de DentTech como empresa de desarrollo y fabricación de electrónica odontológica.",
    solution:
      "Una landing institucional y comercial con mensaje de marca más potente, diseño oscuro técnico, productos reales, información clara de funciones y compatibilidades, links de compra, videos de soporte, contacto inmediato y navegación mobile cuidada.",
    architecture:
      "Sitio estático con HTML5, CSS3 y JavaScript vanilla, animaciones con Intersection Observer, Google Fonts, Google Maps embed y links externos a YouTube, WhatsApp, ElectrodentalNea y redes sociales.",
    benefits: [
      "Mejora el posicionamiento de DentTech como empresa tecnológica",
      "Aumenta la confianza de clientes, técnicos y distribuidores",
      "Reduce fricción para consultar o comprar productos",
      "Centraliza información técnica, videos y canales de contacto",
      "Refuerza identidad de marca argentina con proyección regional",
      "Diferencia a DentTech frente a competidores que solo ofrecen reparación o repuestos"
    ],
    integrations: [
      "Catálogo DentTech en ElectrodentalNea",
      "Productos individuales en electrodentalnea.com.ar",
      "Canal de YouTube @DENTTECH518",
      "Videos técnicos de instalación",
      "Facebook e Instagram",
      "Google Maps",
      "WhatsApp: https://wa.me/543624541102"
    ],
    status:
      "Proyecto desarrollado y funcional como landing estática. Terminado / en etapa de ajuste de contenido final y publicación.",
    results:
      "Landing con contenido institucional, catálogo visual de productos, links de compra, videos, mapa, contacto y diseño responsive.",
    demoUrl: null,
    githubUrl: null,
    externalUrl:
      "https://electrodentalnea.com.ar/catalogo?categoria=repuestos&subcategoria=plaquetas-electronicas-sillones",
    featured: false,
    active: true
  }
];
