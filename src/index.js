import {DomManipulation} from "/src/domManipulation.js"
import {addBookToLibrary} from "/src/addingBooks.js"
import {render} from "/src/renderBook.js"

const domManip = new DomManipulation()
domManip.openModal();

const addBookButton = document.querySelector('.add-book')
addBookButton.addEventListener('click', () => {

addBookToLibrary()
render()
});

