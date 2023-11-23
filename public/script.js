// This function filters the books based on the input value
function searchBooks() {
    const searchInput = document.getElementById('searchInput');
    const filter = searchInput.value.toLowerCase('');
    const bookContainer = document.getElementById('bookContainer');
    const books = bookContainer.getElementsByClassName('pro'); // Assuming each book item has the class 'pro'

    for (let i = 0; i < books.length; i++) {
        const title = books[i].getElementsByClassName('des')[0].getElementsByTagName('h5')[0];
        const txtValue = title.textContent || title.innerText;

        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            books[i].style.display = ''; // Show the book if it matches the search query
        } else {
            books[i].style.display = 'none'; // Hide the book if it doesn't match
        }
    }
}

// Add an event listener to the search input field to trigger the searchBooks function on input
document.getElementById('searchInput').addEventListener('input', searchBooks);
