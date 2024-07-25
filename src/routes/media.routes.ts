import { FastifyInstance, FastifyRequest } from "fastify";
import { createMediaHandler } from "../controllers/MediaController";

export default async function (app: FastifyInstance){
    app.post(
        "/media/create",
        createMediaHandler
    )
}