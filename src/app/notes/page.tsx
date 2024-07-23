import Note from "@/components/Note";
import prisma from "@/lib/db/prisma";
import { auth } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Flowbrain - Notes",
};

export default async function NotesPage() {
  const { userId } = auth();

  //should never happen, and that's why we're throwing error
  //instead of redirecting to sign in page
  if (!userId) throw new Error("userId undefined.");

  const allNotes = await prisma.note.findMany({
    where: { userId },
  });

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {allNotes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
      {allNotes.length === 0 && (
        <p className="col-span-full text-center text-muted-foreground">
          No notes found.
        </p>
      )}
    </div>
  );
}
