function createMenu() {
    const headerEl = document.createElement('header');
    const ulEl = document.createElement('ul');
    
    const tabs = [
        "Home",
        "Menu",
        "About"
    ];

    tabs.forEach((tab) =>{
       const liEl = document.createElement('li');
       liEl.innerText = tab;
       
        ulEl.appendChild(liEl);
    });
    
    headerEl.appendChild(ulEl);
    
    return  headerEl;
}

export default function createHeader() {
    const contentEl = document.querySelector('#content');;
    contentEl.appendChild(createMenu());
}