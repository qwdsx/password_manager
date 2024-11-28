"use server"
import prisma from "@/src/lib/prisma"
import { revalidatePath } from "next/cache";
import { Entry } from "../types/dbTypes";

export const storePassword = async (formData: FormData) => {
    if (!formData.has("website") || !formData.has("username") || !formData.has("password")) {
        console.log("form is missing fields");
        return;
    }

    const find = await prisma.entry.findFirst({
        where: { website: `${formData.get("website")}` }
    });

    if (find !== null) {
        console.log("this website already exists in db");
        return;
    }

    const create = await prisma.entry.create({
        data: {
            website: `${formData.get("website")}`,
            username: `${formData.get("username")}`,
            passwordHash: `${formData.get("password")}`
        }
    });

    revalidatePath('/');
}

export const editPassword = async (entry: Entry, formData: FormData) => {
    if (!formData.has("username") || !formData.has("password")) {
        console.log("form is missing fields");
        return;
    }

    const update = await prisma.entry.update({
        where: { id: entry.id },
        data: {
            username: `${formData.get("username")}`,
            passwordHash: `${formData.get("password")}`
        }
    });

    revalidatePath('/');
}

export const deletePassword = async (entry: Entry) => {
    await prisma.entry.delete({
        where: { id: entry.id }
    })

    revalidatePath('/');
}