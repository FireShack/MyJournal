import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const notesAddNew = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };
    const docRef = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(notesActive(docRef.id, newNote));
    dispatch(notesRefreshNew(docRef.id, newNote));
  };
};

export const notesActive = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  },
});

export const notesRefreshNew = (id, note) => ({
  type: types.notesAddNew,
  payload: {
    id,
    ...note,
  },
});

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);
    dispatch(notesLoad(notes));
  };
};

export const notesLoad = (notes) => ({
  type: types.notesLoad,
  payload: notes,
});

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const noteToSave = { ...note };
    delete noteToSave.id;
    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToSave);
    dispatch(refreshNote(note.id, noteToSave));
  };
};

export const refreshNote = (id, note) => ({
  type: types.notesUpdate,
  payload: {
    id,
    note: {
      id,
      ...note,
    },
  },
});

export const refreshNewNote = (note) => ({
  type: types.notesUpdate,
  payload: {
    note: {
      ...note,
    },
  },
});

export const StartDeleteNote = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    await db.doc(`${uid}/journal/notes/${id}`).delete();

    dispatch(deleteNote(id));
  };
};

export const deleteNote = (id) => ({
  type: types.notesDelete,
  payload: id,
});
export const notesLogoutCleaning = () => ({
  type: types.notesLogoutCleaning,
});
