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