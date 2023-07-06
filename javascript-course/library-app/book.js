function Book(name, author, pages, status) {
    this.id = Date.now().toString();
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.stringStatus = status === true ? "read" : "not read yet";
    this.checked = this.status ? 'checked' : '';
}

Book.prototype.info = function () {
    return `${this.name} by ${this.author}, ${this.pages} pages, ${this.status}`;
};
Book.prototype.template = function () {
    return `<div class="card">
    <div class="card-title">${this.name}</div>
    <div class="card-body">
        <div class="author">
            ${this.author}
        </div>
        <div class="pages">
            ${this.pages}
        </div>
        <div class="status">
            <input type="checkbox" ${this.checked} />
        </div>
        <div>
            <button onclick="removeThisBook(${this.id})">Remove Book</button>
        </div>
    </div>
</div>`;
};

// var hobbit = new Book('The Hobbit', 'JRR Tolkien', 123, false);
// console.log(hobbit);
// console.log(hobbit.info());