import React, { useState } from "react";
import { JournalEntriesComp } from "../journal/JournalEntriesComp";
import { JournalEntryComp } from "../journal/JournalEntryComp";
import { JournalReadComp } from "../journal/JournalReadComp";
import { useDispatch } from "react-redux";
import {
  notesAddNew,
  refreshNote,
  startLoadingNotes,
} from "../../actions/notes";
import { loadNotes } from "../../helpers/loadNotes";

export const HomeComp = () => {
  const dispatch = useDispatch();

  const handleAddNew = () => {
    dispatch(notesAddNew());
  };

  return (
    <div className="d-flex">
      <aside className="bg-light journal__sidebar overflow-auto">
        <div className="row mx-auto">
          <a
            className=" text-center d-flex flex-column justify-content-center"
            onClick={handleAddNew}
          >
            <div className="d-flex justify-content-center">
              <img
                className="mt-2 journal__main__icon"
                src="https://cdn.icon-icons.com/icons2/1946/PNG/128/1904677-add-addition-calculate-charge-create-new-plus_122527.png"
                alt="journal-icon"
              />
            </div>
          </a>
        </div>
        <div className="journal__icons mt-4">
          <JournalEntriesComp />
        </div>
      </aside>
      <div className="row w-100 mx-auto">
        <JournalReadComp />
      </div>
    </div>
  );
};
