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
        <div key={index} className="book">
          <h2>{book.title}</h2>
          <p>Author: {book.author}</p>
          <p>Publication Year: {book.publicationYear}</p>
          <p>Description: {book.description}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
