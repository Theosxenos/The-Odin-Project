class Book {
    constructor(name, author, pages, status) {
        this.id = Date.now().toString();
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.status = status;
        this.stringStatus = status === true ? "read" : "not read yet";
        this.checked = this.status ? 'checked' : '';
    }

    info() {
        return `${this.name} by ${this.author}, ${this.pages} pages, ${this.status}`;
    }

    template () {
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
                            <button>Remove Book</button>
                        </div>
                    </div>
                </div>`;
    }
}