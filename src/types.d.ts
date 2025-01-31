
import HTML from './Iconos/ic_HTML.astro'
import CSS from './Iconos/ic_CSS.astro'
import React from './Iconos/ic_React.astro'
import IconoAstro from './Iconos/ic_Astro.astro'
import JS from './Iconos/ic_JS.astro'
import PHP from './Iconos/ic_PHP.astro'

export interface Proyectos {
    id: string;
    data: {
        title: string;
        tecnologias: Record<string, any>; // Ajusta según la estructura de tus tecnologías
        images: Record<string, any>; // Ajusta según la estructura de tus imágenes
    };
    body: string;
    filePath: string;
    digest: string;
    rendered: {
        html: string;
        metadata: Record<string, any>; // Ajusta según la estructura de tus metadatos
    };
    collection: string;
    slug: string;
    render: () => void; // Cambia el tipo de la función según lo que necesites
}

type Proyectos_Data = Proyectos[];


export interface Proyecto {
    data: Data
    slug: string
}

export interface Images {
    image: string
    thumbnail: string
    imageTitle: string
}

export interface Data {
    title: string
    images: Images
    tecnologias: object
}

export interface Componentes {
    HTML: typeof HTML
    REACT: typeof React
    CSS: typeof CSS
    ASTRO: typeof IconoAstro
    JS: typeof JS
    PHP: typeof PHP
}

/*ETIQUETA */
export interface Etiqueta {
    title: string
    texto: string
}

export interface Tecnologia {
    tecnologia: string
}
