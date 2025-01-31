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