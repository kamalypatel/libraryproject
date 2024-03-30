const myLibrary = []
let i = 0
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages
    this.read = read
}

function addBookToLibrary(nextBook){
    myLibrary.push(nextBook)
    i++
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

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('type','button')
    deleteButton.setAttribute('name','deleteButton')
    deleteButton.innerText = 'Delete Book'
    deleteButton.addEventListener('click', () => {
        currentBook.remove()
    })

    const readStatus = document.createElement('button')
    readStatus.setAttribute('type','button')
    readStatus.setAttribute('name','readStatus')
    readStatus.innerText = 'Change Read Status'
    readStatus.addEventListener('click', () => {
        if (currentBookRead.innerHTML == 'Y') {
            currentBookRead.innerHTML = 'N'
        } else {
            currentBookRead.innerHTML = 'Y'
        }
    })

    currentBook.appendChild(currentBookTitle)
    currentBook.appendChild(currentBookAuthor)
    currentBook.appendChild(currentBookPages)
    currentBook.appendChild(currentBookRead)
    currentBook.appendChild(deleteButton)
    currentBook.appendChild(readStatus)
    table.appendChild(currentBook)
}

const button = document.getElementById('addBook')

const modal = document.querySelector('dialog')

button.addEventListener('click', () => {
    modal.showModal();
})

const saveButton = document.getElementById('saveButton')

saveButton.addEventListener('click', () => {
    event.preventDefault()

    const title = document.querySelector('input[name="title"]')
    const author = document.querySelector('input[name="author"]')
    const pages = document.querySelector('input[name="pages"]')
    const read = document.querySelector('input[name="read"]:checked')

    const nextBook = new Book(title.value, author.value, pages.value, read.value)

    addBookToLibrary(nextBook)

    title.value = ''
    author.value = ''
    pages.value = ''

    document.querySelectorAll('input[name="read"]').forEach(radio => {
        radio.checked = false;
    })

    modal.close()
})