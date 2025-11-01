import type { Book } from './Book';
import type { Repository } from './Repository';

export function updateBook(book: Book, updates: Partial<Book>): Book {
  return { ...book, ...updates };
}

export function getReadonlyBooks(repo: Repository<Book>): Readonly<Book[]> {
  return repo.getAll() as Readonly<Book[]>;
}
