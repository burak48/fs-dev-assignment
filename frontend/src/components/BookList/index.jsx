import React, { useState } from 'react';

function BookList({ books, searchTerm }) {
    const [visibleBooks, setVisibleBooks] = useState(10);

    const showMoreBooks = () => {
        setVisibleBooks((prevValue) => prevValue + 10);
    };

    const filteredBooks = books.filter((book) => {
        if (
            searchTerm === "" ||
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.publicationYear === searchTerm
        ) {
            return true;
        } else {
            return false;
        }
    });

    return (
        <div className="book-list">
            {filteredBooks.slice(0, visibleBooks).map((book, index) => (
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
            {filteredBooks.length > visibleBooks && (
                <button
                    className="bg-gray-900 text-white px-4 py-2 rounded-lg"
                    onClick={showMoreBooks}
                >
                    Load More
                </button>
            )}
        </div>
    );
}

export default BookList;
