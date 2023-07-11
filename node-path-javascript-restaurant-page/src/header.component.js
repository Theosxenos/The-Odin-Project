import {createElement} from "./helpers";

function createMenu() {
    const headerEl = createElement({tag:'header'});
    const ulEl = createElement({tag:'ul', parent: headerEl});
    
    const tabs = [
        "Home",
        "Menu",
        "About"
    ];

    tabs.forEach((tab) => {
        const liEl = createElement({tag: 'li', parent: ulEl});
        createElement({tag: 'a', parent: liEl, innerHTML: tab})
    });
    
    return  headerEl;
}

export default function createHeader() {
    const contentEl = document.querySelector('#content');
    contentEl.appendChild(createMenu());
}