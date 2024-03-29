const myLibrary = []
let i = 0
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
}

function addBookToLibrary(array){
    myLibrary.push(array)
}


const teachYouToBeRich = new Book('I will teach you to be rich', 'Ramit Sethi', 200, 'yes')

const harryPotter = new Book('Harry Potter', 'JK Rowling', 200, 'yes')

addBookToLibrary(teachYouToBeRich)

addBookToLibrary(harryPotter)

console.log(myLibrary)

function addBookToLibrary(nextBook){
    myLibrary.push(nextBook)
    const table = document.querySelector('table')
    const currentBook = document.createElement('tr')
    const currentBookTitle = document.createElement('td')
    currentBookTitle.innerHTML = nextBook.title
    const currentBookAuthor = document.createElement('td')
    currentBookAuthor.innerHTML = nextBook.author
    currentBook.appendChild(currentBookTitle)
    currentBook.appendChild(currentBookAuthor)
    table.appendChild(currentBook)
}

const button = document.getElementById('addBook')

/* saveButton.addEventListener('click', (title, author, pager, read) => {
    const nextBook = new Book(title, author, pages, read)
    console.log(nextBook.title)
    addBookToLibrary(nextBook)
}) */

const modal = document.querySelector('dialog')

button.addEventListener('click', () => {
    modal.showModal();
})
