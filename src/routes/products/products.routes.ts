import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../modules/lib/prisma";


export async function createProduct(fastify: FastifyInstance) {
    fastify.post(
        '/product/create'
        , async (request: FastifyRequest<{ Body: Product }>) => {
            const { 
                name,
                categoryId,
                mediaId
            } = request.body;

            const product = await prisma.products.create({
                data:{
                    name,
                    categoryId,
                    mediaId
                }
            });

            return product;

        }
    )

    fastify.get(
        '/product/:id'
        , async (request: FastifyRequest<{ Params: { id: string } }>) => {
            const { id } = request.params;

            const product = await prisma.products.findUnique({
                where: {
                    id: id
                }
            });

            return product;

        }
    )
}