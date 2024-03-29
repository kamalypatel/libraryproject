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

function addBookToLibrary(nextBook){
    myLibrary.push(nextBook)

    const table = document.querySelector('table')

    const currentBook = document.createElement('tr')

    const currentBookTitle = document.createElement('td')
    currentBookTitle.innerHTML = nextBook.title
    const currentBookAuthor = document.createElement('td')
    currentBookAuthor.innerHTML = nextBook.author
    const currentBookPages = document.createElement('td')
    currentBookPages.innerHTML = nextBook.pages
    const currentBookRead = document.createElement('td')
    currentBookRead.innerHTML = nextBook.read

    currentBook.appendChild(currentBookTitle)
    currentBook.appendChild(currentBookAuthor)
    currentBook.appendChild(currentBookPages)
    currentBook.appendChild(currentBookRead)
    table.appendChild(currentBook)
}

const button = document.getElementById('addBook')

const modal = document.querySelector('dialog')

button.addEventListener('click', () => {
    modal.showModal();
})

const saveButton = document.getElementById('saveButton')

saveButton.addEventListener('click', () => {
    const title = document.querySelector('input[name="title"]').value
    const author = document.querySelector('input[name="author"]').value
    const pages = document.querySelector('input[name="pages"]').value
    const read = document.querySelector('input[name="read"]').value
    const nextBook = new Book(title, author, pages, read)
    console.log(nextBook.title)
    addBookToLibrary(nextBook)
    modal.close()
    event.preventDefault()
})