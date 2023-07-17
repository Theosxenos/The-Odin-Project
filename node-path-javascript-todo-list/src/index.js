import TodoItem from "./Models/TodoItemModel";
import MainViewModel from "./ViewModels/MainViewModel";
import MainView from "./Views/MainView";
import PubSub from "./PubSub";

(() => {

    const pubSub = new PubSub();
    const vm = new MainViewModel(pubSub);
    const vw = new MainView(vm, pubSub);
    
    
})();