import {createElement} from "./helpers";

function createMenu() {
    const headerEl = createElement({tag:'header'});
    const ulEl = createElement({tag:'ul', parent: headerEl});
    
    const tabs = [
        "Home",
        "Menu",
        "About"
    ];

    tabs.forEach((tab, index) => {
        const liEl = createElement({tag: 'li', parent: ulEl, classes: index===0?'active':''});
        createElement({tag: 'a', parent: liEl, innerHTML: tab, classes: tab.toLowerCase()})
    });
    
    return  headerEl;
}

export default function createHeader() {
    const bodyEl = document.querySelector('body');
    bodyEl.appendChild(createMenu());
}