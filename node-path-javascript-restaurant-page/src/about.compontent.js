import {createElement} from "./helpers";

const aboutPage = [
    "Welcome to Renaissance Delight - where passion and tradition come together to create unforgettable baked goods.",
    "At Renaissance Delight, we are dedicated to crafting mouthwatering treats that bring joy and delight to our customers. With a rich heritage rooted in time-honored recipes, our bakers pour their hearts into every creation, ensuring that each bite is a celebration of flavor and craftsmanship.",
    "We believe that baking is an art form, and we strive for perfection in every loaf of bread, every pastry, and every cake that leaves our ovens. From the moment you step into our bakery, you'll be greeted by the inviting aroma of freshly baked goods, beckoning you to indulge in our delectable offerings.",
    "Our commitment to quality is unwavering. We use only the finest, locally sourced ingredients, carefully selected to ensure the utmost freshness and taste. Whether it's the creamy butter, the rich chocolate, or the ripest fruits, every ingredient is chosen with care to deliver an exceptional culinary experience.",
    "But it's not just about the ingredients - it's the passion and expertise of our skilled bakers that truly sets us apart. With years of experience and a genuine love for their craft, our team brings their unrivaled talent and dedication to every creation. The result? A symphony of flavors, textures, and aromas that will leave you craving more.",
    "At Renaissance Delight, we cherish the relationships we build with our customers. We take pride in being part of your special moments, whether it's a birthday cake that becomes the centerpiece of a celebration or a simple morning pastry that brightens your day. Your satisfaction is our ultimate reward.",
    "So come, join us on this delectable journey. Explore our diverse selection of artisanal bread, delicate pastries, and irresistible sweets. Discover the magic that happens when tradition meets innovation. We invite you to indulge in the taste of pure bliss - only at Renaissance Delight."
];

export default function createAboutComponent() {
    const contentEl = document.querySelector('#content');
    
    createElement({tag: 'h1', parent: contentEl, innerHTML: 'About Us'});
    
    aboutPage.forEach((text) => {
       createElement({tag: 'p', parent: contentEl, innerHTML: text}); 
    });
}