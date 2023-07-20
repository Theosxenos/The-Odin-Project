import NoteItemModel from "./NoteItemModel";
import TodoItem from "./TodoItemModel";

export default class NotesListModel {
    notes = [];

    constructor() {
        let note = new NoteItemModel();
        let todo = new TodoItem({title: 'Test1', description: 'Test2', dueDateTime: '12-12-2023', priority: 1});
        note.todoItems.push(todo);
        this.notes.push(note)
    }
    
    addNote = (noteTitle) => {
        this.notes.push(new NoteItemModel(noteTitle));
    };

    getNoteById = (noteId) => {
        return this.notes.find((note) => note.id === noteId);
    }

    removeNoteById = (noteId) => {
        let index = this.notes.findIndex((note) => note.id === noteId);
        this.notes.splice(index,1);
    }
}