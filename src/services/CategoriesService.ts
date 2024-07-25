import { prisma } from "../modules/lib/prisma";

export async function createCategory(category: Category) {
    return await prisma.categories.create({
        data: category
    });
}