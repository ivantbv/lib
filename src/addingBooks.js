import {Book, myLibrary, bookRead} from "/src/creatingBooks.js"

const bookTitle = document.querySelector('#title')
const bookAuthor = document.querySelector('#author')
const bookPages = document.querySelector('#pages')


const addBookToLibrary = () => {
    let radioBtnValue;
    for (const radioBtn of bookRead) {
        if (radioBtn.checked) {
            radioBtnValue = radioBtn.value
        }
    }
    console.log(radioBtnValue, 'radio btn value')

    const bookInfo = new Book(`${bookTitle.value}`, `by ${bookAuthor.value}`, `${bookPages.value}`, `Read status: ${radioBtnValue}` )

    myLibrary.push(bookInfo);

    for (let book in myLibrary) {
        console.log(myLibrary[book])
    }
}

export {addBookToLibrary}