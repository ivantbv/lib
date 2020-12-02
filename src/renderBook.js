import { myLibrary } from "/src/addingBooks.js"
import {counter} from "/src/creatingBooks.js"

const appendBookDiv = document.querySelector('.append-book')

const render = () => {
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

    //loop through the library array to get the text content from its values
    myLibrary.forEach(book => {
        bookTitle.textContent = book.title;
        bookAuthor.textContent = book.author;
        bookPages.textContent = book.pages;
        bookRead.textContent = book.read;
    });

    deleteBookButton.setAttribute('data-id', counter)
    toggleReadButton.setAttribute('data-id', counter)

    deleteBookButton.addEventListener('click', (e) => {
       for (let i=0; i < myLibrary.length; i++) {
            if (e.target.getAttribute('data-id') == myLibrary[i].id) {
                myLibrary.splice([i], 1)
            }
       }
        //myLibrary.splice(myLibrary.indexOf(e.target.getAttribute('data-id')), 1); 
       
          //document.querySelectorAll('.book-card').forEach(book => appendBookDiv.removeChild(book));
        e.target.parentElement.remove();

        console.log(myLibrary, 'from del btn');
    })

    toggleReadButton.addEventListener('click', (e) => {
        for (let i=0; i < myLibrary.length; i++) {
            if (e.target.getAttribute('data-id') == myLibrary[i].id) {
                if (myLibrary[i].read === 'Read') {
                    myLibrary[i].read = 'Not read'
                    bookRead.textContent = myLibrary[i].read;

                } else if (myLibrary[i].read === 'Not read') {
                    myLibrary[i].read = 'Read'
                    bookRead.textContent = myLibrary[i].read;
                }

                console.log(myLibrary, 'from toggle read btn')
            }
        }
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

export { render }