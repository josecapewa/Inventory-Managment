import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../modules/lib/prisma";

export async function createCategorie(app: FastifyInstance){
    app.post(
        "/categorie/create",
        async (request: FastifyRequest<{ Body: Categorie }>) => {
            const { name } = request.body;

            const categorie = await prisma.categories.create({
                data: {
                    name
                }
            });

            return categorie;
        }
    )
}