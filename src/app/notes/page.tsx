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

  // const allNotes = await prisma.note.findMany({ where: { userId } });
  const allNotes = await prisma.note.findMany({
    where: { userId },
  });

  return <div>{JSON.stringify(allNotes)}</div>;
}
