function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json()) // Convert response to JSON
    .then(books => renderBooks(books)); // Pass data to renderBooks function
}

function renderBooks(books) {
  const main = document.querySelector('main'); // Select the <main> element
  books.forEach(book => {
    const h2 = document.createElement('h2'); // Create an <h2> for each book title
    h2.textContent = book.name;
    main.appendChild(h2); // Append to the page
  });
}

document.addEventListener("DOMContentLoaded", fetchBooks);
