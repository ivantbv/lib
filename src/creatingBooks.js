let myLibrary = []
const form = document.querySelector('.form-container');
const bookRead = document.querySelectorAll('input[name="read"]')
export class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        bookRead.forEach(i => {
            if (i.checked) read = i.value
        })
        this.id = myLibrary.length
        console.log(read, 'console.log from constructor')
    }

}

export { bookRead, myLibrary }