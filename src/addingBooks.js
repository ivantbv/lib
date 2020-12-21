import {Book, bookRead} from "/src/creatingBooks.js"

let myLibrary = []
const bookTitle = document.querySelector('#title')
const bookAuthor = document.querySelector('#author')
const bookPages = document.querySelector('#pages')
const bookURL = document.querySelector('#link')
const bookImg = document.querySelector('#picture')

let radioBtnValue;
const addBookToLibrary = () => {
    
    for (const radioBtn of bookRead) {
        if (radioBtn.checked) {
            radioBtnValue = radioBtn.value
        }
    }

    const bookInfo = new Book(`${bookTitle.value}`, `by ${bookAuthor.value}`, `${bookPages.value} pages`, `${radioBtnValue}`, `${bookURL.value}`, `${bookImg.value}`)
    
    myLibrary.push(bookInfo);
}

export const modifyLibrary = value => myLibrary = value; /* when myLibrary gets exported it becomes a const by default and it cant be reassigned when pulling the localStorage. This function allows to modify myLibrary array after export */
export {addBookToLibrary, myLibrary }
