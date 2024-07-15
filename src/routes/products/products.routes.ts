import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../modules/lib/prisma";


export async function createProduct(fastify: FastifyInstance) {
    fastify.post(
        '/product/create'
        , async (request: FastifyRequest<{ Body: AddProduct }>) => {
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
}