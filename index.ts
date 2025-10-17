import type { Book } from './types/Book';
import { Repository } from './types/Repository';
import { updateBook, getReadonlyBooks } from './types/Helpers';

const book1: Book = { title: 'Братья Карамазовы', author: 'Ф. М. Достоевский', year: 1880 };
const book2: Book = { title: 'Идиот', author: 'Ф. М. Достоевский', year: 1869 };

const bookRepo = new Repository<Book>([book1, book2]);

bookRepo.add({ title: 'Бесы', author: 'Ф. М. Достоевский', year: 1872 });

const updatedBook = updateBook(book1, { year: 1881 });
console.log('Updated Book:', updatedBook);

const readonlyBooks = getReadonlyBooks(bookRepo);
console.log('Readonly Books:', readonlyBooks);


