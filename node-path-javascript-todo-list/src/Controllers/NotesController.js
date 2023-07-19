import NotesListModel from "../Models/NotesListModel";

export default class NotesController {
    notesListModel = new NotesListModel();
    
    constructor() {
        let note = this.notesListModel.getNoteById(1);
        
    }
    
}