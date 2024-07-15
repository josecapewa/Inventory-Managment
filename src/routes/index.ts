import { FastifyInstance } from "fastify";
import { createCategorie } from "./categories/categories.routes";
import { createMedia } from "./media/media.routes";
import { createProduct } from "./products/products.routes";

export default async function routes(app: FastifyInstance){
    await createCategorie(app),
    await createMedia(app),
    await createProduct(app)
}