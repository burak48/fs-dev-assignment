import { faker } from '@faker-js/faker';
import fs from 'fs';

const generateBooks = (count) => {
  const books = [];

  for (let i = 0; i < count; i++) {
    const book = {
      id: faker.datatype.uuid(),
      title: faker.lorem.words(),
      description: faker.lorem.paragraphs(),
      author: `${faker.name.firstName()} ${faker.name.lastName()}`,
      publicationYear: faker.date.past().getFullYear(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    };

    books.push(book);
  }

  return books;
};

const mockData = generateBooks(50);
fs.writeFileSync('./mockData.json', JSON.stringify(mockData));
