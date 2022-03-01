import React from "react";
import { JournalEntryComp } from "./JournalEntryComp";
import { useSelector } from "react-redux";

export const JournalEntriesComp = () => {
  const { notes } = useSelector((state) => state.notes);
  
  return (
    <div>
      {notes.map((note) => {
        return <JournalEntryComp key={note.id} note={note} />;
      })}
    </div>
  );
};
