let mylibrary = [];

let bookcontainer;
let form;


function initialize() {
    bookcontainer = document.querySelector('.bookcontainer');
    form = document.querySelector('form');
    // form.addEventListener('submit', submitForm);

    var hobbit = new Book('The Hobbit', 'JRR Tolkien', 123, false);
    mylibrary.push(hobbit);
    
    setTimeout(() => {
        mylibrary.push(new Book('The LotR', 'JRR Tolkien', 321, true));
        showAllBooks();
    },1);


}

function addBookToLibrary(book) {
    mylibrary.push(book);
}

function showAllBooks() {
    bookcontainer.innerHTML = '';
    mylibrary.forEach(book => {
        // console.log(book.template);
        var bookelement = document.createElement('template');
        bookelement.innerHTML = book.template().trim();
        // console.log('element', bookelement);
        bookelement.content.firstChild.id = book.id;
        bookcontainer.appendChild(bookelement.content.firstChild);
        console.log(book.info());
    });
}

function submitForm(e) {
    console.log('form submitted', e);
    var name = e.target.elements.name.value; // of e.target.elements['name'].value
    var author = e.target.elements.author.value;
    var pages = e.target.elements.pages.value;
    var read = e.target.elements.read.checked;

    var book = new Book(name, author, pages, read);
    
    addBookToLibrary(book);
    showAllBooks();

    e.preventDefault();
    e.srcElement.reset();
}

function removeThisBook(id) {
    var bookindex = mylibrary.findIndex(b => b.id == id);
    mylibrary.splice(bookindex, 1);

    showAllBooks();
}

initialize();