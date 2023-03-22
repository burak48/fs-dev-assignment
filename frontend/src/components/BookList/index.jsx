import React from 'react';

function BookList(props) {
  const { books, query } = props;

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(query.toLowerCase()) ||
    book.author.toLowerCase().includes(query.toLowerCase()) ||
    book.publicationYear.toString().includes(query)
  );

  return (
    <div className="book-list">
      {filteredBooks.map((book, index) => (
        <div key={index} className="book bg-white rounded-lg p-4 shadow-md mb-4">
          <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
          <p className="text-gray-500 mb-2">Author: {book.author}</p>
          <p className="text-gray-500 mb-2">Publication Year: {book.publicationYear}</p>
          <p className="text-gray-700">{book.description}</p>
        </div>
      ))}
      {filteredBooks.length === 0 && (
        <div className="col-span-full text-center text-gray-400">
          {query && `No results found for "${query}"`}
          {!query && 'Enter a search query above to get started'}
        </div>
      )}
    </div>
  );
}

export default BookList;
