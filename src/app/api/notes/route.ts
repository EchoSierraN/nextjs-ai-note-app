import prisma from "@/lib/db/prisma"
import { createNoteSchema } from "@/lib/validation/note"
import { auth } from "@clerk/nextjs"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const parseResult = createNoteSchema.safeParse(body)

        if (!parseResult.success) {
            console.log(parseResult.error)
            return Response.json({ error: "Invalid input" }, { status: 400 })
        }

        const { title, content } = parseResult.data
        const { userId } = auth()

        if (!userId) {
            return Response.json({ error: "unauthorized" }, { status: 401 })
        }

        const note = await prisma.note.create({
            data: {
                title,
                content,
                userId
            }
        })

        return Response.json({ note }, { status: 201 })

    } catch (error) {
        console.log(error)
        return Response.json({ error: "Internal server error" }, { status: 500 })
    }
}