import { FastifyInstance } from "fastify";
import { createCategorie } from "./create-categorie";
import { createMedia } from "./create-media";
import { createProduct } from "./create-product";

export default async function routes(app: FastifyInstance){
    await createCategorie(app),
    await createMedia(app),
    await createProduct(app)
}