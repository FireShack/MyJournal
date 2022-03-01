import React, { useRef } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  notesActive,
  StartDeleteNote,
  startSaveNote,
} from "../../actions/notes";
import { useForm } from "../../helpers/useForm";
export const JournalNoteComp = () => {
  const { active: note } = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm(note);
  const { title, body } = formValues;
  const activeId = useRef(note.id);

  useEffect(() => {
    if (note.id !== activeId.current) {
      reset();
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(notesActive(formValues.id, { ...formValues }));
  }, [formValues]);

  const handleDelete = () => {
    dispatch(StartDeleteNote(note.id));
  };

  return (
    <div className="col-12">
      <div className="d-flex justify-content-between mt-3">
        <button
          className="btn btn-outline-primary w-75"
          onClick={() => dispatch(startSaveNote(note))}
        >
          Save
        </button>
        <button
          className="btn btn-outline-secondary w-25"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>

      <input
        type="text"
        placeholder="Title here"
        className="form-control w-100 mt-3 shadow-none border-0 border-bottom journal__title"
        autoComplete="off"
        name="title"
        value={title}
        onChange={handleInputChange}
      />
      <textarea
        placeholder="What happens today?"
        className="form-control mt-3 journal__textarea shadow-none"
        name="body"
        value={body}
        onChange={handleInputChange}
      ></textarea>
    </div>
  );
};
