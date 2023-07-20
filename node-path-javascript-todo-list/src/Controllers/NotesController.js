import NotesListModel from "../Models/NotesListModel";

export default class NotesController {
    notesListModel = new NotesListModel();
    
    constructor(view) {
        this.view = view;
        
        this.view.displayAllNotes(this.getNotes());
        this.view.bindCreateNewNote(this.handleCreateNewNote);
        
    }
    
    handleCreateNewNote = (noteTitle) => {
        this.notesListModel.addNote(noteTitle);
        this.view.displayAllNotes(this.getNotes());
    };
    
    getNotes = () => this.notesListModel.notes;
}