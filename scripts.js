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
    i++
    const table = document.querySelector('table')

    const currentBook = document.createElement('tr')

    const currentBookTitle = document.createElement('td')
    currentBookTitle.innerHTML = nextBook.title
    currentBookTitle.classList.add(`on${i}`)
    const currentBookAuthor = document.createElement('td')
    currentBookAuthor.innerHTML = nextBook.author
    currentBookAuthor.classList.add(`on${i}`)
    const currentBookPages = document.createElement('td')
    currentBookPages.innerHTML = nextBook.pages
    currentBookPages.classList.add(`on${i}`)
    const currentBookRead = document.createElement('td')
    currentBookRead.innerHTML = nextBook.read
    currentBookRead.classList.add(`on${i}`)

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('type','button')
    deleteButton.setAttribute('name','deleteButton')
    deleteButton.classList.add(`on${i}`)
    deleteButton.addEventListener('click', () => {
            /* const buttonClass = this.classList */
            console.log(deleteButton.classList)
            const row = document.querySelectorAll(`.${deleteButton.classList[0]}`)
            for (let n = 0; i < row.length - 1; n++) {
                console.log(row[n])
                row[n].remove()
            }
    })

    currentBook.appendChild(currentBookTitle)
    currentBook.appendChild(currentBookAuthor)
    currentBook.appendChild(currentBookPages)
    currentBook.appendChild(currentBookRead)
    currentBook.appendChild(deleteButton)
    table.appendChild(currentBook)
}

const button = document.getElementById('addBook')

const modal = document.querySelector('dialog')

button.addEventListener('click', () => {
    modal.showModal();
})

const saveButton = document.getElementById('saveButton')

saveButton.addEventListener('click', () => {
    const title = document.querySelector('input[name="title"]')
    const author = document.querySelector('input[name="author"]')
    const pages = document.querySelector('input[name="pages"]')
    const read = document.querySelector('input[name="read"]')
    const nextBook = new Book(title.value, author.value, pages.value, read.value)
    addBookToLibrary(nextBook)
    title.value = ''
    author.value = ''
    pages.value = ''
    read.value = ''
    modal.close()
    event.preventDefault()
})