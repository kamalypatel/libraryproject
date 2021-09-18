counter = 0;
index = 0;
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

function cards() {
    const container = document.querySelector("#container");
    const innerContainer = document.createElement('div');
    innerContainer.classList.add('card');
    const content = document.createElement('p');
    content.textContent = `Title: ${booksArray[index].title}`
    const content2 = document.createElement('p');
    content2.textContent = `Author: ${booksArray[index].author}`
    const content3 = document.createElement('p');
    content3.textContent = `Number Of Pages: ${booksArray[index].numberOfPages}`
    const content4 = document.createElement('p');
    content4.textContent = `Has Been Read: ${booksArray[index].hasBeenRead}`
    innerContainer.appendChild(content);
    innerContainer.appendChild(content2);
    innerContainer.appendChild(content3);
    innerContainer.appendChild(content4);
    container.appendChild(innerContainer);
    index++;
}