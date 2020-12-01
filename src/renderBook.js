import { myLibrary } from "/src/addingBooks.js"
import {counter} from "/src/creatingBooks.js"

const appendBookDiv = document.querySelector('.append-book')

const render = () => {
    let libraryCopy = myLibrary
    //creating the divs in the book's card
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

    //loop through the library array to get the text content from its values
    libraryCopy.forEach(book => {
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;
        //the books will most likely stack on each other
        //clear the DOM from the book cards first and re-render
    });

    // for (let i =0; i < myLibrary.length; i++) {
    // deleteBookButton.setAttribute('data-id', myLibrary[i].id)
    // console.log(deleteBookButton), 'from for loop setting data attr';
    // }
    deleteBookButton.setAttribute('data-id', counter)

    deleteBookButton.addEventListener('click', (e) => {
       for (let i=0; i < libraryCopy.length; i++) {
            if (e.target.getAttribute('data-id') == libraryCopy[i].id) {
                libraryCopy.splice([i], 1)
            }
       }
                //libraryCopy.splice(libraryCopy.indexOf(e.target.getAttribute('data-id')), 1);

        //myLibrary.splice(myLibrary.indexOf(e.target.getAttribute('data-id')), 1);
           // if (myLibrary[i].id === e.target.getAttribute('data-id')) {
          //  libraryCopy = libraryCopy.filter(book => book.id !== e.target.getAttribute('data-id'))
                
        e.target.parentElement.remove();
     //let filtered = myLibrary.filter(book => book.id !== e.target.getAttribute('data-id'))
        console.log(libraryCopy, 'from del btn');
    })

    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    bookCard.appendChild(bookRead);
    bookCard.appendChild(deleteBookButton);
    appendBookDiv.appendChild(bookCard);

    console.log(libraryCopy, 'library copy')
    console.log(deleteBookButton, 'del btnrender');
}

export { render }