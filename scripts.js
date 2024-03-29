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