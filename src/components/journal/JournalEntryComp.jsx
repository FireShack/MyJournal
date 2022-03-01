import React from "react";
import { useDispatch } from "react-redux";
import { notesActive } from "../../actions/notes";

export const JournalEntryComp = ({ note }) => {
  const dispatch = useDispatch();

  const handleActiveNote = () => {
    dispatch(notesActive(note.id, { ...note }));
  };

  return (
    <>
      <div
        className="row shadow-sm border-top border-bottom mx-auto"
        onClick={handleActiveNote}
      >
        <h5 className="text-center display-6">{note.title}</h5>
      </div>
    </>
  );
};
