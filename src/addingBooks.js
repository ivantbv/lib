import {Book, bookRead} from "/src/creatingBooks.js"

var myLibrary = []
const bookTitle = document.querySelector('#title')
const bookAuthor = document.querySelector('#author')
const bookPages = document.querySelector('#pages')

let radioBtnValue;
const addBookToLibrary = () => {
    
    for (const radioBtn of bookRead) {
        if (radioBtn.checked) {
            radioBtnValue = radioBtn.value
        }
    }

    const bookInfo = new Book(`${bookTitle.value}`, `by ${bookAuthor.value}`, `${bookPages.value}`, `${radioBtnValue}`)
    
    myLibrary.push(bookInfo);
    console.log(bookInfo.id, myLibrary, 'from add book to libr func')
}

export {addBookToLibrary, myLibrary}