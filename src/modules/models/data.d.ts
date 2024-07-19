interface Categorie {
    name: string
}

interface Media {
    fileName: string
    fileType: string
}

interface Product {
    name: string
    categoryId: number
    mediaId: string
    buyPrice: number
}