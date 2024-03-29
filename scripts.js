const myLibrary = []

function Book(title, author) {
    this.title = title;
    this.author = author;
}

function addBookToLibrary(array){
    myLibrary.push(array)
}


const teachYouToBeRich = new Book('I will teach you to be rich', 'Ramit Sethi')

const harryPotter = new Book('Harry Potter', 'JK Rowling')

addBookToLibrary(teachYouToBeRich)

addBookToLibrary(harryPotter)

console.log(myLibrary)

function addBookToLibrary(){
    const table = document.querySelector('table')
    const currentBook = document.createElement(tr)
    const currentBookTitle = document.createElement(td)
    currentBookTitle.innerHTML = title
    const currentBookAuthor = document.createElement(td)
    currentBookAuthor.innerHTML = author
    currentBook.appendChild(currentBookTitle)
    currentBook.appendChild(currentBookAuthor)
    table.appendChild(currentBook)
}