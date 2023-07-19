import TodoItem from "../Models/TodoItemModel";
import NoteItemModel from "../Models/NoteItemModel";
import NotesListModel from "../Models/NotesListModel";

export default class MainController {
    notesModel = new NotesListModel();
    currentNote;
    
    constructor(view, model) {
        this.view = view;
        this.model = model;
    }

    handleAddNewNote = (note) => {
        this.notesModel.addNote(note);
    }

    handleAddTodoItem = (note, todoItem) => {
        let foundNote = this.notes.find((n) => n.id === note.id );
        foundNote.push(todoItem);
    }

    handleRemoveTodoItem = (todoItem) => {
        let index = this.todoItems.indexOf(todoItem);
        let result = this.todoItems.splice(index, 1);
    }
}