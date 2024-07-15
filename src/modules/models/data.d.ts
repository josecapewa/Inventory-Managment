interface Categorie {
    name: string
}

interface Media {
    fileName: string
    fileType: string
}

interface AddProduct {
    name: string
    categoryId: number
    mediaId: string
    buyPrice: number
}