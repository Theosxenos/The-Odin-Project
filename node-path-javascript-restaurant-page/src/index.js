import createHeader from "./header.component";
import createHomeComponent from "./home.component";

(() =>{
    let contentEl;
    let headerEl;
    
    function cacheDom() {
        contentEl = document.querySelector('#content');
        headerEl = document.querySelector('header');
    }
    
    const init = () => {
        createHeader();
        createHomeComponent()
        cacheDom();
        setEventHandlers();
    };
    
    const setEventHandlers = () => {
        console.log(headerEl);
    }
    
    function clearPageContent() {
        contentEl.innerHTML = '';
    }
    
    init();
    
})();
