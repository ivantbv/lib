import {myLibrary} from "/src/addingBooks.js"

const appendBookDiv = document.querySelector('.append-book')
const render = () => {
    //creating the divs in the book's card
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card')
    const bookTitle = document.createElement('div')
    bookTitle.classList.add('book-title')
    const bookAuthor = document.createElement('div')
    bookAuthor.classList.add('book-author')
    const bookPages = document.createElement('div');
    bookPages.classList.add('book-pages')

    const bookRead = document.createElement('div')
    bookRead.classList.add('book-read')

    console.log(myLibrary, 'from render')
    //loop through the library array to get the text content from its values
    myLibrary.forEach(book => {
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;
        //the books will most likely stack on each other
        //clear the DOM from the book cards first and re-render
        console.log(book.title, 'from forEach render');       
    });
    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(bookRead);
    appendBookDiv.appendChild(bookCard);
}

export {render}