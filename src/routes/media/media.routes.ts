import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../modules/lib/prisma";

export async function createMedia(app: FastifyInstance){
    app.post(
        "/media/create",
        async (request: FastifyRequest<{ Body: Media }>) => {
            const { fileName, fileType } = request.body;

            const media = await prisma.media.create({
                data: {
                    fileName,
                    fileType
                }
            });

            return media;
        }
    )
}