import React, { useState, useEffect } from 'react';
import BookList from './components/BookList';
import Search from './components/Search';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen py-8 bg-gray-200">
      <div className="w-full max-w-3xl">
        <h1 className="text-4xl font-bold text-center text-gray-800">Search for Books</h1>
        <div className="mt-6">
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
        <div className="mt-6">
          <BookList books={books} searchTerm={searchTerm} />
        </div>
      </div>
    </div>
  );
}

export default App;
