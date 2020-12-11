import { myLibrary, modifyLibrary } from "/src/addingBooks.js"
import {counter} from "/src/creatingBooks.js"

const appendBookDiv = document.querySelector('.append-book')

const setLocalStorage = () => {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

function render(bookInfo) {
    //creating the elements in the book's card
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card')
    const bookTitle = document.createElement('div')
    bookTitle.classList.add('book-title')
    const bookAuthor = document.createElement('div')
    bookAuthor.classList.add('book-author')
    const bookPages = document.createElement('div');
    bookPages.classList.add('book-pages')

    const bookRead = document.createElement('div')
    bookRead.classList.add('book-read')

    const deleteBookButton = document.createElement('button');
    deleteBookButton.classList.add('delete-book')
    deleteBookButton.textContent = 'X';

    const toggleReadButton = document.createElement('button');
    toggleReadButton.classList.add('read-button')
    toggleReadButton.textContent = 'Read Status'

    //get the text content from the library array from createBook function
    bookTitle.textContent = bookInfo.title;
    bookAuthor.textContent = bookInfo.author;
    bookPages.textContent = bookInfo.pages;
    bookRead.textContent = bookInfo.read;
    setLocalStorage();

    // deleteBookButton.setAttribute('data-id', counter)
    // toggleReadButton.setAttribute('data-id', counter)

    deleteBookButton.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.indexOf(bookInfo),1);
        createBook()    
        setLocalStorage()
        //e.target.parentElement.remove();

        console.log(myLibrary, 'from del btn');
    })

    toggleReadButton.addEventListener('click', (e) => {
         if (bookInfo.read === 'Read') {
            bookInfo.read = 'Not read'
        } else if (bookInfo.read === 'Not read') {
            bookInfo.read = 'Read'
        }
        createBook()
        setLocalStorage()
        console.log(myLibrary, 'from toggle read btn')
    })

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.appendChild(deleteBookButton);
    bookCard.appendChild(toggleReadButton);
    appendBookDiv.appendChild(bookCard);

    console.log(deleteBookButton, 'del btnrender');
}

function createBook() {
    const bookContainer = document.querySelector('.append-book')
    const books = document.querySelectorAll('.book-card')

    books.forEach(book => bookContainer.removeChild(book))
    console.log(books, 'from createBook func')
    for (let i =0; i < myLibrary.length; i++) {
        render(myLibrary[i])
    }
}

//pulls books from the localStorage (if any) and displays them on the page
const restore = () => {
     if (!localStorage.myLibrary) {
        createBook()
    } else {
        const localStrgObjects = JSON.parse(localStorage.getItem('myLibrary'));
        modifyLibrary(localStrgObjects);
        createBook()
    }
}

restore();

 export { createBook }