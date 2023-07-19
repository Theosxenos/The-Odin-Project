import MainView from "./Views/MainView";
import PubSub from "./PubSub";
import MainController from "./Controllers/MainController";
import NoteItemModel from "./Models/NoteItemModel";

(() => {

    const pubSub = new PubSub();
    const mainController = new MainController(pubSub);
    const vw = new MainView(mainController, pubSub);
    
})();