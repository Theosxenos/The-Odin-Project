const libraryModule = (() => {
    const mylibrary = [];

    function addFakeData() {
        const hobbit = new Book('The Hobbit', 'JRR Tolkien', 123, false);
        addBookToLibrary(hobbit);

        setTimeout(() =>{
            const lotr = new Book('The LotR', 'JRR Tolkien', 321, true);
            addBookToLibrary(lotr);
        }, 1);
    }

    function init() {
        cacheDom();
        bindEvents();
        addFakeData();
    }

    function cacheDom() {
        this.bookcontainer = document.querySelector('.bookcontainer');
        this.form = document.querySelector('form');
    }

    function bindEvents() {
        this.form.addEventListener('submit', submitForm);
    }
    
    function addBookToLibrary(book) {
        mylibrary.push(book);
        let bookelement = createBookElement(book);
        this.bookcontainer.appendChild(bookelement.content.firstChild);
    }

    function createBookElement(book) {
        const bookelement = document.createElement('template');
        bookelement.innerHTML = book.template().trim();
        bookelement.content.firstChild.dataset.bookId = book.id;
        const deletebutton = bookelement.content.querySelector('button');
        deletebutton.addEventListener('click', (e) => {
            removeBookFromLibraryById(book.id);
        });
        
        return bookelement;
    }

    function submitForm(e) {
        e.preventDefault();

        const { name, author, pages, read } = e.target.elements;
        const book = new Book(name.value, author.value, pages.value, read.checked);

        addBookToLibrary(book);

        e.target.reset();
    }

    function removeBookFromLibraryById(id) {
        const bookindex = mylibrary.findIndex(b => b.id === id);
        mylibrary.splice(bookindex, 1);
        
        const bookelement = this.bookcontainer.querySelector(`[data-book-id="${id}"]`);
        this.bookcontainer.removeChild(bookelement);
    }

    return {
        init
    }
})();

libraryModule.init();