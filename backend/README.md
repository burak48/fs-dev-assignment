# Backend for Book Search Web Application

This is the backend of a simple book search web application. The backend is built with Node.js and uses the Express framework to expose an API for searching a database of books. The API can be used by the frontend to search for books by title, author, or publication year.

## Setup

1. Clone the repository
2. Navigate to the `backend` directory
3. Install the dependencies with `npm install`
4. Start the server with `node index.js`

The server should now be running on `http://localhost:3001`.

## Endpoints

The API has the following endpoints:

### GET /books

Returns a list of all the books in the database.

## Database

The database used in this application is a mock database created using the faker.js library. It contains 50 books with randomly generated titles, authors, publication years, and descriptions.

## Dependencies

The backend uses the following dependencies:

- `express`: A fast, unopinionated web framework for Node.js
- `cors`: A middleware that enables CORS (Cross-Origin Resource Sharing) for Express.js
- `faker`: A library for generating fake data.

## Technologies Used

- Node.js
- Express
- Faker.js

## Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on the repository. If you'd like to contribute code, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more information.
