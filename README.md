# Book Search Web Application

This is a web application that allows users to search for books. It includes both a back-end and a front-end, with the back-end providing a RESTful API to search a database of books and the front-end providing a user interface for users to enter search terms and view the results.

## Back-End

The back-end is built with Node.js and uses the Express framework to create a RESTful API. The data is stored in a mock database created with the faker.js library, which generates fake book data for testing purposes. The API includes an endpoint that allows users to search the database of books by title, author, or publication year.

The API is implemented using Node.js built-in http module and its search functionality can be extended to integrate with real databases like MySQL, MongoDB, etc.

## Front-End

The front-end is built with React.js and uses the fetch API to make requests to the back-end. It provides a search form for users to enter search terms and a book list to display the results. The book list is paginated with a "load more" button that allows users to see more results.

The front-end is styled using the Tailwind CSS framework, which provides a simple and flexible way to create beautiful and responsive user interfaces.

## Usage

To use this web application, follow these steps:

1. Clone the repository to your local machine.
2. Install the necessary dependencies by running `npm install` in the root directory of the project.
3. Start the back-end server by running `node index.js` in the terminal.
4. Start the front-end server by running `npm start` in a new terminal tab or window.
5. Open a web browser and navigate to `http://localhost:3000` to view the web application.

In the search form, you can enter search terms for the title, author, or publication year of a book.

## Conclusion

This web application provides a simple and easy-to-use interface for searching a database of books. It is built with modern web technologies like Node.js, React.js, and Tailwind CSS and can be easily extended to integrate with real databases and provide more advanced search functionality.
