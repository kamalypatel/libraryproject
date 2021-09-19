counter = 0;
index = 0;
index2 = 0;
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
}

function cards() {
    const container = document.querySelector("#container");
    const innerContainer = document.createElement('div');
    innerContainer.setAttribute('id', index);
    innerContainer.classList.add('card');
    const idNum = document.createElement('p');
    idNum.textContent = `Index: ${index}`
    const content = document.createElement('p');
    content.textContent = `Title: ${booksArray[index].title}`
    const content2 = document.createElement('p');
    content2.textContent = `Author: ${booksArray[index].author}`
    const content3 = document.createElement('p');
    content3.textContent = `Number Of Pages: ${booksArray[index].numberOfPages}`
    const content4 = document.createElement('p');
    content4.setAttribute('id', index2);
    content4.textContent = `Has Been Read: ${booksArray[index].hasBeenRead}`
    
    const btn = document.createElement('button');
    btn.innerHTML = 'Delete Book';
    btn.name = 'delete';
    btn.classList.add('deletebtn');
    btn.setAttribute('id', 'deletebtn');
    btn.onclick = function() {
        const innerContainers = document.getElementById(innerContainer.id);
        innerContainers.remove();
    };

    const btn2 = document.createElement('button');
    btn2.innerHTML = 'Toggle Read Book';
    btn2.name = 'toggle';
    btn2.classList.add('togglebtn');
    btn2.setAttribute('id', 'togglebtn');
    btn2.onclick = function() {
        if (content4.textContent == 'Has Been Read: Yes') {
            content4.textContent = 'Has Been Read: No';
        } else if (content4.textContent == 'Has Been Read: No') {
            content4.textContent = 'Has Been Read: Yes';
        }
    };


    innerContainer.appendChild(content);
    innerContainer.appendChild(content2);
    innerContainer.appendChild(content3);
    innerContainer.appendChild(content4);
    innerContainer.appendChild(btn);
    innerContainer.appendChild(btn2);
    container.appendChild(innerContainer);
    index++;
    index2++;
    console.log(innerContainer.id); //this line confirms each card has it's own id.
    //you should be able to add     buttons that know their id and card that they are
    //supposed to delete. Not sure how to delete them though? innetHTML ''?
}