import { DomManipulation } from "/src/domManipulation.js"
import { addBookToLibrary, myLibrary } from "/src/addingBooks.js"
import { createBook } from "/src/renderBook.js"
import {searchLibrary} from "/src/searchBooks.js"

const domManip = new DomManipulation()
domManip.openModal();

const addBookButton = document.querySelector('.add-book')
document.querySelector('#title').onkeyup = enableSubmitBtn;

function enableSubmitBtn() {
    document.querySelector('.add-book').disabled = (document.querySelector('#title').value === '');
  }

addBookButton.addEventListener('click', () => {
    addBookToLibrary()
    createBook(myLibrary);
    domManip.closeModal()
});

searchLibrary();


//TODO: add notes on the back of each book card
//add the ability to upload a photo if "book image not available" from the
//book card itself
