import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../../modules/lib/prisma";

export async function createCategorie(app: FastifyInstance){
    app.post(
        "/categorie/create",
        async (request: FastifyRequest<{ Body: Categorie }>, response: FastifyReply) => {
            try{
                const { name } = request.body;

                const categorie = await prisma.categories.create({
                    data: {
                        name
                    }
                });

                return response.code(201).send(categorie);
            }        
            catch(e){
                console.log(e)
                return response.code(500).send({ message: "Internal Server Error" });
            }
        }
    )
}