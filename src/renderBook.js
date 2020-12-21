import { myLibrary, modifyLibrary } from "/src/addingBooks.js"
//import {counter} from "/src/creatingBooks.js"

const appendBookDiv = document.querySelector('.append-book')

const setLocalStorage = () => {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary))
}

const render = bookInfo => {
    //creating the elements in the book's card
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card')
    const bookTitle = document.createElement('div')
    bookTitle.classList.add('book-title')
    const bookAuthor = document.createElement('div')
    bookAuthor.classList.add('book-author')
    const bookPages = document.createElement('div');
    bookPages.classList.add('book-pages')
    const bookLink = document.createElement('a');
    bookLink.classList.add('book-link')
    const bookPic = document.createElement('img')
    bookPic.classList.add('book-pic');
    const bookRead = document.createElement('div')
    bookRead.classList.add('book-read')
    const readDiv = document.createElement('div');

    const deleteBookButton = document.createElement('button');
    deleteBookButton.classList.add('delete-book', 'flex')
    deleteBookButton.textContent = 'X';

    // const toggleReadButton = document.createElement('button');
    // toggleReadButton.classList.add('read-button')
    // toggleReadButton.textContent = 'Read Status'

    const toggleReadButton = document.createElement('input');
    toggleReadButton.type = 'checkbox'
    toggleReadButton.classList.add('read-check')
    if (bookInfo.read === 'Read') {
        toggleReadButton.checked = true;
    } else {
        toggleReadButton.checked = false;
    }

    readDiv.appendChild(bookRead)
    readDiv.appendChild(toggleReadButton)

    readDiv.classList.add('read-div')

    //get the text content from the library array from createBook function
    bookTitle.textContent = bookInfo.title;
    bookAuthor.textContent = bookInfo.author;
    bookPages.textContent = bookInfo.pages;
    bookRead.textContent = bookInfo.read;
    bookLink.href = bookInfo.link    
    bookLink.textContent = 'Read this book'
    bookLink.target = '_blank'
    bookPic.src = bookInfo.image;
    console.log(bookPic.getAttribute('src'), bookInfo.image, 'book src')
    if (bookPic.getAttribute('src') === '') {
        bookPic.src = '/dist/images/NotAvailable.jpeg'
    }
    bookPic.alt = 'Book\'s image'

    setLocalStorage();

    deleteBookButton.addEventListener('click', (e) => {
        myLibrary.splice(myLibrary.indexOf(bookInfo),1);
        createBook(myLibrary)    
        setLocalStorage()
    })

    // toggleReadButton.addEventListener('click', (e) => {
    //      if (bookInfo.read === 'Read') {
    //         bookInfo.read = 'Not read'
    //     } else if (bookInfo.read === 'Not read') {
    //         bookInfo.read = 'Read'
    //     }

    //     createBook(myLibrary)
    //     setLocalStorage()
    // })
    toggleReadButton.addEventListener('click', function() {
        if (bookInfo.read === 'Read') {
            bookInfo.read = 'Not read'
            console.log(bookInfo.read)
        } else if (bookInfo.read === 'Not read') {
            bookInfo.read = 'Read'
            console.log(bookInfo.read)
        }

        createBook(myLibrary)
        setLocalStorage()
    })

    bookCard.appendChild(bookTitle);

    if (bookInfo.author !== 'by ') { bookCard.appendChild(bookAuthor); }
    if (bookInfo.pages !== ' pages') {bookCard.appendChild(bookPages); }
    bookCard.appendChild(readDiv);
    if (bookInfo.link) { bookCard.appendChild(bookLink); }
    bookCard.appendChild(bookPic);
    bookCard.appendChild(deleteBookButton);
    //bookCard.appendChild(toggleReadButton);

    appendBookDiv.appendChild(bookCard);
}

function createBook(libraryArr) {
    const bookContainer = document.querySelector('.append-book')
    const books = document.querySelectorAll('.book-card')

    books.forEach(book => bookContainer.removeChild(book))
    console.log(books, 'from createBook func')
    for (let i =0; i < libraryArr.length; i++) {
        render(libraryArr[i])
    }
}

//pulls books from the localStorage (if any) and displays them on the page
const getLocalStorage = () => {
     if (!localStorage.myLibrary) {
        createBook(myLibrary)
    } else {
        const localStrgObjects = JSON.parse(localStorage.getItem('myLibrary'));
        modifyLibrary(localStrgObjects);
        createBook(myLibrary)
    }
}

getLocalStorage();

 export { createBook, render }