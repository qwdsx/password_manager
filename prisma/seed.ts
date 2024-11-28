import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    for (let i = 0; i < 15; i++) {
        await prisma.entry.upsert({
            where: { website: `website${i + 1}` },
            update: {},
            create: {
                website: `website${i + 1}`,
                username: `username${i + 1}`,
                passwordHash: `passwordHash${i + 1}`
            }
        })
    }
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })