import {myLibrary} from "/src/addingBooks.js"
import {createBook} from "/src/renderBook.js"

const searchBar = document.querySelector('.searchBar')

const searchLibrary = () => {

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

   const filteredBooks = myLibrary.filter(books => {
       return books.title.toLowerCase().includes(searchString)
   })

   createBook(filteredBooks)

})
}

export {searchLibrary}

