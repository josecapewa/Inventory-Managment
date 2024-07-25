import { prisma } from "../modules/lib/prisma";

export async function createProduct(Product: Product){
    return await prisma.products.create({
        data: Product
    });
}