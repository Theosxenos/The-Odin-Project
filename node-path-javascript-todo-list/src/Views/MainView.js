import NoteItemModel from "../Models/NoteItemModel";

export default class MainView {
    constructor() {
        this.cacheDom();
        this.addEventHandlers();
    }
    
    cacheDom = () => {  
        this.newNoteForm = document.querySelector('#new-note-form');
        this.newNoteTitle = this.newNoteForm.querySelector('#new-note-tile');
    }
    
    addEventHandlers = () => {
        this.newNoteForm.addEventListener('submit', this.onFormSubmit);
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        let newNoteTitle = event.target[0].value;
        this.createNewNote(newNoteTitle);
    };
    
    bindCreateNewNote = (callback) => {
      this.createNewNote = callback;  
    };
    
    displayAllNotes = (notes) => {
        notes.forEach((note) => {
           console.log(note); 
        });
    }
}