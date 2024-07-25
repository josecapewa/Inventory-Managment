import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../modules/lib/prisma";
import { createCategoryHandler } from "../controllers/CategoriesController";

export default async function createCategorie(app: FastifyInstance){
    app.post(
        "/categorie/create",
        createCategoryHandler
    )
}