import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { prisma } from "../modules/lib/prisma";
import { createProductHandler } from "../controllers/ProductsController";


export default async function (fastify: FastifyInstance) {
    fastify.post(
        '/product/create'
        , createProductHandler
    )

    fastify.get(
        '/product/:id'
        , async (request: FastifyRequest<{ Params: { id: string } }>, response: FastifyReply) => {
            try{
                const { id } = request.params;

                const product = await prisma.products.findUnique({
                    where: {
                        id: id
                    }
                });

                return response.code(200).send(product);
            } catch(e){
                console.log(e);
                return response.code(500).send({ message: "Internal Server Error" });
            }

        }
    )
    fastify.put(
        "/product/update/:id",
        async (request: FastifyRequest<{ Params: { id: string }, Body: Product }>, response: FastifyReply) => {
            try{
                const { id } = request.params;
                const { name, categoryId, mediaId } = request.body;
    
                const product = await prisma.products.update({
                    where: {
                        id: id
                    },
                    data: {
                        name,
                        categoryId,
                        mediaId
                    }
                });
    
                return response.code(200).send(product);
            } catch(e){
                console.log(e);
                return response.code(500).send({ message: "Internal Server Error" });
            }
        }
    )
}