import { Book } from './Book';
import { Repository } from './Repository';

export function updateBook(book: Book, updates: Partial<Book>): Book {
    return {
        ...book,
        ...updates
    };
}


export function getReadonlyBooks(repo: Repository<Book>): Readonly<Book[]> {
    const arrCopy = repo.getAll().slice();
    return Object.freeze(arrCopy) as Readonly<Book[]>;
}

