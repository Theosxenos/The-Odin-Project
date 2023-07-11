import createHeader from "./header.component";
import createHomeComponent from "./home.component";

(() =>{
    
    function cacheDom() {
        this.contentEl = document.querySelector('#content');
        this.headerEl = document.querySelector('header');
    }
    
    const init = () => {
        createHeader();
        createHomeComponent()
        cacheDom();
        setEventHandlers();
    };
    
    const setEventHandlers = () => {
        console.log(this.headerEl);
    }
    
    function clearPageContent() {
        this.contentEl.innerHTML = '';
    }
    
    init();
    
})();
