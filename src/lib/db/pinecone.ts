import { Pinecone } from "@pinecone-database/pinecone"

const apiKey = process.env.PINECONE_API_KEY

if (!apiKey) throw Error("Pinecone key not set. Check .env.")

const pinecone = new Pinecone({
    //if the current environment doesn't work, 
    //try the commented ones.
    // environment: "asia-southeast1-gcp",
    // environment: "aped-4627-b74a"
    environment: "gcp-starter",
    apiKey
})

export const notesIndex = pinecone.Index("nextjs-ai-note-app")
