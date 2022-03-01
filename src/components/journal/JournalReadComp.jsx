import React from "react";
import { JournalNoteComp } from "./JournalNoteComp";
import { useSelector } from "react-redux";
// show ? "d-block" : "d-none"
export const JournalReadComp = () => {
  const { note, active } = useSelector((state) => state.notes);
  return (
    <>
      {active ? (
        <JournalNoteComp />
      ) : (
        <p className="text-center fs-3 ">Any note selected :)</p>
      )}
    </>
  );
};
