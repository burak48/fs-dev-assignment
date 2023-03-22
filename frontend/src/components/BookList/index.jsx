import React from 'react';

function BookList({books, searchTerm}) {

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.publicationYear.toString().includes(searchTerm)
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
                    {searchTerm && `No results found for "${searchTerm}"`}
                </div>
            )}
            {!searchTerm &&
                books.map((b, i) => (
                    <div key={i} className="book bg-white rounded-lg p-4 shadow-md mb-4">
                        <h2 className="text-xl font-semibold mb-2">{b.title}</h2>
                        <p className="text-gray-500 mb-2">Author: {b.author}</p>
                        <p className="text-gray-500 mb-2">Publication Year: {b.publicationYear}</p>
                        <p className="text-gray-700">{b.description}</p>
                    </div>
                ))}
        </div>
    );
}

export default BookList;
