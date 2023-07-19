import TodoItem from "./TodoItemModel";
import {v4 as uuIdv4} from "uuid";  

export default class NoteItemModel {
    // TODO - maybe remove
    id = uuIdv4();
    todoItems = [];
    
    addTodoItem = (todoItem) => {
        if(todoItem === '') return;
        
        this.todoItems.push(todoItem);
        
        this.onNoteItemModelChanged(this.todoItems);        
    }
    
    removeTodoItem = (todoItem) => {
        if(todoItem === '') return;
        
        let itemIndex = this.todoItems.indexOf(todoItem);
        this.todoItems.splice(itemIndex, 1);
        
        this.onNoteItemModelChanged(this.todoItems);
    }

    bindOnNoteItemModelChanged = (callback) => {
        this.onNoteItemModelChanged = callback;
    }
}