import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(`http://localhost:3001/books?query=${query}`);
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Search for Books</h1>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Enter search query" value={query} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
      <div className="book-list">
        {books.map((book, index) => (
          book.title.toLowerCase().includes(query.toLowerCase()) ||
            book.author.toLowerCase().includes(query.toLowerCase()) ||
            book.publicationYear.toString().includes(query) ? (
            <div key={index} className="book">
              <h2>{book.title}</h2>
              <p>Author: {book.author}</p>
              <p>Publication Year: {book.publicationYear}</p>
              <p>Description: {book.description}</p>
            </div>
          ) : null
        ))}
      </div>
    </div>
  );
}

export default App;
