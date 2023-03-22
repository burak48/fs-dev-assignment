import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mockData from './mockData.json' assert { type: "json" }


const app = express();
const port = 3001;

// Add middleware for parsing request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Add middleware for setting up CORS headers
app.use(cors());

app.get('/books', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(mockData);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
