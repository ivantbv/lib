import { DomManipulation } from "/src/domManipulation.js"
import { addBookToLibrary, myLibrary } from "/src/addingBooks.js"
import { createBook } from "/src/renderBook.js"
import { searchLibrary } from "/src/searchBooks.js"
import { renderDefaultBooks } from "/src/localStorage.js"

//if localStorage is empty it renders couple of default books on the page
renderDefaultBooks();

//handles modal open/close
const domManip = new DomManipulation()
domManip.openModal();

//checks if the title input is filled, and enables/disables add book btn
document.querySelector('#title').onkeyup = enableSubmitBtn;

//adds a book to the library, resests input fields and closes the modal
const addBookButton = document.querySelector('.add-book')
addBookButton.addEventListener('click', () => {
  addBookToLibrary()
  createBook(myLibrary);
  domManip.closeModal()
  resetFormInputValues()
});

const resetFormInputValues = () => {
  document.querySelector('#pages').value = ''
  const allTextInputs = document.querySelectorAll('.form-container input[type="text"]')
  for (let i = 0; i < allTextInputs.length; i++) {
    allTextInputs[i].value = '';
  }
}

function enableSubmitBtn() {
  document.querySelector('.add-book').disabled = (document.querySelector('#title').value === '');
}

searchLibrary();