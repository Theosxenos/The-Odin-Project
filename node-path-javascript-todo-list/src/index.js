import MainView from "./Views/MainView";
import PubSub from "./PubSub";
import MainController from "./Controllers/MainController";
import NoteItemModel from "./Models/NoteItemModel";
import NotesController from "./Controllers/NotesController";

(() => {

    const vw = new MainView();
    const mainController = new MainController();
    const notesController = new NotesController(vw);
    
    
})();