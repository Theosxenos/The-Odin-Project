export default class TodoItem {

    constructor({title, description, dueDateTime, priority}) {
        this.title = title;
        this.description = description;
        this.dueDateTime = dueDateTime;
        this.priority = priority; 
    }
}