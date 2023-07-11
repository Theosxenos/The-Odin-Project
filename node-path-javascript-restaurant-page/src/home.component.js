export default function createHomeComponent() {
    const contentEl = document.querySelector('#content');
    const mainEl = document.createElement('main');
    const componentContent = {
        title: 'Welcome!',
        texts: [
            'Indulge in the taste of tradition at Renaissance Delight, ' +
            'where we bring you the finest selection of fresh, handcrafted pastries. ' +
            'Step into our charming bakery and experience the delightful aroma of freshly baked treats that ' +
            'will transport you to a world of sweet and savory delights.',
            'At Renaissance Delight, we pride ourselves on preserving the time-honored recipes ' +
            'that have been passed down through generations. Each pastry is lovingly prepared by our ' +
            'skilled bakers, using only the finest quality ingredients. From flaky croissants to buttery scones, ' +
            'every bite is a testament to our dedication to creating authentic, mouthwatering flavors.',
            'Our menu is a treasure trove of classic pastries that cater to every palate. Whether you\'re ' +
            'craving a traditional French pain au chocolat, a delicate Danish pastry filled with luscious fruit, ' +
            'or a warm, cinnamon-laced sticky bun, we have something to satisfy every craving.'            
        ]
    };
    
    const titleEl = document.createElement('h1');
    titleEl.innerText = componentContent.title;
    
    mainEl.appendChild(titleEl);
    
    componentContent.texts.forEach((text) => {
       let pEl = document.createElement('p');
       pEl.innerText = text;
       mainEl.appendChild(pEl);
    });
    
    contentEl.appendChild(mainEl);
}
