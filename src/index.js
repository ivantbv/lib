import { DomManipulation } from "/src/domManipulation.js"
import { addBookToLibrary, myLibrary } from "/src/addingBooks.js"
import { createBook } from "/src/renderBook.js"
import {searchLibrary} from "/src/searchBooks.js"

const domManip = new DomManipulation()
domManip.openModal();

const addBookButton = document.querySelector('.add-book')
document.querySelector('#title').onkeyup = enableSubmit;

function enableSubmit() {
    document.querySelector('.add-book').disabled = (document.querySelector('#title').value === '');
  }

addBookButton.addEventListener('click', () => {
    addBookToLibrary()
    createBook(myLibrary);
    domManip.closeModal()
});

searchLibrary();


//TODO add rating system of each book (5 stars), link to read each book
//and photo
