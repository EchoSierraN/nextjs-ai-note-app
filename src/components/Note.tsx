import { Note as NoteModel } from "@prisma/client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface NoteProps {
  note: NoteModel;
}

export default function Note({ note: NoteModel }: NoteProps) {
  const wasUpdated = NoteModel.updatedAt > NoteModel.createdAt;
  const createdUpdatedAtTimestamp = (
    wasUpdated ? NoteModel.updatedAt : NoteModel.createdAt
  ).toDateString();

  return (
    <Card>
      <CardHeader>
        <CardTitle>{NoteModel.title}</CardTitle>
        <CardDescription>
          {createdUpdatedAtTimestamp}
          {wasUpdated && " (updated)"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="whitespace-pre-line">{NoteModel.content}</p>
      </CardContent>
    </Card>
  );
}
