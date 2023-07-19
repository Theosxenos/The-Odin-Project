import NoteItemModel from "./NoteItemModel";

export default class NotesListModel {
    notes = [];

    addNote = (note) => {
        this.notes.push(note);
        this.onNotesListChanged(notes);
    };

    getNoteById = (noteId) => {
        return this.notes.find((note) => note.id === noteId);
    }

    removeNoteById = (noteId) => {
        let index = this.notes.findIndex((note) => note.id === noteId);
        this.notes.splice(index,1);
    }

    bindOnNotesListChanged = (callback) => {
        this.onNotesListChanged = callback;
    }
}