import { FastifyReply, FastifyRequest } from "fastify";
import { createProduct } from "../services/ProductsService";

export async function createProductHandler(request: FastifyRequest<{ Body: Product }>, response: FastifyReply) {
    try {
        const product = await createProduct(request.body);

        return response.code(201).send(product);
    } catch (e) {
        console.log(e)
        return response.code(500).send({ message: "Internal Server Error" });
    }

}