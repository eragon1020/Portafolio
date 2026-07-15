// ==========================================================
// Diccionario de traducción ES / EN
// Cada clave corresponde a un atributo data-i18n en index.html
// ==========================================================
const translations = {
  es: {
    nav_home: "Inicio",
    nav_about: "Acerca",
    nav_cv: "Trayectoria",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    status_label: "disponible para trabajar",

    hero_eyebrow: "REQ-000 · sesión iniciada",
    hero_pitch: "Estudiante de Ingeniería de Software (8° semestre) con base real en soporte técnico e infraestructura IT, que ahora construye APIs REST bajo arquitectura MVC y aplicaciones con Java, JavaScript y Node.js. Resuelvo incidencias desde 2023; ahora también las prevengo con código — y desde 2026 sumo el desarrollo de videojuegos con Unity y C# como parte de mi bootcamp en Generation.",
    btn_view_projects: "Ver proyectos",
    btn_download_cv: "Descargar CV",
    btn_sound_on: "Música",
    social_email: "Correo",

    about_title: "Acerca de mí",
    about_p1: "Empecé del lado del \u201calgo no funciona\u201d: como técnico en mantenimiento de equipos de cómputo y luego en mesas de ayuda, viendo de cerca qué se rompe y por qué. Esa experiencia \u2014tickets, SLA, migraciones de datos, soporte a usuarios reales\u2014 me enseñó a diagnosticar antes de actuar, una costumbre que llevo directo al código.",
    about_p2: "Hoy curso Ingeniería de Software en UNINPAHU y estoy construyendo mi camino como desarrollador: bases de datos relacionales y no relacionales, APIs REST bajo MVC, y proyectos como una arquitectura de conexión IoT con MongoDB. Trabajo con metodologías ágiles (SCRUM) y me interesa especialmente el desarrollo backend y de aplicaciones móviles.",
    about_p4: "En paralelo estoy en el <strong>bootcamp de Generation</strong>, donde descubrí el desarrollo de videojuegos con <strong>Unity y C#</strong>. Me engancha la parte de diseñar una mecánica, verla fallar, y ajustarla hasta que \u201cse siente bien\u201d jugarla \u2014 es el mismo instinto de diagnóstico que traigo del soporte técnico, aplicado a resolver problemas de jugabilidad en vez de tickets.",
    about_p3: "Busco mi primera posición como <strong>Desarrollador Junior</strong> en un equipo donde pueda seguir resolviendo problemas complejos, esta vez desde el código, no solo desde el ticket.",

    cv_title: "Trayectoria",
    cv_hint: "Log de experiencia y formación, más reciente primero.",
    cv_exp_heading: "// experiencia",
    cv_edu_heading: "// educación",
    cv_cert_heading: "// certificados",

    edu0_date: "2026 – actualidad",
    edu0_title: "Bootcamp de Desarrollo de Videojuegos (Unity)",
    edu0_desc: "Unity y C#: mecánicas de juego, patrón GameManager, UI en tiempo real y Git.",
    edu1_desc: "Continuación directa de la Tecnología en Desarrollo de Software (mismo programa).",

    exp1_date: "Ene 2025 – Jul 2025",
    exp1_title: "Soporte Técnico y en Sitio",
    exp1_desc: "Resolución de incidencias por tickets y soporte a Microsoft 365 (SharePoint, Planner).",
    exp2_date: "Ago 2024 – Ene 2025",
    exp2_title: "Practicante de Soporte Nivel 1 · Mesa de Ayuda",
    exp2_desc: "Mantenimiento de bases de datos internas y soporte en sitio a hardware y software.",
    exp3_date: "Nov 2023 – Mar 2024",
    exp3_title: "Auxiliar de Sistemas",
    exp3_desc: "Migración de datos entre plataformas y mantenimiento de bases operativas.",

    edu1_date: "2022 – actualidad",
    edu1_title: "Ingeniería de Software · 8° semestre",
    edu2_title: "Tecnología en Desarrollo de Software",
    edu3_title: "Técnico en Mantenimiento de Equipos de Cómputo",

    cert1: "Certificado HTML, CSS y JavaScript Intermedio",
    cert2: "Fundamentos de la Arquitectura de Equipos IT",
    cert3: "Fundamentos de Redes (Cisco CCNA)",

    skills_title: "Habilidades",
    skills_group_tech: "Técnicas",
    skills_group_gamedev: "Game Dev",
    skills_group_tools: "Metodologías & herramientas",
    skills_group_soft: "Blandas",
    skills_group_lang: "Idiomas",
    tag_ugui: "UGUI / Canvas",
    tag_gamemanager: "Patrón GameManager",
    tag_prototyping: "Prototipado rápido",
    tag_db_admin: "Administración de BD",
    tag_hw_support: "Soporte de Hardware/Software",
    tag_ticket_platforms: "Plataformas de tickets",
    tag_teamwork: "Trabajo en equipo",
    tag_problem_solving: "Resolución de problemas",
    tag_adaptability: "Adaptabilidad",
    tag_communication: "Comunicación asertiva",
    tag_detail: "Orientación al detalle",
    tag_lang_es: "Español · Nativo",
    tag_lang_en: "Inglés · A2",

    projects_title: "Proyectos",
    projects_hint: "Una mezcla de backend y desarrollo de videojuegos. Los proyectos de Unity son <strong>prototipos actualmente en desarrollo</strong>, parte de mi bootcamp en Generation, jugables en itch.io.",
    filter_all: "Todos",
    filter_web: "Backend / Web",
    filter_unity: "Unity",

    proj1_media_label: "captura / gif del proyecto",
    proj1_title: "Arquitectura de Conexión IoT con Backend MVC",
    proj1_badge: "en producción",
    proj1_desc: "Backend estructurado bajo arquitectura Modelo-Vista-Controlador para gestionar datos de sensores IoT en tiempo real. Diseño y despliegue de múltiples endpoints REST para la transmisión y almacenamiento óptimo de información en una base de datos no relacional.",
    proj1_challenge_label: "Reto resuelto:",
    proj1_challenge_text: "centralizar y estandarizar la ingesta de datos de múltiples sensores sin perder consistencia ni tiempos de respuesta.",
    proj1_link: "Ver repositorio →",

    proj2_title: "Feed the Animals",
    proj2_badge: "prototipo · jugable",
    proj2_desc: "Prototipo 3D de Unity (Challenge del bootcamp de Generation) donde el objetivo es alimentar animales que aparecen en carriles laterales con rotaciones automáticas. Movimiento del personaje en ejes vertical y horizontal, sistema de vidas y puntuación gestionado por un <code>GameManager</code> central, y barras de vida/energía con Sliders de UI en espacio de mundo.",
    proj2_challenge_label: "Reto resuelto:",
    proj2_challenge_text: "sincronizar spawns dinámicos con rotaciones aleatorias sin que el objeto de juego pierda consistencia visual ni de colisiones.",
    proj2_link: "Jugar en itch.io →",
    proj_repo_link: "Ver repositorio →",

    proj3_title: "Jump&Dodge",
    proj3_badge: "prototipo · jugable",
    proj3_desc: "Prototipo de reflejos y control de salto: el jugador debe saltar y esquivar obstáculos que aparecen de forma continua, aumentando la dificultad conforme avanza la partida. Enfocado en pulir la sensación de salto (input responsivo, sin retardo perceptible).",
    proj3_link: "Jugar en itch.io →",

    proj4_title: "Transición de Colores",
    proj4_badge: "prototipo · jugable",
    proj4_desc: "Reto de lógica y percepción centrado en el manejo de estados y transiciones de color en tiempo real dentro de Unity, practicando control de eventos y feedback visual inmediato para el jugador.",
    proj4_link: "Jugar en itch.io →",

    proj5_media_label: "sin captura aún · disponible en itch.io",
    proj5_title: "Guerra de Balones",
    proj5_badge: "prototipo · jugable",
    proj5_desc: "Minijuego de acción construido en Unity como parte de los desafíos del bootcamp, enfocado en mecánicas de lanzamiento y colisión entre objetos.",
    proj5_link: "Jugar en itch.io →",

    proj6_title: "Fast Formula",
    proj6_badge: "equipo · game jam",
    proj6_desc: "Juego 2D creado en equipo (4 personas) para la game jam \"You Really Shouldn't Mix Those\". El jugador combina elementos arrastrando y soltando para preparar las mezclas químicas que le piden sus compañeros, contrarreloj y bajo presión antes de quedarse sin oportunidades.",
    proj6_role_label: "Mi rol:",
    proj6_role_text: "colaborador en la integración del backend con el frontend, conectando la lógica del juego con la interfaz para que las mezclas y el estado de la partida se reflejaran correctamente.",
    proj6_link: "Jugar en itch.io →",

    contact_title: "Contacto",
    contact_pitch: "¿Un rol de Desarrollador Junior abierto? Escríbeme, con gusto conversamos.",
    contact_label_email: "correo",
    contact_label_phone: "teléfono",
    contact_label_github: "github",
    contact_label_linkedin: "linkedin",
    contact_label_itch: "itch.io",
    contact_location_prefix: "Bogotá D.C., Colombia · última actualización:",

    footer_top: "volver arriba ↑"
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_cv: "Timeline",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    status_label: "available for work",

    hero_eyebrow: "REQ-000 · session started",
    hero_pitch: "Software Engineering student (8th semester) with real-world roots in technical support and IT infrastructure, now building REST APIs under MVC architecture and applications with Java, JavaScript and Node.js. I've been solving incidents since 2023; now I also prevent them with code — and since 2026 I've added Unity and C# game development as part of my bootcamp at Generation.",
    btn_view_projects: "View projects",
    btn_download_cv: "Download CV",
    btn_sound_on: "Music",
    social_email: "Email",

    about_title: "About Me",
    about_p1: "I started on the \u201csomething's broken\u201d side of things: as a computer hardware maintenance technician and later on help desks, seeing firsthand what breaks and why. That experience \u2014tickets, SLAs, data migrations, real user support\u2014 taught me to diagnose before acting, a habit I now bring straight into code.",
    about_p2: "I'm currently studying Software Engineering at UNINPAHU and building my path as a developer: relational and non-relational databases, REST APIs under MVC, and projects like an IoT connection architecture with MongoDB. I work with agile methodologies (SCRUM) and I'm especially interested in backend and mobile app development.",
    about_p4: "In parallel I'm in the <strong>Generation bootcamp</strong>, where I discovered game development with <strong>Unity and C#</strong>. What hooks me is designing a mechanic, watching it fail, and tuning it until it \u201cfeels right\u201d to play \u2014 the same diagnostic instinct I bring from tech support, now applied to gameplay problems instead of tickets.",
    about_p3: "I'm looking for my first role as a <strong>Junior Developer</strong> on a team where I can keep solving complex problems \u2014 this time from the code, not just from the ticket.",

    cv_title: "Timeline",
    cv_hint: "Log of experience and education, most recent first.",
    cv_exp_heading: "// experience",
    cv_edu_heading: "// education",
    cv_cert_heading: "// certifications",

    edu0_date: "2026 – present",
    edu0_title: "Game Development Bootcamp (Unity)",
    edu0_desc: "Unity and C#: game mechanics, the GameManager pattern, real-time UI, and Git.",
    edu1_desc: "Direct continuation of the Software Development Technology program (same track).",

    exp1_date: "Jan 2025 – Jul 2025",
    exp1_title: "Technical & On-Site Support",
    exp1_desc: "Resolved incidents through a ticketing system and supported Microsoft 365 (SharePoint, Planner).",
    exp2_date: "Aug 2024 – Jan 2025",
    exp2_title: "Level 1 Support Intern · Help Desk",
    exp2_desc: "Maintained internal databases and provided on-site hardware and software support.",
    exp3_date: "Nov 2023 – Mar 2024",
    exp3_title: "Systems Assistant",
    exp3_desc: "Migrated data between platforms and maintained operational databases.",

    edu1_date: "2022 – present",
    edu1_title: "Software Engineering · 8th semester",
    edu2_title: "Software Development Technology",
    edu3_title: "Computer Hardware Maintenance Technician",

    cert1: "Intermediate HTML, CSS & JavaScript Certificate",
    cert2: "IT Team Architecture Fundamentals",
    cert3: "Networking Fundamentals (Cisco CCNA)",

    skills_title: "Skills",
    skills_group_tech: "Technical",
    skills_group_gamedev: "Game Dev",
    skills_group_tools: "Methodologies & tools",
    skills_group_soft: "Soft skills",
    skills_group_lang: "Languages",
    tag_ugui: "UGUI / Canvas",
    tag_gamemanager: "GameManager pattern",
    tag_prototyping: "Rapid prototyping",
    tag_db_admin: "Database Administration",
    tag_hw_support: "Hardware/Software Support",
    tag_ticket_platforms: "Ticketing platforms",
    tag_teamwork: "Teamwork",
    tag_problem_solving: "Problem solving",
    tag_adaptability: "Adaptability",
    tag_communication: "Assertive communication",
    tag_detail: "Attention to detail",
    tag_lang_es: "Spanish · Native",
    tag_lang_en: "English · A2",

    projects_title: "Projects",
    projects_hint: "A mix of backend and game development. The Unity projects are <strong>prototypes currently in development</strong>, part of my bootcamp at Generation, playable on itch.io.",
    filter_all: "All",
    filter_web: "Backend / Web",
    filter_unity: "Unity",

    proj1_media_label: "project screenshot / gif",
    proj1_title: "IoT Connection Architecture with MVC Backend",
    proj1_badge: "in production",
    proj1_desc: "Backend structured under a Model-View-Controller architecture to manage real-time data from IoT sensors. Designed and deployed multiple REST endpoints for optimal transmission and storage of information in a non-relational database.",
    proj1_challenge_label: "Challenge solved:",
    proj1_challenge_text: "centralizing and standardizing data ingestion from multiple sensors without losing consistency or response time.",
    proj1_link: "View repository →",

    proj2_title: "Feed the Animals",
    proj2_badge: "prototype · playable",
    proj2_desc: "3D Unity prototype (Generation bootcamp challenge) where the goal is to feed animals that spawn in side lanes with automatic rotations. Vertical and horizontal character movement, a lives/score system managed by a central <code>GameManager</code>, and world-space UI Sliders for health/energy bars.",
    proj2_challenge_label: "Challenge solved:",
    proj2_challenge_text: "syncing dynamic spawns with random rotations without the game object losing visual or collision consistency.",
    proj2_link: "Play on itch.io →",
    proj_repo_link: "View repository →",

    proj3_title: "Jump&Dodge",
    proj3_badge: "prototype · playable",
    proj3_desc: "A reflex and jump-control prototype: the player must jump and dodge continuously spawning obstacles, with difficulty ramping up as the run progresses. Focused on polishing jump feel (responsive input, no perceptible lag).",
    proj3_link: "Play on itch.io →",

    proj4_title: "Color Transition",
    proj4_badge: "prototype · playable",
    proj4_desc: "A logic and perception challenge centered on real-time color state and transition handling in Unity, practicing event control and immediate visual feedback for the player.",
    proj4_link: "Play on itch.io →",

    proj5_media_label: "no screenshot yet · playable on itch.io",
    proj5_title: "Guerra de Balones",
    proj5_badge: "prototype · playable",
    proj5_desc: "An action minigame built in Unity as part of the bootcamp challenges, focused on throwing and collision mechanics between objects.",
    proj5_link: "Play on itch.io →",

    proj6_title: "Fast Formula",
    proj6_badge: "team · game jam",
    proj6_desc: "A 2D game built with a 4-person team for the \"You Really Shouldn't Mix Those\" game jam. The player combines elements via drag-and-drop to prepare the chemical mixtures requested by teammates, against the clock and under pressure before running out of chances.",
    proj6_role_label: "My role:",
    proj6_role_text: "collaborator on backend-frontend integration, connecting the game logic to the interface so mixtures and match state were reflected correctly.",
    proj6_link: "Play on itch.io →",

    contact_title: "Contact",
    contact_pitch: "Have a Junior Developer role open? Reach out, I'd love to talk.",
    contact_label_email: "email",
    contact_label_phone: "phone",
    contact_label_github: "github",
    contact_label_linkedin: "linkedin",
    contact_label_itch: "itch.io",
    contact_location_prefix: "Bogotá D.C., Colombia · last updated:",

    footer_top: "back to top ↑"
  }
};

// Frases del typewriter del hero, por idioma
const rolesByLang = {
  es: [
    "Desarrollador de Software Junior",
    "Backend · Node.js & API REST",
    "Unity Developer · C# & prototipos jugables",
    "Ex mesa de ayuda, ahora desarrollador"
  ],
  en: [
    "Junior Software Developer",
    "Backend · Node.js & REST APIs",
    "Unity Developer · C# & playable prototypes",
    "Former help desk, now developer"
  ]
};

// Mensajes del ticker de estado, por idioma
const tickerByLang = {
  es: [
    "procesando tickets…",
    "desplegando endpoints REST…",
    "optimizando SLA…",
    "sincronizando MongoDB…",
    "compilando sin errores…",
    "iterando mecánicas en Unity…",
    "sesión: disponible para trabajar…"
  ],
  en: [
    "processing tickets…",
    "deploying REST endpoints…",
    "optimizing SLA…",
    "syncing MongoDB…",
    "build passing…",
    "iterating on Unity mechanics…",
    "session: available for work…"
  ]
};

const LANG_STORAGE_KEY = "portfolio-lang";

function getStoredLang() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY);
  } catch (e) {
    return null;
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, lang);
  } catch (e) { /* ignore if storage unavailable */ }
}

function detectInitialLang() {
  const stored = getStoredLang();
  if (stored === "es" || stored === "en") return stored;
  const browserLang = (navigator.language || "es").slice(0, 2);
  return browserLang === "en" ? "en" : "es";
}

let currentLang = detectInitialLang();

function applyTranslations(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-toggle__btn").forEach(btn => {
    const isActive = btn.getAttribute("data-lang") === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  document.dispatchEvent(new CustomEvent("langchange", { detail: { lang } }));
}

function setLang(lang) {
  if (lang !== "es" && lang !== "en") return;
  currentLang = lang;
  storeLang(lang);
  applyTranslations(lang);
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(currentLang);

  document.querySelectorAll(".lang-toggle__btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
  });
});
