import {DomManipulation} from "/src/domManipulation.js"
import {addBookToLibrary} from "/src/addingBooks.js"

const domManip = new DomManipulation()
domManip.openModal();

const addBookButton = document.querySelector('.add-book')
addBookButton.addEventListener('click', addBookToLibrary);

