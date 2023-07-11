import './style.css';

import createHeader from "./header.component";
import createHomeComponent from "./home.component";
import createProductMenuComponent from "./productmenu.component";
import createAboutComponent from "./about.compontent";

(() =>{
    let contentEl;
    let headerEl;
    let headerLinkEls;
    
    function cacheDom() {
        headerEl = document.querySelector('header');
        headerLinkEls = headerEl.querySelectorAll('a');
        contentEl = document.querySelector('#content');
    }
    
    const init = () => {
        createHeader();
        createHomeComponent();
        cacheDom();
        setEventHandlers();
    };
    
    const setEventHandlers = () => {
        headerLinkEls.forEach((a) => {
           a.addEventListener('click', (event) => {
               clearPageContent();
               
              switch(event.target.innerText.toLowerCase()) {
                  case 'home':
                      createHomeComponent();
                      break;
                  case 'menu':
                      createProductMenuComponent();
                      break;
                  case 'about':
                      createAboutComponent();
                      break;
              }
              
              switchActiveTab(event.target);
           }); 
        });
    }
    
    function clearPageContent() {
        contentEl.innerHTML = '';
    }
    
    function switchActiveTab(newactivetab) {
        let oldactivetab = document.querySelector('header li.active');
        
        if(newactivetab === oldactivetab) return;
        
        oldactivetab.classList.remove('active');
        newactivetab.parentNode.classList.add('active');
    }
    
    
    init();
    
})();
