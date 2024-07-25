import { FastifyInstance } from "fastify";
import mediaRoutes from "./media.routes";
import productRoutes from "./products.routes";
import categoryRoutes from "./categories.routes";

export default async function routes(app: FastifyInstance){
    await mediaRoutes(app),
    await productRoutes(app),
    await categoryRoutes(app)
}