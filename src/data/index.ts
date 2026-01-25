import EMAIL from "@/components/Iconos/Email.astro";
import GITHUB from "@/components/Iconos/GitHub.astro";
import IMAGEN1 from "@/assets/ip-geo.png";
import IMAGEN2 from "@/assets/clima.png";
import IMAGEN3 from "@/assets/http-status.png";
import IMAGEN4 from "@/assets/api-rest.png";

export const LINKS = [
    { name: "Inicio", id: "home" },
    { name: "Sobre mi", id: "about" },
    { name: "Herramientas", id: "tecnologias" },
    { name: "Proyectos", id: "proyectos" },
    { name: "Contacto", id: "contacto" },
] as const;

export const RedesSociales = [
    { name: "Github", link: "https://github.com/EnriqueHM31", Icon: GITHUB },
    { name: "Email", link: "mailto:luisenriquehernandezmarin0@gmail.com", Icon: EMAIL },
] as const;

export const PROYECTOS = [
    {
        title: "Geolocalización de una IP",
        description:
            "Este proyecto consiste en la creación de una aplicación web que permite obtener la geolocalización de una IP",
        image: IMAGEN1,
        tecnologias: ["React", "CSS", "HTML", "Tailwind", "TypeScript"],
        link: "/proyectos/Geolocalizaciond-de-una-ip",
    },
    {
        title: "Aplicación del clima",
        description:
            "Este proyecto consiste en la creación de una aplicación web que permite obtener el clima  de una ciudad por dias",
        image: IMAGEN2,
        tecnologias: ["React", "CSS", "HTML", "Tailwind", "TypeScript"],
        link: "/proyectos/Aplicacion-del-clima",
    },
    {
        title: "Blog de los status HTTP",
        description: "Este proyecto consiste en mostrar informacion sobre los status HTTP desde los 100 hasta 599",
        image: IMAGEN3,
        tecnologias: ["Astro", "HTML", "CSS", "Tailwind", "TypeScript"],
        link: "/proyectos/http-codes-status",
    },
    {
        title: "Una API REST para proyectos",
        description:
            "Servicio backend encargado de registrar y exponer los endpoints de mis proyectos para su consumo desde distintas aplicaciones.",
        image: IMAGEN4,
        tecnologias: ["Node", "Express", "TypeScript"],
        link: "/proyectos/http-codes-status",
    },
];