counter = 0;
let booksArray = []

function Book(title, author, numberOfPages, hasBeenRead) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.hasBeenRead = hasBeenRead;
}

function bookArray() {
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var numberOfPages = document.getElementById('numberOfPages').value;
    var hasBeenRead = document.getElementById('hasBeenRead').value;

    const book = new Book(title, author, numberOfPages, hasBeenRead);

    booksArray[counter] = book;
    counter++;
    console.log(booksArray);
    console.log(counter);
}

function test() {
    console.log(booksArray[1].numberOfPages);
}