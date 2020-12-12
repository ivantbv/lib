import { DomManipulation } from "/src/domManipulation.js"
import { addBookToLibrary } from "/src/addingBooks.js"
import { createBook } from "/src/renderBook.js"
import {myLibrary} from "/src/addingBooks.js"
import {searchLibrary} from "/src/searchBooks.js"

const domManip = new DomManipulation()
domManip.openModal();

const addBookButton = document.querySelector('.add-book')
addBookButton.addEventListener('click', () => {

    addBookToLibrary()
    createBook(myLibrary);
    console.log(myLibrary)
});

searchLibrary();
