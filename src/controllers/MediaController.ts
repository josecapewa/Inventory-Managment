import { FastifyReply, FastifyRequest } from "fastify";
import { createMedia } from "../services/MediaService";

export async function createMediaHandler(request: FastifyRequest<{ Body: Media }>, response: FastifyReply) {
    try {
        const media = await createMedia(request.body);

        return response.code(201).send(media);
    } catch (e) {
        console.log(e)
        return response.code(500).send({ message: "Internal Server Error" });
    }
}