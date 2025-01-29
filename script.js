const myLibrary =[]

//constructor
function Book(title, author, no_pages, haveRead) {
    this.title = title;
    this.author = author;
    this.no_pages = no_pages;
    this.haveRead = haveRead;
  }
  

function addBookToLibrary(title,author,no_pages,haveRead){
    let bookObject = new Book(title,author,no_pages,haveRead);
    myLibrary.push(bookObject)
}

function display(){
    const displayedBooksDiv = document.querySelector(".displayedBooks");
    displayedBooksDiv.innerHTML = "";
    for (let i in myLibrary){
        const book = myLibrary[i];
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book"); 
        bookDiv.style.cssText="background-color:lightgreen; width:200px; border:2px solid black;border-radius:10px; padding:5px;"

    
        const title = document.createElement("h4");
        title.textContent = `Title: ${book.title}`;
        bookDiv.appendChild(title);


        const author = document.createElement("p");
        author.textContent = `Author: ${book.author}`;
        bookDiv.appendChild(author);

        const noPages = document.createElement("p");
        noPages.textContent = `Pages: ${book.no_pages}`;
        bookDiv.appendChild(noPages);

        const haveRead = document.createElement("p");
        haveRead.textContent = `Read: ${book.haveRead}`;
        bookDiv.appendChild(haveRead);

        displayedBooksDiv.appendChild(bookDiv);

    }
}

const addButton = document.getElementById("addButton")
addButton.addEventListener("click", function(){
    const form = document.getElementById("form");
    if (form.style.display === "block") {
        form.style.display = "none";  
    } else {
        form.style.display = "block";  
    }
    
});

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(){
    event.preventDefault();

    let title = document.querySelector(".title").value;
    let author = document.querySelector(".author").value;
    let no_pages = document.querySelector(".no_pages").value;
    let haveRead = document.querySelector(".haveRead").value;
    
    if (!title || !author || isNaN(no_pages) || !haveRead) {
        alert("Please fill in all fields correctly.");
        return;
    }
    addBookToLibrary(title,author,no_pages,haveRead);
    document.getElementById("form").reset();
    const form = document.getElementById("form");
    form.style.display = "none"; 
    display();
});

