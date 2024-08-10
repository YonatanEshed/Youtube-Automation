import { PrismaClient, Role } from '@prisma/client';

const prisma = new PrismaClient();

export const createUser = async (
    username: string,
    email: string,
    password: string,
    role: Role | undefined
) => {
    return prisma.user.create({
        data: {
            username,
            email,
            password,
            role,
        },
    });
};

export const getUserByEmail = async (email: string) => {
    return prisma.user.findUnique({
        where: {
            email,
        },
    });
};

export const getUserById = async (id: number) => {
    return prisma.user.findUnique({
        where: {
            id,
        },
    });
};

export default {
    createUser,
    getUserByEmail,
    getUserById,
};
