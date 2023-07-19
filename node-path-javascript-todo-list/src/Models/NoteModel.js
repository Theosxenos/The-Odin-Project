import TodoItem from "./TodoItemModel";
import {v4 as uuIdv4} from "uuid";  

export default class NoteModel {
    // TODO - maybe remove
    id = uuIdv4();
    todoItems = [];
    
    addTodoItem = (todoItem) => {
        if(todoItem === '') return;
        
        this.todoItems.push(todoItem);
    }
    
    removeTodoItem = (todoItem) => {
        if(todoItem === '') return;
        let itemIndex = this.todoItems.indexOf(todoItem);
        this.todoItems.splice(itemIndex, 1);
    }
}