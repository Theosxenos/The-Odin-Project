export function createElement({ tag, innerHTML, id, classes, parent } = {}) {
    const element = document.createElement(tag);

    if (innerHTML) {
        element.innerHTML = innerHTML;
    }

    if (id) {
        element.id = id;
    }

    if (classes) {
        element.className = classes;
    }

    if (parent) {
        parent.appendChild(element);
    }

    return element;
}
