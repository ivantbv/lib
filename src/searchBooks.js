import { myLibrary } from "/src/addingBooks.js"
import { createBook } from "/src/renderBook.js"

const searchBar = document.querySelector('.searchBar')
const searchName = document.querySelector('#book-name')
const searchAuthor = document.querySelector('#book-author')
const searchParameter = document.querySelectorAll('input[name="filter-search"]')

const searchLibrary = () => {
    //if radio buttons are being clicked it cleans the searchbar and recreates the library
    searchParameter.forEach(radio => radio.addEventListener('change', (e) => {
        searchBar.value = ''
        createBook(myLibrary)
    }))

    //filters out books by title or author depending on the input in the searchbar
    searchBar.addEventListener('keyup', (e) => {
        const searchString = e.target.value.toLowerCase();

        const filteredBooks = myLibrary.filter(books => {
            if (searchName.checked) {
                return books.title.toLowerCase().includes(searchString)
            } else {
                return books.author.toLowerCase().includes(searchString);
            }
        })

        createBook(filteredBooks)
    })

}

export { searchLibrary }

