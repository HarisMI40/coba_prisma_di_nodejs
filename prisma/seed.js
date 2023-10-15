import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main(){
    await prisma.tag.createMany({
        data : [{name : "apel"}, {name : "semangka"}, {name : "pisang"}],
        skipDuplicates : true
    })
}

main().catch((error) => {
    console.log(error)
    process.exit(1)
})
.finally(async () => {
    await prisma.$disconnect();
})  