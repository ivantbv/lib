import {myLibrary} from "/src/addingBooks.js"
const form = document.querySelector('.form-container');
const bookRead = document.querySelectorAll('input[name="read"]')

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
        //^ fix the id to be 0 and incremented when a book object is added
       
    }
}

export { bookRead, counter }