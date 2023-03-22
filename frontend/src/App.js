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
    <div className="flex flex-col items-center min-h-screen py-8 bg-gray-200">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800">Search for Books</h1>
        <div className="mt-6">
          <Search query={query} onInputChange={handleInputChange} onSearch={handleSearch} />
        </div>
        <div className="mt-6">
          <BookList books={books} query={query} />
        </div>
      </div>
    </div>
  );
}

export default App;
