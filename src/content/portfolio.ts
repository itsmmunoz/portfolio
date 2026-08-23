import {
  IconBrandAlpineJs,
  IconBrandBootstrap,
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandInertia,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandLivewire,
  IconBrandMysql,
  IconBrandPhp,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandVue,
  IconBrandDocker,
  IconBrandVite,
  IconTerminal,
  IconBuildingCommunity,
  IconBuildingSkyscraper,
  IconDatabase,
  IconApi,
  IconDeviceDesktopAnalytics,
  IconLayoutDashboard,
} from '@tabler/icons-vue'
export const personalInfo = {
  name: 'Maycol',
  lastName: 'Muñoz',
  role: 'Full Stack',
  mainStack: 'Laravel + Vue',
  bio: 'Desarrollador full-stack enfocado en el ecosistema TALL (Tailwind, Alpine, Laravel, Livewire), con experiencia creando paneles de administración, SaaS y APIs REST. Colaboro en proyectos open source como Orion y traducciones de MoonShine, construyendo sistemas backend escalables e interfaces modernas y de alto rendimiento.',
  avatar: 'https://github.com/maycolmunoz.png?size=200',
}

export const contacts = {
  cv: '/cv.pdf',
  linkedin: 'https://www.linkedin.com/in/maycolmunoz/',
  github: 'https://github.com/maycolmunoz',
  email: 'mailto:macarny4@gmail.com',
  x: 'https://x.com/mmunozlab',
}

export const categorizedStack = [
  {
    title: 'NÚCLEO',
    items: [
      { name: 'PHP', icon: IconBrandPhp },
      { name: 'LARAVEL', icon: IconBrandLaravel },
      { name: 'VUE', icon: IconBrandVue },
      { name: 'REACT', icon: IconBrandReact },
      { name: 'MYSQL', icon: IconBrandMysql },
      { name: 'POSTGRESQL', icon: IconDatabase },
      { name: 'TALL STACK', icon: IconBrandLaravel },
    ],
  },
  {
    title: 'FRONTEND',
    items: [
      { name: 'JS', icon: IconBrandJavascript },
      { name: 'HTML', icon: IconBrandHtml5 },
      { name: 'CSS', icon: IconBrandCss3 },
      { name: 'TAILWIND', icon: IconBrandTailwind },
      { name: 'BOOTSTRAP', icon: IconBrandBootstrap },
      { name: 'ALPINE.JS', icon: IconBrandAlpineJs },
    ],
  },
  {
    title: 'HERRAMIENTAS',
    items: [
      { name: 'LIVEWIRE', icon: IconBrandLivewire },
      { name: 'INERTIA.JS', icon: IconBrandInertia },
      { name: 'GIT', icon: IconBrandGit },
      { name: 'FILAMENT', icon: IconLayoutDashboard },
      { name: 'DOCKER', icon: IconBrandDocker },
      { name: 'VITE', icon: IconBrandVite },
      { name: 'APIs', icon: IconApi },
      { name: 'LINUX', icon: IconTerminal },
    ],
  },
  {
    title: 'ARQUITECTURA',
    items: [
      { name: 'CLEAN ARCH', icon: IconBuildingSkyscraper },
      { name: 'MULTITENANT', icon: IconBuildingCommunity },
      { name: 'ERP & CRM', icon: IconDeviceDesktopAnalytics },
      { name: 'PERFORMANCE', icon: IconDeviceDesktopAnalytics },
    ],
  },
]

export const experience = [
  {
    company: 'InnovaDev Solutions',
    location: 'Remoto',
    role: 'Desarrollador Web',
    period: '01/2025 - 05/2026',
    bullets: [
      'Desarrollo de aplicaciones web escalables en Laravel, con enfoque en rendimiento, seguridad y buenas prácticas.',
      'Implementación de paneles administrativos personalizados usando Filament, mejorando la gestión interna y la experiencia de usuario.',
      'Creación de interfaces interactivas con Blade, TailwindCSS y Alpine.js, aumentando la usabilidad y retención de usuarios.',
      'Gestión del código con Git y GitHub, manteniendo un flujo de trabajo colaborativo, limpio y controlado.',
    ],
  },
]

export const education = [
  {
    title: 'Ingeniería de Sistemas',
    link: 'https://www.unad.edu.co/',
    description:
      'Universidad Nacional Abierta y a Distancia (UNAD) (2022 - Presente): Estudios en curso enfocados en el diseño, desarrollo y gestión de sistemas tecnológicos.',
  },
  {
    title: 'Desarrollo Frontend con React',
    link: 'https://www.alura.com.br/',
    description:
      'Alura (01/2023 - 06/2023): Formación intensiva en la creación de interfaces de usuario modernas e interactivas utilizando React.',
  },
  {
    title: 'Desarrollo de Aplicaciones Web',
    link: 'https://www.utp.edu.co/',
    description:
      'Universidad Tecnológica de Pereira (UTP) (04/2022 - 12/2022): Formación especializada en la creación de aplicaciones web funcionales y escalables.',
  },
  {
    title: 'Desarrollo Fullstack',
    link: 'https://github.com/Launch-X-Latam',
    description:
      'Launch X (02/2022 - 05/2022): Aprendizaje práctico en tecnologías como JavaScript y Vue.js, enfocado en el desarrollo de proyectos fullstack.',
  },
]

export interface Project {
  stack: string[]
  title: string
  stars: number
  img?: string
  description: string
  repository: string
  link?: string
}

export const projects: Project[] = [
  {
    stack: ['Laravel 12', 'MoonShine', 'RBAC', 'Modular'],
    title: 'Orion',
    stars: 17,
    img: 'https://github.com/maycolmunoz/orion/blob/main/_docs/image.png?raw=true',
    description:
      'Starter kit open source para construir paneles de administración en Laravel con MoonShine: arquitectura modular, RBAC integrado y configuración lista para usar.',
    repository: 'https://github.com/maycolmunoz/orion',
    link: 'https://github.com/maycolmunoz/orion',
  },
  {
    stack: ['Vue', 'TailwindCSS', 'Laravel', 'API'],
    title: 'Aventuro',
    stars: 6,
    img: 'https://github.com/maycolmunoz/aventuro/blob/main/_docs/front/home.webp?raw=true',
    description:
      'Aplicación web orientada a viajes donde los usuarios pueden explorar paquetes, gestionar reservas y acceder a su cuenta a través de una experiencia de reserva fluida y consistente.',
    repository: 'https://github.com/maycolmunoz/aventuro',
    link: 'https://youtu.be/1F4ABE5Gtbc',
  },
  {
    stack: ['Laravel', 'MoonShine', 'Open Source'],
    title: 'MoonShine Language Spanish',
    stars: 4,
    description:
      'Traducción al español del panel de administración MoonShine, ampliando la accesibilidad del framework para la comunidad hispanohablante.',
    repository: 'https://github.com/maycolmunoz/moonshine-language-spanish',
    link: 'https://github.com/maycolmunoz/moonshine-language-spanish',
  },
  {
    stack: ['Laravel', 'Moonshine'],
    title: 'Moon Leaflet',
    stars: 2,
    img: 'https://github.com/maycolmunoz/moon-leaflet/blob/main/_docs/images/component.webp?raw=true',
    description:
      'Integra Leaflet con MoonShine para habilitar mapas interactivos, permitiendo seleccionar coordenadas o mostrar múltiples ubicaciones dentro del panel de administración.',
    repository: 'https://github.com/maycolmunoz/moon-leaflet',
    link: 'https://github.com/maycolmunoz/moon-leaflet',
  },
  {
    stack: [
      'Laravel 10',
      'Livewire 3',
      'Filament',
      'TailwindCSS',
      'Alpine.js',
      'MercadoPago',
      'MySQL',
    ],
    title: 'Comprana',
    stars: 1,
    img: 'https://github.com/maycolmunoz/comprana/blob/main/_docs/imgs/inicio.webp?raw=true',
    description:
      'Plataforma de entrega de comestibles que proporciona un catálogo limpio, navegación rápida y un flujo de pago simple para realizar pedidos a domicilio con facilidad.',
    repository: 'https://github.com/maycolmunoz/comprana',
    link: 'https://youtu.be/ZDsoQOYZTCI',
  },
]
