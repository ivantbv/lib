import { DomManipulation } from "/src/domManipulation.js"
import { addBookToLibrary, myLibrary } from "/src/addingBooks.js"
import { createBook } from "/src/renderBook.js"
import {searchLibrary} from "/src/searchBooks.js"
import { Book } from "/src/creatingBooks.js"


//make it a function and put it in its own module with the rest of localStrg
if (localStorage['myLibrary'].length === 2) { //local storage at 2 is empty arr - []
  const eloquentJS = new Book(`Eloquent JavaScript`, `by Marijn Haverbeke`, `435 pages`, `Read`, `https://eloquentjavascript.net/`, `https://eloquentjavascript.net/img/cover.jpg`)
  const thinkLikeAProgrammer = new Book(`Think Like A Programmer`, `by Spraul V. A.`, `256 pages`, `Not read`, `https://drive.google.com/file/d/15ygKGZnl2GAIIhVx5VnznrdjF8bK8m_G/view?usp=sharing`, `https://images-na.ssl-images-amazon.com/images/I/51ABP9OsIoL._SX376_BO1,204,203,200_.jpg`)
  const javascriptInfo = new Book(`JavaScript.info`, `by Ilya Kantor`, `1300 pages`, `Not read`, `https://javascript.info/`, ``)
  const C = new Book(`The C Programming Language`, `by Brian W. Kerninghan`, `236 pages`, `Not read`, `https://drive.google.com/file/d/1QCUGcxsPqIGzHBS8Ik4jCrpZDKAfMRT9/view?usp=sharing`, `https://images-na.ssl-images-amazon.com/images/I/41NH37S7YRL._SX354_BO1,204,203,200_.jpg`)
  const OOD = new Book(`Practical Object-oriented Design`, `by Sandi Metz`, `258 pages`, `Not read`, `https://drive.google.com/file/d/17qogHEAblDBXToUVEUkpb-z-Up96Tc2Q/view?usp=sharing`, `https://techrocks.ru/wp-content/uploads/2019/12/12.jpg`)
  myLibrary.push(eloquentJS);
  myLibrary.push(thinkLikeAProgrammer);
  myLibrary.push(javascriptInfo);
  myLibrary.push(C);
  myLibrary.push(OOD);

    createBook(myLibrary)
}
//  else if (localStorage['myLibrary'].length > 2) {
//   myLibrary = JSON.parse(localStorage['myLibrary']);
// }

const domManip = new DomManipulation()
domManip.openModal();

const addBookButton = document.querySelector('.add-book')
document.querySelector('#title').onkeyup = enableSubmitBtn;

function enableSubmitBtn() {
    document.querySelector('.add-book').disabled = (document.querySelector('#title').value === '');
  }

addBookButton.addEventListener('click', () => {
    addBookToLibrary()
    createBook(myLibrary);
    domManip.closeModal()
});

searchLibrary();


//TODO: add notes on the back of each book card
//add the ability to upload a photo if "book image not available" from the
//book card itself
