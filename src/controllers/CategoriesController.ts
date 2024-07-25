import { FastifyReply, FastifyRequest } from "fastify";
import { createCategory } from "../services/CategoriesService";

export async function createCategoryHandler(request: FastifyRequest<{ Body: Category }>, response: FastifyReply) {
    try {
        const category = await createCategory(request.body);

        return response.code(201).send(category);
    } catch (e) {
        console.log(e)
        return response.code(500).send({ message: "Internal Server Error" });
    }

}