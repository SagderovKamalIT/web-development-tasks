import { Book } from './types/Book';
import { LibraryBook } from './types/LibraryBook';

const book1: Book = { title: 'Братья Карамазовы', author: 'Ф. М. Достоевский', year: 1880 };
const book2: Book = { title: 'Идиот', author: 'Ф. М. Достоевский', year: 1869 };
const book3: Book = { title: 'Бесы', author: 'Ф. М. Достоевский', year: 1872 };

const libBook1 = new LibraryBook(book1);
const libBook2 = new LibraryBook(book2);
const libBook3 = new LibraryBook(book3);

libBook1.borrow('Анна');
libBook2.borrow('Николай');
libBook3.borrow('Мария');
