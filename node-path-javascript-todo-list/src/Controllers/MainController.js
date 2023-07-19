import TodoItem from "../Models/TodoItemModel";
import NoteModel from "../Models/NoteModel";

export default class MainController {
    notes = [];
    currentNote;
    
    constructor(pubSub) {
        this.pubSub = pubSub;
    }
    
    addNewNote = (note) => {
        this.notes.push(note);
        this.#notifyPropertyChanged('notes');
    }

    addTodoItem = (note, todoItem) => {
        let foundNote = this.notes.find((n) => n.id === note.id );
        foundNote.push(todoItem);
        this.#notifyPropertyChanged('todoItems');
    }

    removeTodoItem = (todoItem) => {
        let index = this.todoItems.indexOf(todoItem);
        let result = this.todoItems.splice(index, 1);
        // TODO - if(result.length === 1)
    }

    #notifyPropertyChanged = (propertyName) => {
        this.pubSub.publish({propertyName});
    }
}