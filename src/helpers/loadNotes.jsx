import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
  const noteSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes = [];
  noteSnap.forEach((note) => {
    notes.push({
      id: note.id,
      ...note.data(),
    });
  });
  return notes;
};
