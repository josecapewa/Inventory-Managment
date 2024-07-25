import { prisma } from "../modules/lib/prisma";

export async function createMedia(media: Media) {
    return await prisma.media.create({
        data: media
    });
}