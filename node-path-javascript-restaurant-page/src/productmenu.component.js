import {createElement} from "./helpers";

const menuItemFactory = (name, price) => {
    return {name, price}
}

const menu = [
    menuItemFactory('Kolace', 1.33),
    menuItemFactory('Babovka', 3.33),
    menuItemFactory('Linecke', 0.33),
    menuItemFactory('Vceli Uli', 2.33),
]

export default function createProductMenuComponent() {
    const contentEl = document.querySelector('#content');
    
    createElement({tag: 'h1', innerHTML: 'Our Menu', parent: contentEl});
    
    const tableEl = createElement({tag: 'table', parent: contentEl});
    const theadEl = createElement({tag: 'thead', parent: tableEl});
    const tbodyEl = createElement({tag: 'tbody', parent: tableEl});

    menu.forEach((menuitem) => {
        let trEl = createElement({tag:'tr', parent: tbodyEl});
        createElement({tag:'td', parent: trEl, innerHTML: menuitem.name});
        createElement({tag:'td', parent: trEl, innerHTML: menuitem.price});
    });
}