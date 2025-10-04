import type { Book } from './Book.js';
import type { Borrowable } from './Borrowable.js';

export class LibraryBook implements Borrowable {   
  constructor(public info: Book) {}

  borrow(userName: string): void {
    console.log(`Книга "${this.info.title}" выдана пользователю ${userName}`);
  }
}
