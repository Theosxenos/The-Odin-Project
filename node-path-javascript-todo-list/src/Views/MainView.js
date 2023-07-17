import NoteModel from "../Models/NoteModel";

export default class MainView {
    constructor(viewmodel, pubSub) {
        this.viewmodel = viewmodel;
        this.pubSub = pubSub;
        
        
        this.init();
        
        this.viewmodel.addNewNote(new NoteModel());
        
        this.button = document.querySelector('button');
        this.button.addEventListener('click', () => {
           this.viewmodel.addNewNote(new NoteModel());
        });
        this.#subscribePropertyChanged(this.onPropertyChanged);
    }

    init = () => {
        this.viewmodel.notes.forEach((note) => {
           console.log(note); 
        });
    }
    
    onPropertyChanged = (payload) => {
        // TODO
        switch (payload.propertyName) {
            case 'todoItems':
                console.log()
                break;
            case 'notes':
                this.init();
                break;
            default:
                break;
        }
    };
    
    #subscribePropertyChanged(callbackFunction) {
        // this.pubSub.subscribe((payload) => callbackFunction.call(this, payload));
        this.pubSub.subscribe(callbackFunction);
    }
}