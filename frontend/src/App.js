import React, { useState } from 'react';
import axios from 'axios';
import BookList from './components/BookList';
import Search from './components/Search';

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
      <Search query={query} onInputChange={handleInputChange} onSearch={handleSearch} />
      <BookList books={books} query={query} />
    </div>
  );
}

export default App;
