import {myLibrary} from "/src/addingBooks.js"
const form = document.querySelector('.form-container');
const bookRead = document.querySelectorAll('input[name="read"]')
//counter for the id in the Book object. gets incremented on each new book
let counter = 0;

export class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        bookRead.forEach(i => {
            if (i.checked) read = i.value
        });
        this.id = ++counter;       
    }
}
export { bookRead, counter }