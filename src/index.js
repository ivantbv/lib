import { DomManipulation } from "/src/domManipulation.js"
import { addBookToLibrary, render, createBook } from "/src/addingBooks.js"
//import { render } from "/src/renderBook.js"
import {myLibrary} from "/src/addingBooks.js"


const domManip = new DomManipulation()
domManip.openModal();

const addBookButton = document.querySelector('.add-book')
addBookButton.addEventListener('click', () => {

    addBookToLibrary()
    // render()
    createBook();
    console.log(myLibrary)
});

